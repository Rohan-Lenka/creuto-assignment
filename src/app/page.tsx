import Button from "@/components/button/button"
import styles from "./home.module.css"
import Arrow from "@/icons/arrow"
import Header from "@/components/header/header"
import Hero from "@/components/hero/hero"

export default function Home() {
  return <div className={styles.home}>
    {/* <Button text="Get in Touch" type="header-primary"/>
    <Button text="Contact us" type="header-secondary"/> */}
    {/* <Button text="Free Consultation" type="primary"/> */}
    {/* <Button text="Portfolio" type="secondary" endIcon={<Arrow />}/> */}
      <Header />
      <Hero />
  </div>
}