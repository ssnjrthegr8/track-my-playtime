import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as actions from '../actions/history.actions';

export interface History {
  id: string;
  game: string;
  platform: string;
  startDate: Date;
  endDate: Date;
}

export interface State extends EntityState<History> { }

export const adapter: EntityAdapter<History> = createEntityAdapter<History>();
const initialState: State = adapter.getInitialState();

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.ADD_NEW_HISTORY_ITEM: {
      return adapter.addOne(action.item, state);
    }
    case actions.LOAD_HISTORY_ITEMS_SUCCEEDED: {
      return adapter.addAll(action.items, state);
    }
    case actions.REMOVE_HISTORY_ITEM: {
      return adapter.removeOne(action.id, state);
    }
    case actions.UPDATE_GAME: {
      return adapter.updateOne({
        id: action.id,
        changes: {
          game: action.game
        }
      }, state);
    }
    case actions.UPDATE_PLATFORM: {
      return adapter.updateOne({
        id: action.id,
        changes: {
          platform: action.platform
        }
      }, state);
    }
    default: {
      return state;
    }
  }
}