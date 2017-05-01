import { IErrorHandlerSettings } from '../interface/ierror-handler-settings';
import { IExeptionArrayItem } from '../interface/iexeption-array-item';
export class IErrorHandler implements IErrorHandler{
  exeptions: IExeptionArrayItem[];
  logAllExeptions: boolean;

  constructor (settings: IErrorHandlerSettings){
      this.logAllExeptions = settings.logAllExeptions;
  }

  logExeptions(message?: string, id?: number): void{
    // this.exeptions.push({message, id});
  }
}
