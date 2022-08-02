export interface ITime {
  stringTime: string;
  numberTime: number;
  scramble: string;
}

export interface ITimeListContext {
  timeList: ITime[];
  addTime: (time: ITime) => void;
  calcAverage3: () => string;
  calcAverage5: (idx: number) => string;
  calcAverage12: (idx: number) => string;
  calcAverage100: (idx: number) => string;
}
