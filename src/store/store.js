import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './rootReducer';
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";
import {loadState, saveState} from "./localStorage";


const sagaMiddleware = createSagaMiddleware();
const persistedState = loadState()

export const store = createStore(rootReducer, persistedState, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

store.subscribe(() => {
    saveState({
            authReducer: store.getState().authReducer
        }
    )
})

sagaMiddleware.run(rootSaga);

