import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss'


import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';

import Router from './config/Router';

function App() {
  return (

    <BrowserRouter>
    <Route render={props => (
        <>
            <Header {...props}/>
            <Router/>
        </>
    )}/>
</BrowserRouter>

  );
}

export default App