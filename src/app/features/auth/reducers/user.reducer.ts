import { tassign } from 'tassign';

import * as actions from '../actions/user.actions';

export interface State {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
}

const initialState: State = {
  uid: '',
  displayName: '',
  email: '',
  photoURL: ''
};

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.AUTHENTICATED: {
      return tassign(state, action.user);
    }
    case actions.NOT_AUTHENTICATED: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
