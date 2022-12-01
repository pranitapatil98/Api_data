import { Route ,Routes} from 'react-router-dom';
import './App.css';
import Apidata from "./component/apidata";
import Login from './component/login';

function App() {
  return (  
      <Routes>
        <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route  path="/data" element={<Apidata/>} /> 
            
        {/* <Route path="*" element={<NotMatch/>} /> */}
    
        </Routes>
    
  );
}

export default App;
