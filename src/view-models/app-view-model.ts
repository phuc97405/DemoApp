import { AuthenticateViewModel } from "./authenticate-view-model";

class AppModel {
  authenticate: AuthenticateViewModel;

  constructor() {
    this.authenticate = new AuthenticateViewModel();
  }
}
const appModel = new AppModel();
export { appModel, AppModel };
