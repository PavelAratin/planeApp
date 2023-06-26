import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import PlanePage from './pages/plane-page/PlanePage';
import OrderPage from './pages/order-page/OrderPage';
import CreatePlanePage from './pages/create-plane-page/CreatePlanePage';
import { paths } from './path/path';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<HomePage></HomePage>}></Route>
        <Route path={`${paths.plane}/:id`} element={<PlanePage></PlanePage>}></Route>
        <Route path={paths.createPlane} element={<CreatePlanePage></CreatePlanePage>}></Route>
        <Route path={paths.order} element={<OrderPage></OrderPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
