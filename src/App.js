import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Links } from './Links';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

import './App.css';

class App extends Component {
    render() {
      return (
        <React.Fragment>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about"  component={About} />
                <Route path="/links"  component={Links} />
                <Route                component={NoMatch} />
              </Switch>
            </Router>
          </Layout>
        </React.Fragment>
      );
    }
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="website logo" />
//         <p 
//           className="App-title"
//         >
//           I'm Blake.
//         </p>
//         <p 
//           className="App-body"
//         >
//           a designer, programmer, and enthusiast.
//         </p>
//         <a
//           className="App-link"
//           href="https://github.com/blake417"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Github
//         </a>
//         <a
//           className="App-link"
//           href="https://www.linkedin.com/in/blake-d-larson/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           LinkedIn
//         </a>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
