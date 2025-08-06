import Bullet from "../bullet/bullet"
import styles from "./serviceSection.module.css"

interface ServiceSectionProps {
    services: string[]
}

export default function ServiceSection({ services }: ServiceSectionProps) {
    return <div className={styles.divWithServices}>
        {services.map((service, key) => {
            return <div className={styles.divWithService} key={key} >
                <span>
                    <Bullet />
                </span> 
                <span className={styles.service}>
                    {service}
                </span>
            </div>
        })}
    </div>
}