import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getProducts} from './reducers/getProducts';
import { loginCredentials } from './reducers/loginCredentials';
import { handleLoginDialog } from './reducers/handleLoginDialog';
import { searchResults } from './reducers/searchResults';
import { filterValue } from './reducers/filterValue';
import {users} from './reducers/users';
import { cart } from './reducers/cart';
import {order} from './reducers/order';
import { authToast } from './reducers/authToast';
import { cartToast } from './reducers/cartToast';
import { productToast } from './reducers/productToast';
import { navload } from './reducers/navload';
import { getDashboardData } from './reducers/getDashboard';


const rootReducer = combineReducers({
    getProducts:getProducts,
    loginCredentials,
    handleLoginDialog,
    searchResults,
    filterValue,
    users,
    cart,
    order,
    authToast,
    cartToast,
    productToast,
    navload,
    getDashboardData,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
    );

export default store

