import { action, computed, makeObservable, observable } from "mobx";

class HomeModel {
  isLoading: boolean = false;
  constructor() {
    makeObservable(this, {
      isLoading: observable,
      changeLoading: action,
    });
  }
  changeLoading = () => {
    this.isLoading = !this.isLoading;
  };
}

export { HomeModel };
