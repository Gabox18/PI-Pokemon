import './App.css';
import {Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import CreateGame from './Components/create/create';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/home/Create'component={CreateGame}/>
    </div>
  );
}

export default App;
