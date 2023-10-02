
import { BrowserRouter as Router, Route, Routes, na } from 'react-router-dom';
import Home from './pages/Home';
import FetchUsers from './pages/FetchUsers';


function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/users" element={<FetchUsers />} />
    </Routes>
  </Router>
  );
}

export default App;
