import React from 'react';
import { Route, Switch} from "react-router-dom";
import SiderMenu from './components/SiderMenu';
import { Layout } from 'antd';
import Dashboard from './components/Dashboard';
import Deals from './components/Deals';
import './styles/style.less';

const { Header } = Layout;

const App = () => (
    <Layout>
    <Header className="header" />
    <Layout>
    <SiderMenu />
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/deals" component={Deals} />
    </Switch>
    </Layout>
    </Layout>
);

export default App;