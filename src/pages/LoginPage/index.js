import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {  UsuarioContext } from '../../contexts/UsuarioContext';
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const { usuario, setUsuario} = useContext(UsuarioContext);

    return (
        <main className={styles.main}>
            <form>
                <h1>Login</h1>
                <div>
                    <label>Nome:</label>
                    <input 
                        type='text' 
                        placeholder='Escreva seu nome aqui'
                        value={usuario}
                        onChange={(event) => setUsuario(event.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Senha:</label>
                    <input type='password' placeholder='Escreva seu senha aqui'></input>
                </div>
                <Link to='/home' >
                    <button className={styles.button} disabled={usuario.length < 3}>Entrar</button>
                </Link>
            </form>
        </main>
    )
}

export default LoginPage;