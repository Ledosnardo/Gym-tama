import Form from '../../components/Form'
import styles from './LoginPage.module.css';
import gintamaImage from './gintama.gif'
import halter from './halter.png'

const LoginPage = () => {
    return (
        <main className={styles.main}>
            <Form />
            <img src={gintamaImage} alt='Imagem gif do Gintama, personagem de anime' className={styles.gintamaImg}/>
            <img src={halter} alt='Imagem de halter' className={styles.halterImg}/>
        </main>
    )
}

export default LoginPage;