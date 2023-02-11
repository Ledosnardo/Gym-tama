import { useParams } from 'react-router-dom';
import styles from './TrainingPage.module.css';
import Treinos from 'json/db.json';
import Cards from 'components/Cards';

const TrainingPage = () => {
    const paramns = useParams();
    const treinosArray = Treinos.treinos;
    treinosArray.map(treino => console.log(treino.nome))

    return (
        <div className={styles.cards}>
            {treinosArray.map(treino => 
                <Cards 
                    nome={treino.nome} 
                    tipo={treino.tipo} 
                    imagem={treino.imagem} 
                    key={treino.id} 
                />
            )}
        </div>
    )
}

export default TrainingPage;