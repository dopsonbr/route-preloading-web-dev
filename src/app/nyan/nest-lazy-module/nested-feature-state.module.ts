import {Injectable, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Action, createAction, createReducer, StoreModule} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, mapTo} from "rxjs/operators";

const aAction = createAction(
  'a action'
)
const bAction = createAction(
  'b action'
)
@Injectable()
class SomeNestedLazyEffect {
  constructor(private actions$: Actions) {
  }

  foo$ = createEffect(
      () => this.actions$.pipe(
        ofType(aAction),
        mapTo(bAction())
      )
    )
}

const lazyReducerFn = createReducer(
  {}
)

function lazyReducer(state: any, action: Action): any {
  return lazyReducerFn(state, action);
}
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('nested-some-lazy-feature', lazyReducer)
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class NestedFeatureStateModule {
}
