import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsuarioProvider from "./contexts/UsuarioContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PageDefault from "./pages/PageDefault";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>

        <UsuarioProvider>
          <Routes>
            <Route path='/' element={<LoginPage />} />

            <Route path='/home' element={<PageDefault />}>
              <Route index element={<HomePage />} />
            </Route>
            
          </Routes>
        </UsuarioProvider>

      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
