import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import DetailsPage from './components/detailsPage';
import HomePage from './screens/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:id' element={<DetailsPage/>}/>
      </Routes>
    </Router>
    // <div className="App">
    //   <HomePage />
    // </div>
  );
}

export default App;
