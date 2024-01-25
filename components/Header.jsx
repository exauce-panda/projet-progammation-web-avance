import Image from "next/image";
import logo from "@/public/logo.png"
import styles from "./Header.module.css";
import MenuNav from "./MenuNav"


export default function Header() {
    return <header className={ styles.header }>
        <div className={ styles.title } >
            <Image src={logo} alt="logo Alpha center" />
            <h1>Alpha Center</h1>
        </div>
        <div className={styles.nav}>
            <MenuNav />
        </div>
    </header>
}