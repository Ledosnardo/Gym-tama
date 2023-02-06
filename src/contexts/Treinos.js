import { createContext } from "react";
import  treino  from 'json/db.json';

export const TreinosContext = createContext();
TreinosContext.displayName = 'Treinos';

const TreinosProvider = ({ children }) => {
    const treinos = treino;
    const treinoJson = JSON.stringify(treinos)

    return (
        <TreinosContext.Provider treinos={treinoJson}>
            {children}
        </TreinosContext.Provider>
    )
}

export default TreinosProvider;