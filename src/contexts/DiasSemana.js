const { createContext, useState } = require("react");

export const DiasSemanaContext = createContext();
DiasSemanaContext.displayName = 'Treinos dos dias'

const DiasSemanasProvide = ({ children }) => {
    const [ segunda, setSegunda ] = useState({ nome: 'Segunda', treinos: {} });
    const [ terca, setTerca ] = useState({ nome: 'Terça', treinos: {} });
    const [ quarta, setQuarta ] = useState({ nome: 'Quarta', treinos: {} });
    const [ quinta, setQuinta ] = useState({ nome: 'Quinta', treinos: {} });
    const [ sexta, setSexta ] = useState({ nome: 'Sexta', treinos: {} });

    return (
        <DiasSemanaContext.Provider value={{
            segunda, setSegunda,
            terca, setTerca,
            quarta, setQuarta,
            quinta, setQuinta,
            sexta, setSexta }}
        >
            {children}
        </DiasSemanaContext.Provider>
    )
}

export default DiasSemanasProvide;