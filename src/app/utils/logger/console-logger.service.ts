import { Injectable } from '@angular/core'

import { Logger } from './logger.service'
import { environment } from 'environments/environment'

export let isDebugMode = environment.isDebugMode

const noop = (): any => undefined

@Injectable()
export class ConsoleLoggerService implements Logger {
  /**
   * @description get console as info.
   * @readonly
   * @memberof ConsoleLoggerService
   */
  get info() {
    if (isDebugMode) {
      // tslint:disable-next-line:no-console
      return console.info.bind(console)
    } else {
      return noop
    }
  }

  /**
   * @description get console as  warn.
   * @readonly
   * @memberof ConsoleLoggerService
   */
  get warn() {
    if (isDebugMode) {
      return console.warn.bind(console)
    } else {
      return noop
    }
  }

  /**
   * @description get console as error.
   * @readonly
   * @memberof ConsoleLoggerService
   */
  get error() {
    if (isDebugMode) {
      return console.error.bind(console)
    } else {
      return noop
    }
  }

  invokeConsoleMethod(type: string, args?: any): void {
    const logFn: Function = console[type] || console.log || noop
    logFn.apply(console, [args])
  }
}
