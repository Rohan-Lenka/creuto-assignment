import Button from "../button/button"
import Company from "./company"
import styles from "./header.module.css"
import Menu from "./menu"

export default function Header() {
    return <div className={styles.header}>
        <Company name="Creuto"/>
        <Menu items={["About", "Services", "Portfolio", "Blogs", "Contact"]}/>
        <div className={styles.headerButtonsDiv}>
            <div><Button text="Contact Us" type="header-secondary"/></div>
            <div><Button text="Get in Touch" type="header-primary"/></div>
        </div>
    </div>
}