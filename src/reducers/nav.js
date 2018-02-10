import { MainNavigation } from '../containers';


const initialState = MainNavigation.router.getStateForAction(MainNavigation.router.getActionForPathAndParams('Home'));

const navReducer = (state = initialState, action) => {
    const newState = MainNavigation.router.getStateForAction(action, state);
    return newState || state;
};

export default navReducer;