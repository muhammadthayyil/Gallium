import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Routes} from "react-router-dom";
import SearchPage from './searchPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="mainpage">
        <Routes>
            <Route exact path='/search' element={<SearchPage/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;