import React, { useEffect, useRef, useState } from "react";
import styles from "./styles";
import { Calendar } from "react-native-calendars";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  ToastAndroid,
} from "react-native";
import ModalNotion from "~components/modal/ModalNotion";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native-gesture-handler";

const listNameSort = [
  { title: "All", id: 0, color: "black" },
  { title: "Started", id: 1, color: "green" },
  { title: "In Progress", id: 2, color: "yellow" },
  { title: "Finished", id: 3, color: "blue" },
  { title: "Canceled", id: 4, color: "red" },
];

const CalendarScreen = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [listItemChoose, setItemChoose] = useState<any[]>([...listNameSort]);
  const [dateString, setDateString] = useState<string>("");
  const currentIdChoose = useRef<number | undefined>(undefined);
  const [dataCalendar, setDataCalendar] = useState<any[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [objetRender, setObjectRender] = useState<{}>({});

  const loadCalendar = async () => {
    const jsonString = await AsyncStorage.getItem("demo-app");
    const jsonObject = jsonString ? JSON.parse(jsonString) : "";
    const result: any = {};

    for (const item of jsonObject) {
      const date = Object.keys(item)[0];
      const color = item[date].color;
      const key = item[date].key;
      if (result[date]) {
        result[date].dots.push({ key, color });
      } else {
        result[date] = { dots: [{ key, color }] };
      }
    }
    console.log("jjasdas", { ...objetRender });
    setDataCalendar(jsonObject);
    setObjectRender(result);
  };
  const saveCalendar = async (data: any) => {
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
          <Text style={styles.txtBtn}>Create Event</Text>
        </TouchableOpacity>

        <ScrollView showsHorizontalScrollIndicator horizontal={true}>
          {listNameSort.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.btn, { backgroundColor: item.color }]}
            >
              <Text style={[styles.txtBtn, { color: "#E0E0E0" }]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <Calendar
        markingType={"multi-dot"}
        markedDates={{
          ...objetRender,
          // "2023-03-25": {
          //   dots: [vacation, massage, workout],
          //   // selected: true,
          //   // selectedColor: "red",
          // },
          // "2023-03-16": { dots: [ { key: "vacation", color: "blue" }] },
          // ...Object.keys(dataCalendar),
        }}
        onDayPress={(value) => {
          setDateString(value?.dateString);
          setIsVisible(true);
        }}
      />
      <ModalNotion
        onPressCancel={() => setIsVisible(false)}
        onPressOk={
          inputText && currentIdChoose.current
            ? async () => {
                await saveCalendar([
                  ...dataCalendar,
                  {
                    [dateString]: {
                      key: inputText,
                      color: listItemChoose[currentIdChoose.current!]?.color,
                    },
                  },
                ]);
                setObjectRender({
                  ...objetRender,
                  [dateString]: {
                    key: inputText,
                    color: listItemChoose[currentIdChoose.current!]?.color,
                  },
                });
                setIsVisible(false);
                setInputText("");
                currentIdChoose.current = undefined;
              }
            : () => {}
        }
        title={"Set Calendar"}
        isVisible={isVisible}
        children={
          <View style={{ marginVertical: 30 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.txtPopup}>Status: </Text>
              {listItemChoose.map((i, index) =>
                index > 0 ? (
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
                ) : null
              )}
            </View>
            <Text style={styles.txtPopup}>DateTime: {dateString} </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.txtPopup}>Title: </Text>
              <TextInput
                onChangeText={setInputText}
                style={styles.txtInput}
                placeholder="Please Input Text"
              />
            </View>
          </View>
        }
      />
    </View>
  );
};
export default CalendarScreen;
