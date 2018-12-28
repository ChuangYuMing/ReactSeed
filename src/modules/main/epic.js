import * as types from './action-types'
import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'


export const pingEpic = action$ =>
  action$
    .ofType('PING')
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'PONG' })
