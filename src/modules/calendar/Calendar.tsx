import React, { useEffect, useRef, useState } from "react";
import styles from "./styles";
import { Calendar } from "react-native-calendars";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import ModalNotion from "~components/modal/ModalNotion";
import AsyncStorage from "@react-native-async-storage/async-storage";

const listNameSort = [
  { title: "Started", id: 1, color: "green" },
  { title: "In Progress", id: 2, color: "yellow" },
  { title: "Finished", id: 3, color: "blue" },
  { title: "Canceled", id: 4, color: "red" },
];
enum Colors {
  "black",
  "green",
  "yellow",
  "blue",
  "red",
}

const CalendarScreen = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [listItemChoose, setItemChoose] = useState<any[]>([...listNameSort]);
  const [dateString, setDateString] = useState<string>("");
  const currentIdChoose = useRef<number>(0);
  const vacation = { key: "vacation", color: "blue" };
  const massage = { key: "massage", color: "red" };
  const workout = { key: "workout", color: "green" };
  const [dataCalendar, setDataCalendar] = useState<any[]>();

  const loadCalendar = async () => {
    const jsonString = await AsyncStorage.getItem("demo-app");
    const jsonObject = jsonString ? JSON.parse(jsonString) : "";
    setDataCalendar([jsonObject]);
    console.log(jsonObject);
    // Object.assign(this, jsonObject);
  };
  const saveCalendar = async (data: {}) => {
    let jsonString = "";
    jsonString = JSON.stringify(data); //value
    await AsyncStorage.setItem("demo-app", jsonString);
  };
  useEffect(() => {
    loadCalendar();
  }, []);

  return (
    <View>
      <View style={styles.containerRow}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>All</Text>
        </TouchableOpacity>
        <FlatList
          horizontal={true}
          data={listNameSort}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: item.color }]}
            >
              <Text style={[styles.txtBtn, { color: "#E0E0E0" }]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Calendar
        markingType={"multi-dot"}
        markedDates={{
          "2023-03-25": {
            dots: [vacation, massage, workout],
            // selected: true,
            // selectedColor: "red",
          },
          "2023-03-16": { dots: [massage, workout], disabled: false },
        }}
        onDayPress={(value) => {
          setDateString(value?.dateString);
          console.log(value?.dateString);
          setIsVisible(true);
        }}
      />
      <ModalNotion
        onPressCancel={() => {
          setIsVisible(false);
        }}
        onPressOk={() => {
          saveCalendar({
            [dateString]: [
              { title: "testTitle", status: currentIdChoose.current },
            ],
          });
          setIsVisible(false);
        }}
        title={"Set Calendar"}
        isVisible={isVisible}
        children={
          <View style={{ marginVertical: 30 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.txtPopup}>Status: </Text>
              {listItemChoose.map((i, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    currentIdChoose.current = i.id;
                    setItemChoose((preState) => {
                      const newArr = [...preState];
                      newArr.forEach((item, i) => {
                        if (item !== i) {
                          item.isCheck = false;
                        }
                      });
                      newArr[index].isCheck = true;
                      return newArr;
                    });
                  }}
                  style={[
                    i?.isCheck == true
                      ? styles.tcb_Choose_border
                      : styles.tcb_Choose,
                    { backgroundColor: i.color },
                  ]}
                >
                  <Text />
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.txtPopup}>DateTime: {dateString} </Text>
          </View>
        }
      />
    </View>
  );
};
export default CalendarScreen;
