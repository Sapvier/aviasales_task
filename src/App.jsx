import React from 'react';
import {store} from "./store/store";
import {Provider} from "react-redux";
import {BrowserRouter, Switch, Route} from "react-router-dom";
//components
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import AuthPage from "./pages/AuthPage/AuthPage";
import TicketsPage from "./pages/TicketsPage/TicketsPage";
//styles
import GlobalStyles from "./theme/globalStyles";


const App = () => {
    return (
        <Provider store={store}>
            <GlobalStyles/>
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
