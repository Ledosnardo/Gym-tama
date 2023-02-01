import insta from './insta.webp';
import twitter from './twitter.png';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.imagens}>
                <a href='#'><img src={twitter} alt='Imagem Twitter' /></a>
                <a href='https://www.instagram.com/leuzada'><img src={insta} alt='Imagem Instagram' /></a>
            </div>
            <div>
                <h1>Desenvolvido por Leozada</h1>
            </div>
        </footer>
    )
}

export default Footer;