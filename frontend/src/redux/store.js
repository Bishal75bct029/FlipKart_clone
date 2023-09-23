import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getProducts} from './reducers/getProducts';
import { loginCredentials } from './reducers/loginCredentials';
import { handleLoginDialog } from './reducers/handleLoginDialog';
import { searchResults } from './reducers/searchResults';
import { filterValue } from './reducers/filterValue';
import {users} from './reducers/users';


const rootReducer = combineReducers({
    getProducts:getProducts,
    loginCredentials,
    handleLoginDialog,
    searchResults,
    filterValue,
    users,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
    );

export default store

