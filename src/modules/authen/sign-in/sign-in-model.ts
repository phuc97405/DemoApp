import { action, makeObservable } from "mobx";
import { navigationServices } from "../../../services/navigation-services";
import { appModel } from "../../../view-models/app-view-model";

class SignInModel {
  constructor() {
    makeObservable(this, {
      singIn: action,
    });
  }
  singIn = () => {
    navigationServices.navigate("modalLoading", {
      screen: "loading",
      params: { color: "blue" },
    });
    setTimeout(() => {
      navigationServices.back();
      appModel.authenticate.setIsAuthenticated(true);
    }, 2000);
  };
}
export { SignInModel };
