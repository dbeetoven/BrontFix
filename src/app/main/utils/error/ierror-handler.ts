import { IExeptionArrayItem } from '../exeptions/iexeption-array-item';
export interface IErrorHandler {
    exeptions: IExeptionArrayItem[];
    logExeption(message: string, id?: number): void;
}
