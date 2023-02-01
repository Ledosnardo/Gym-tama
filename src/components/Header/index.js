import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import fotoPerfil from './foto-perfil.jpeg';
import { useContext } from 'react';
import { UsuarioContext } from '../../contexts/UsuarioContext';
import Dropdown from './Dropdown';

const Header = () => {

    const { usuario } = useContext(UsuarioContext);

    return (
        <header className={styles.header}>
            <Link to='/home' className={styles.perfil}>
                <img src={fotoPerfil} alt='foto de perfil' />
                <p>{usuario}</p>
            </Link>
            <h1>Gym-tama</h1>
            <div className={styles.dropdown}>
                <Dropdown />   
            </div>
        </header>
    )
}

export default Header;