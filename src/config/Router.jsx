import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail/Detail';
// import LoginSignUp from '../components/LoginSignUp/LoginSignUp';

const Router = () => {
    return (

        <Switch>
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
            {/* <Route path="/login" component={<LoginSignUp />} /> */}

        </Switch>


    );
}

export default Router;