import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import UserTemplate from './template/UserTemplate';
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserTemplate />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;