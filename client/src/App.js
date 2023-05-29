import Account from './Pages/Account'
import Userhome from './Pages/Userhome';
// import Admlog from './Pages/Admlog'
import Admreg from './Pages/Admreg'
import Admcode from './Pages/Admcode';
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Userlog from './Pages/Userlog'
import Sidebaradm from './Components/Sidebaradm'
import Mytest from './Pages/Adm/Mytest'
import Create from './Pages/Adm/Create'
import Score from './Pages/Adm/Score';
import Testsuc from './Pages/Testsuc'
import Usercmp from './Pages/Usercmp';

function App() {


  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route exact path="" Component={Account}/>
        <Route  path="/userlog" Component={Userlog}/>
        <Route  path="/admcode" Component={Admcode}/>
        <Route  path="/usercmp" Component={Usercmp}/>
        <Route  path="/testsuc" Component={Testsuc}/>
        <Route  path="/userhome" Component={Userhome}/>
        <Route  path="/admreg" Component={Admreg}/>
        <Route path='/admlog' Component={Sidebaradm}>
           <Route path='create' Component={Create }/>
           <Route path='score' Component={Score}/>
            <Route path='mytest' Component={Mytest}/>

          </Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
