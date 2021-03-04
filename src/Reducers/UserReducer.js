
import { ADD_TODO } from '../actions/actiontype'

//const initialstate =
//{
// users: []
//}

//const UserReducer = (state = initialstate, action) => {
// switch (action.type) {
//case actiontype.ADD_USER:
//  return {
//      state,
//       users: action.users
//   };

//  default:sss
//   return state;
//   break;
// }
//}
//export default UserReducer;

const initialState = {
    login: {}
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                login: action.login
            }
        }
        default: 
        return state;
    } 
}
export default UserReducer;