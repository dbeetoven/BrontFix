import { IExeptionArrayItem } from '../exeptions/iexeption-array-item';
import { Message } from '_debugger';
export interface IErrorHandler {
    exeptions: IExeptionArrayItem[];
    logExeption(message: string, id?: number): void;
}
