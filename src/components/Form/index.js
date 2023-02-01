import styles from './Form.module.css';
import Inputs from '../../components/Inputs';
import { Link } from 'react-router-dom';
import {  UsuarioContext } from '../../contexts/UsuarioContext';
import { useContext } from 'react';

const Form = () => {
    const { usuario, setUsuario} = useContext(UsuarioContext);

    return (
        <form className={styles.form}>
            <div className={styles.texts}>
                <h1>Faça Login </h1>
                <h2>na Gym-tama </h2>
            </div>
            <Inputs 
                texto='Nome :'
                placeholder='Escreva seu nome aqui'
                valor={usuario}
                setValor={setUsuario}
            />
            <Inputs 
                texto='Senha :'
                placeholder='Escreva sua senha aqui'
                type='password'
                disabled={true}
            />
            <Link to='/home' >
                 <button className={styles.button} disabled={usuario.length < 3}>Entrar</button>
            </Link>
        </form>
    )
}

export default Form;