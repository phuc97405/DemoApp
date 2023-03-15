declare module "root-stack-params" {
  export interface ILoadingParams {
    color?: string;
    indicator?: "ActivityIndicator" | SpinnerType;
    size?: "large" | "small" | number;
    text?: string;
  }
}
