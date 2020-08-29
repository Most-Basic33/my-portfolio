import React from 'react';
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import Dash from './Components/Dash/Dash'
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <main>  
    <aside id='vw20' >

   <Nav />
    </aside>  
   
    <div id='vw60'>

   <Dash />
    </div>       
       </main>

   
    </div>
  );
}

export default App;
