import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dropdown.module.css';

const Dropdown = () => {
    const [ isActive, setIsActive ] = useState(false);

    return (
        <div className={styles.container}>
                <button onClick={() => setIsActive(!isActive)} >
                    Treinos ↓
                    <nav className={`${!isActive ? styles.disabled : styles.active}`}>
                        <ul>
                            <li><Link className={styles.link} to='/treino/todos'>Todos</Link></li>
                            <li><Link className={styles.link} to='/treino/braço'>Braço</Link></li>
                            <li><Link className={styles.link} to='/treino/costas'>Costas</Link></li>
                            <li><Link className={styles.link} to='/treino/abdomem'>Abdômem</Link></li>
                            <li><Link className={styles.link} to='/treino/pernas'>Pernas</Link></li>
                        </ul> 
                    </nav>
                </button>
                
        </div>
    )
}

export default Dropdown;