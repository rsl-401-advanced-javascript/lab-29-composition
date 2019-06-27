import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import Story from './story';
import FunctionalStory from './functional-story';

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/code">Code</Link></li>
              <li><Link to="/functional">Functional</Link></li>
            </ul>
          </nav>
          <Route path="/" render={() => <p>Hello world!</p>} />
          <Route path="/code" component={Story} />
          <Route path="/functional" component={FunctionalStory} />
        </BrowserRouter>
      </>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
