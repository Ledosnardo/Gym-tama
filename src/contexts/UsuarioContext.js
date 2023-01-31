import { createContext, useContext, useState } from "react";

export const UsuarioContext = createContext();
UsuarioContext.displayName = 'Usuário';

const UsuarioProvider = ({ children }) => {
    const [ usuario, setUsuario ] = useState('');

    return(
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider;