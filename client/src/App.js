import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import PlanePage from './pages/plane-page/PlanePage';
import { paths } from './path/path';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<HomePage></HomePage>}></Route>
        <Route path={`${paths.plane}/:id`} element={<PlanePage></PlanePage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
