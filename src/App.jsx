import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import routes from './config/routes';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Order from './pages/order/order';
import QuickOrder from './pages/quickOrder/quickOrder';

const App = () => {
  const { singleBuy } = useSelector(state => state.lingerie);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={routes.home} exact>
            <Home />
          </Route>
          <Route path={routes.order} exact>
            <Order />
          </Route>
          <Route path={routes.quickorder} exact render={
              ({ location }) => singleBuy?.id ? (
                <QuickOrder />
              ) : (
                <Redirect to={{ pathname: routes.home, state: { from: location } }}/>
              )
          } />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App;
