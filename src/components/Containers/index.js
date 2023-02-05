import { useContext } from 'react';
import { DiasSemanaContext } from '../../contexts/DiasSemana';
import Cards from './Cards';
import styles from './Containers.module.css';

const Containers = () => {
    const { segunda, terca, quarta, quinta, sexta } = useContext(DiasSemanaContext);
    const semana = [segunda, terca, quarta, quinta, sexta];

    return (
        <main className={styles.main}>
            {semana.map(dia => {
                return(
                    <div className={styles.dia}>
                        <div>
                            <h1>{dia.nome}</h1>
                        </div>
                        <div>
                            <Cards treinos={dia.treinos}/>
                        </div>
                    </div>
                )  
            })}
        </main>
    )
}

export default Containers;