import './App.css';
import { Authentication } from './Components/Authentication';
import Login from './Components/Login';
import WebRoutes from './Components/WebRoutes';

function App() {
  return (
    <Authentication><WebRoutes/></Authentication>
  );
}

export default App;
