import Image from "next/image"
import MenuNav from "./MenuNav"

import styles from "./Header.module.css"

import logo from "@/public/logo.png"

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.title}>
            <Image src={logo} alt="Logo Alpha Center" />
            <h1>Alpha Center</h1>
            
        </div>
        
        <MenuNav />
    </header>
}