import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TrainApp } from './pages/TrainApp'
import { TrainDetails } from './pages/TrainDetails'
import { Trains } from './pages/Trains'
import { About } from './pages/About'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './style/style.scss'
import { Home } from './pages/Home'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route component={TrainApp} path="/categories/:id" />
          <Route component={Trains} path="/trains/:id" />
          <Route component={TrainDetails} path="/details/:trainId" />
          <Route component={About} path="/about" />
          <Route component={Home}  path="/" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
