
import Header from "./components/Header";
import Cards from './components/Cards'
import {Route, Routes} from 'react-router-dom'
import AddMovie from './components/AddMovie'
import Detail from "./components/Detail";
import { createContext} from "react";
import { useState } from "react";
// import Login from "./components/Login";
// import SignIn from "./components/SignIn";


const AppState = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("")


  return (
    <AppState.Provider value={{login, userName, setLogin, setUserName}}>
      <div className="App relative">
        <Header/>
        <Routes>
          <Route path="/" element={<Cards/>}/>
          <Route path="/addmovie" element={<AddMovie/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          {/* <Route path="/login" element={<Login/>}/> */}
          {/* <Route path="/signin" element={<SignIn/>}/> */}
        </Routes>
      </div>
    </AppState.Provider>
  );
}

export default App;
export {AppState};