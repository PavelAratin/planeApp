import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import PlanePage from './pages/plane-page/PlanePage';
import CreatePlanePage from './pages/create-plane-page/CreatePlanePage';
import { paths } from './path/path';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<HomePage></HomePage>}></Route>
        <Route path={`${paths.plane}/:id`} element={<PlanePage></PlanePage>}></Route>
        <Route path={paths.createPlane} element={<CreatePlanePage></CreatePlanePage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
