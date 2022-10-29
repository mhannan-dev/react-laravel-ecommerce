import React from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import {Switch, Route, Redirect} from 'react-router-dom';
import routes from '../routes/routes';

const MasterLayout = () => {
    return (
        <div className="sidebar-mini layout-fixed">
            <div className="wrapper">
                <Navbar />
                <Sidebar />
                <Switch>
                    {routes.map((route, idx) => {
                        return (
                            route.component && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={(props) => (
                                        <route.component {...props} />
                                    )}
                                />
                            )
                        )
                    })}
                    <Redirect from="/admin" to="/admin/dashboard" />
                </Switch>

                <Footer />
            </div>
        </div>
    );
}

export default MasterLayout;