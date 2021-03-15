import React from 'react';
import './App.css';
//////////////////////////////
import { Route} from 'react-router-dom';
/////////////////////////////
import HomePage from './pages/homePage.pages';
import Footer from './layout/footer/footer.component';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage}/>
      <Footer/>
    </div>
  );
}

export default App;
