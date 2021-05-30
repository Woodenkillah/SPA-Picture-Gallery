import styles from './App.module.css';
import Main from '../Main/Main';
import MyInfo from '../MyInfo/MyInfo';
import Details from '../Details/Details';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Page404 from '../Page404/Page404';
import { Route, Switch } from 'react-router-dom';
import { AppRoutes } from '../../constants';


const App = () => {
  return (
    <div className={styles.App}>
      <NavBar />
      <Header/>
      <Switch>
        <Route exact path={AppRoutes.HOME} component={Main} />
        <Route exact path={AppRoutes.INFO} component={MyInfo} />
        <Route exact path={`${AppRoutes.DETAILS}/:id`} component={Details} />
        <Route component={Page404}/>
      </Switch>
    </div>
  );
}

export default App;
