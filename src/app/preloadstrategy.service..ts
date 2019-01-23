import { Injectable } from '@angular/core'
import { PreloadingStrategy, Route } from '@angular/router'
import { Observable, of } from 'rxjs'
import { LoggerService } from './utils/logger/logger.service'

@Injectable({
  providedIn: 'root',
})
export class PreloadstrategyService implements PreloadingStrategy {
  preloadedModules: string[] = [] // preloaded Modules.

  constructor(private _logger: LoggerService) {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      // add the route path to the preloaded module array
      this.preloadedModules.push(route.path)

      // log the route path to the console
      this._logger.info('Preloaded Module: ' + route.path)

      return load()
    } else {
      return of(null)
    }
  }
}
