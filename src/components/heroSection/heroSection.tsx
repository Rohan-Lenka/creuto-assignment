import Arrow from "@/icons/arrow"
import Button from "../ui/button/button"
import styles from "./heroSection.module.css"

export default function HeroSection() {
    return <div className={styles.hero}>
        <div>
            <div className={styles.divWithHeading}>
                <p>Your Software Project: Designed</p>
                <p style={{ marginTop: "-50px" }}>to Impress, Built to Scale.</p>
            </div>
            <div className={styles.divWithDescription} >
                <p>A leading product engineering company, creating adaptive software solutions to improve</p>
                <p style={{ marginTop: "-12px" }}>operations, providing businesses with expert development services from across domain and</p>
                <p style={{ marginTop: "-12px" }}>greater profitability.</p>
            </div>
        </div>
        <div className={styles.divWithButtons} >
            <div><Button text="Free Consultation" type="primary" /></div>
            <div><Button text="Portfolio" type="secondary" endIcon={<Arrow />} /></div>
        </div>
    </div>
}