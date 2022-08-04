export interface ITime {
  stringTime: string;
  numberTime: number;
  scramble: string;
}

export interface IAverageReturn {
  stringAverage: string;
  numberAverage: number;
}

export interface ITimeListContext {
  timeList: ITime[];
  addTime: (time: ITime) => void;
  calcAverage3: () => IAverageReturn;
  calcAverage5: (idx: number) => IAverageReturn;
  calcAverage12: (idx: number) => IAverageReturn;
  calcAverage100: (idx: number) => IAverageReturn;
}
