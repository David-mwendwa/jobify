import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>Dashboard</div>} />
          <Route path='/register' element={<div>Register</div>} />
          <Route path='/landing' element={<Landing />} />
          <Route path='*' element={<h1>Error</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
