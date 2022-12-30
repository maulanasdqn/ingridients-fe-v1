export interface CommonResponseInterface<T> {
  message: string;
  results: Array<T>;
  success: boolean;
}
