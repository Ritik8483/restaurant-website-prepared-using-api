import './App.css';
import FoodCard from './components/FoodCard';
// import MenuDetails from '../components/MenuDetails'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<FoodCard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
