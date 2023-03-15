import { action, makeObservable, observable } from "mobx";
class AuthenticateViewModel {
  isAuthenticated: boolean = false;

  constructor() {
    makeObservable(this, {
      isAuthenticated: observable,
      setIsAuthenticated: action,
    });
  }

  setIsAuthenticated = (value: boolean = false) => {
    this.isAuthenticated = value;
  };
}
export { AuthenticateViewModel };
