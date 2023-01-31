import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsuarioProvider from "./contexts/UsuarioContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>

        <UsuarioProvider>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/home' element={<HomePage />} />
          </Routes>
        </UsuarioProvider>

      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
