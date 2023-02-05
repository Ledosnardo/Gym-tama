import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from './PageDefault.module.css'

const PageDefault = () => {
    return (
        <div>
            <Header/>

            <Outlet />  

           {/* <Footer /> */}
        </div>
    )
}

export default PageDefault;