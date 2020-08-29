import React, {useState} from 'react';
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import Dash from './Components/Dash/Dash'
import './App.css';

function App() {
  const [choice, setChoice] = useState(0)

  return (
    <div className="App">
    <Header />
    <main>  
    <aside id='vw20' >

   <Nav setChoice={setChoice} />
    </aside>  
   
    <div id='vw60'>
<span id='dashed' >Click To See More</span>
   <Dash choice={choice}/>
    </div>       
       </main>

   
    </div>
  );
}

export default App;
