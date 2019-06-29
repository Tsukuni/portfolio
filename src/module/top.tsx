import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

const actionCreator = actionCreatorFactory();

export interface topStateType {
  isHover: boolean;
  isRoll: boolean;
}

const initialState: topStateType = {
  isHover: false,
  isRoll: false
};

export const topAction = {
  updateIsHover: actionCreator<void>('UPDATE_IS_HOVER'),
  rollCard: actionCreator<void>('ROLL_CARD')
};

export const topReducer = reducerWithInitialState(initialState)
  .case(topAction.updateIsHover, state => (
    { ...state,
      isHover: !state.isHover
    }
  ))
  .case(topAction.rollCard, state => (
    {
      ...state,
      isRoll: !state.isRoll
    }
  ))
