import DiasSemanasProvide from "contexts/DiasSemana";
import UserContext from "contexts/UserContext";
import UsuarioProvider from "contexts/UsuarioContext";
import TrainingPage from "pages/TrainingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PageDefault from "./pages/PageDefault";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>

        <UserContext>
            <Routes>
              <Route path='/' element={<LoginPage />} />
                <Route path='/treino' element={<PageDefault />}>
                  <Route index element={<HomePage />} />
                  <Route path='/treino/:id' element={<TrainingPage />} />
              </Route>
            </Routes>
        </UserContext>

      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
