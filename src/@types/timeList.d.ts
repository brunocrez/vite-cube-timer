export interface ITime {
  stringTime: string;
  numberTime: number;
  scramble: string;
}

export interface ITimeListContext {
  timeList: ITime[];
  addTime: (time: ITime) => void;
  averageOf: (n: number, index?: number) => string;
}
