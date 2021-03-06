import { endOfMonth, endOfWeek, startOfMonth, startOfWeek, subDays } from 'date-fns';
import { tassign } from 'tassign';

import * as actions from '../actions/date-range.actions';

import { DateRangeType } from '../models';

export interface State {
  startDay: Date;
  endDay: Date;
  type: DateRangeType;
}

const now = new Date();
const initialState: State = {
  startDay: startOfWeek(now),
  endDay: endOfWeek(now),
  type: 'THIS_WEEK'
};

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.SET_THIS_WEEK: {
      return initialState;
    }
    case actions.SET_LAST_WEEK: {
      const startThisWeek = startOfWeek(now);
      const endLastWeek = subDays(startThisWeek, 1);
      const startLastWeek = startOfWeek(endLastWeek);
      return tassign(state, {
        startDay: startLastWeek,
        endDay: endLastWeek,
        type: 'LAST_WEEK'
      });
    }
    case actions.SET_THIS_MONTH: {
      const startMonth = startOfMonth(now);
      const endMonth = endOfMonth(now);
      return tassign(state, {
        startDay: startMonth,
        endDay: endMonth,
        type: 'THIS_MONTH'
      });
    }
    case actions.SET_LAST_MONTH: {
      const startThisMonth = startOfMonth(now);
      const endLastMonth = subDays(startThisMonth, 1);
      const startLastMonth = startOfMonth(endLastMonth);
      return tassign(state, {
        startDay: startLastMonth,
        endDay: endLastMonth,
        type: 'LAST_MONTH'
      });
    }
    default: {
      return state;
    }
  }
}
