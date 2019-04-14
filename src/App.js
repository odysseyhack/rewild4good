import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import NotFound from './containers/NotFound';
import Project from './containers/Project';
import Recipies from './containers/Recipies';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main role="main" className="flex-shrink-0">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/recipies" component={Recipies} />
            <Route path="/project" component={Project} />

            {/* Not found */}
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
