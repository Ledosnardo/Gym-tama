import styles from './Cards.module.css';

const Cards = ({ nome, tipo, imagem }) => {
    console.log(nome)

    return (
        <>
            <div className={styles.card}>
                <h1>{nome}</h1>
                <h3>{tipo}</h3>
                <button>+</button>
            </div>
        </>
    )
}

export default Cards;