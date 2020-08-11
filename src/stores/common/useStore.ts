/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSubscriptionHook } from '@huameow/hook-subscription';
import {
  State,
  Action,
  ActionType,
  Switch,
} from './common.interface';

const initialState: State = {
  collectionStatus: Switch.CLOSE,
  dynamicComponentStatus: Switch.CLOSE,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.INIT: {
      return state;
    }

    // update stores
    case ActionType.UPDATE_PARAMS: {
      return {
        ...state,
        ...action.payload.data,
      };
    }

    default: {
      return state;
    }
  }
};

export const useCommonStore = createSubscriptionHook(reducer, initialState);
