import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import styles from './Layout.module.scss'

const Layout = (props:any) => {
    return ( 
        <div className={styles.layout}>
            <Header/>
            {props.children}
            <Footer/>
        </div>
     );
}
 
export default Layout;