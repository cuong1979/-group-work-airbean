
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Menu from './componenets/Menu/Menu'
import About from './componenets/About/About'
// import Cart from './componenets/Card/Card'
import Status from './componenets/Status/Status'
import Error from './componenets/Erorr/Erorr'
import Landing from './componenets/Landing/Landing'
import Nav from './componenets/Nav/Nav'
import addBeverage from './actions/addBeverage'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    let showDataIStorage = localStorage.getItem('chosenBeverages');
    let dataFromStorage = JSON.parse(showDataIStorage)
    console.log('data i local storge ', dataFromStorage)

    if (dataFromStorage) dataFromStorage.forEach(item => dispatch(addBeverage(item)))
  }, [])


 







  return (
    <div className="App">

      <Switch>
        <Redirect exact path="/" to="/landing" />
        <Route path="/landing" component={Landing} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
        <Route path="/nav" component={Nav} />
        <Route path="/status/" component={Status} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
