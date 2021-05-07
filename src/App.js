import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Inici from './Pages/Inici';
import Professors from './Pages/Professors';
import Alumnes from './Pages/Alumnes';
import Clases from './Pages/Clases';
import Navegacion from './Components/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navegacion />
       
        <Switch>
            <Route exact path="/" component={Inici} />
            <Route path="/professors" render={() => <Professors />} />
            <Route path="/alumnes" render={() => <Alumnes /> } />
            <Route path="/classes" render={() => <Clases /> } />


        </Switch>
    </BrowserRouter>
  
  );
}

export default App;
