import Login from './components/Login';
import SignUp from './components/SignUp';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    
      <Routes  >
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    
  );
}
export default App;
