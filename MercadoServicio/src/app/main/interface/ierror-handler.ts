import { IExeptionArrayItem } from './iexeption-array-item';
import { Message } from '_debugger';
export interface IErrorHandler {
    exeptions: IExeptionArrayItem[];
    logExeption(message: string, id?: number): void;
}
