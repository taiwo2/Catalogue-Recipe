import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Error from './Error';
import RecipesList from '../containers/RecipesList';
import Recipe from '../containers/Single';
import About from './About';
import Footer from './Footer';

const App = () => (
  <Router>
    <section>
      <Header />
      <Switch>
        <Route exact path="/" component={RecipesList} />
        <Route path="/recipe/:id" component={Recipe} />
        <Route path="/about" component={About} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </section>
  </Router>
);

export default App;
