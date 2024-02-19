import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Wallet from './pages/Wallet/index';
import Navbar from './components/Navbar';
import Buying from './pages/Buying';


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cuzdan" component={Wallet}/>
          <Route path="/satinalma" component={Buying}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
