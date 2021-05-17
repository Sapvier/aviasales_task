import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import AuthPage from "./pages/AuthPage/AuthPage";
import TicketsPage from "./pages/TicketsPage/TicketsPage";
import {store} from "./store/configureStoreWithInjectSaga";
import {Provider} from "react-redux";


const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={AuthPage} exact/>
                    <PrivateRoute path="/tickets">
                       <TicketsPage/>
                    </PrivateRoute>
                </Switch>
            </ BrowserRouter>
        </Provider>
    );
};


export default App;
