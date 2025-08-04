import Arrow from "@/icons/arrow"
import Button from "../button/button"
import styles from "./hero.module.css"

export default function Hero() {
    return <div className={styles.hero}>
        <div>
            <div style={{ fontSize: "48px" }}>
                <p>Your Software Project: Designed</p>
                <p style={{ marginTop: "-50px" }}>to Impress, Built to Scale.</p>
            </div>
            <div style={{ marginTop: "-32px" }}>
                <p>A leading product engineering company, creating adaptive software solutions to improve</p>
                <p style={{ marginTop: "-12px" }}>operations, providing businesses with expert development services from across domain and</p>
                <p style={{ marginTop: "-12px" }}>greater profitability.</p>
            </div>
        </div>
        <div style={{ display: "flex", gap: "10px", marginTop: "16px" }} >
            <div><Button text="Free Consultation" type="primary" /></div>
            <div><Button text="Portfolio" type="secondary" endIcon={<Arrow />} /></div>
        </div>
    </div>
}