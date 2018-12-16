import { Injectable } from '@angular/core'

/**
 * @description logger abtract invocation name mehod.
 * @author dbeetoven
 * @date 2018-12-16
 * @export
 * @abstract
 * @class Logger
 */
export abstract class Logger {
  info: any
  warn: any
  error: any
}

@Injectable()
export class LoggerService implements Logger {
  info: any
  warn: any
  error: any

  /**
   * @description invoke console name method.
   * @author dbeetoven
   * @date 2018-12-16
   * @param {string} type
   * @param {*} [args]
   * @memberof LoggerService
   */
  invokeConsoleMethod(type: string, args?: any): void {}
}
