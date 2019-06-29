import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { topAction } from '../module/top';
import TopPage from '../pages/TopPage';

export interface topActionType {
  updateIsHover: () => Action<void>;
  rollCard: () => Action<void>;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateIsHover: () => dispatch(topAction.updateIsHover()),
    rollCard: () => dispatch(topAction.rollCard()),
  };
}

const mapStateToProps = (State: AppState) => ({ ...State.top })

export default connect(mapStateToProps, mapDispatchToProps)(TopPage);
