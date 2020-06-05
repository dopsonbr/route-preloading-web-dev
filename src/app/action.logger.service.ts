import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { Injectable } from '@angular/core';

export function getActionLoggerMetaReducer(
  actionLoggerService: ActionLoggerService
): MetaReducer<any>[] {
  return [
    (reducer: ActionReducer<any>): ActionReducer<any> => {
      return (state, action) => {
        try {
          actionLoggerService.log(action);
        } catch {
          // Do let errors in the logger halt the actions.
        }
        return reducer(state, action);
      };
    }
  ];
}

@Injectable({
  providedIn: 'root'
})
export class ActionLoggerService {
  private readonly countThreshold: number;
  private readonly timeThreshold: number;
  private mutableLogMessageBuffer: any[];
  private mutableTimerHandle: any;

  constructor() {}

  log(action: Action): void {
    console.log('action', action);
      const now = new Date(Date.now());
      this.mutableLogMessageBuffer.push({
        friendlyMessage: 'action dispatched',
        data: action,
        logLevel: 'TRACE',
        timestamp: now.toISOString()
      });
      if (this.countThreshold <= this.mutableLogMessageBuffer.length) {
        this.sendLogs();
      } else {
        this.setTimerIfNeeded();
      }
  }

  private setTimerIfNeeded(): void {
    if (!this.mutableTimerHandle) {
      this.mutableTimerHandle = setTimeout(() => {
        this.sendLogs();
        this.mutableTimerHandle = null;
      }, this.timeThreshold);
    }
  }

  private sendLogs(): void {
    console.log('I would normally send the logs');
  }
}
