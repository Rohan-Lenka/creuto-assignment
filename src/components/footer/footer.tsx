import Bullet from "../bullet/bullet"
import styles from "./footer.module.css"

interface FooterProps {
    company: string
    description: string
    services: string[]
    locations: {
        city: string
        address: string
    }[]
    contacts?: string[]
    socials?: {
        instagram: string
        linkedIn: string
        facebook: string
        twitter: string
    }
}

export default function Footer({ company, description, services, locations, contacts, socials }: FooterProps) {
    return <div className={styles.footer}>

        <div className={styles.topPart}>

            <div className={styles.topPartLeftColumn}>
                <div className={styles.company}>
                    {company}
                </div>
                <div className={styles.description} >
                    {description}
                </div>
            </div>

            <div className={styles.topPartRightColumn}>
                <div className={styles.divWithServicesHeading}>
                    <span style={{ marginRight: "4px" }}>
                        <Bullet />
                    </span>
                    <span className={styles.servicesHeading}>
                        SERVICES
                    </span>
                </div>
                <div className={styles.divWithServices}>
                    {services.map((service, key) => {
                        return <div key={key} className={styles.service}>
                            {service}
                        </div>
                    })}
                </div>
            </div>

        </div>

        <div className={styles.middlePart}>

            <div className={styles.divWithLocationsHeading}>
                <span style={{ marginRight: "4px" }}>
                    <Bullet />
                </span>
                <span className={styles.locationsHeading}>
                    LOCATIONS
                </span>
            </div>

            <div className={styles.divWithLocations}>
                {locations.map((location, key) => {
                    return <div key={key} className={styles.divWithLocation}>
                        <div className={styles.divWithCity}>
                            {location.city}
                        </div>
                        <div className={styles.divWithAddress}>
                            {location.address}
                        </div>
                    </div>
                })}
            </div>

        </div>

        <div className={styles.bottomPart}>

        </div>

    </div>
}