const { default: DiasSemanasProvide } = require("./DiasSemana")
const { default: UsuarioProvider } = require("./UsuarioContext")

const UserContext = ({ children }) => {
    return(
        <DiasSemanasProvide>
            <UsuarioProvider>
                {children}
            </UsuarioProvider>
        </DiasSemanasProvide>
    )
}

export default UserContext;