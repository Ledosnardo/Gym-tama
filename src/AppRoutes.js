import { BrowserRouter, Route, Routes } from "react-router-dom";
import DiasSemanasProvide from "./contexts/DiasSemana";
import UsuarioProvider from "./contexts/UsuarioContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PageDefault from "./pages/PageDefault";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>

        <UsuarioProvider>
          <DiasSemanasProvide>

            <Routes>
              <Route path='/' element={<LoginPage />} />

              <Route path='/home' element={<PageDefault />}>
                <Route index element={<HomePage />} />
              </Route>
            </Routes>

          </DiasSemanasProvide>
        </UsuarioProvider>

      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
