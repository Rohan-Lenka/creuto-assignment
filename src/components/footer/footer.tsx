import Instagram from "@/icons/instagram"
import Bullet from "../ui/bullet/bullet"
import styles from "./footer.module.css"
import LinkedIn from "@/icons/linkedIn"
import Facebook from "@/icons/facebook"
import Twitter from "@/icons/twitter"

interface FooterProps {
    company: string
    description: string
    services: string[]
    locations: {
        city: string
        address: string
    }[]
    contacts: string[]
    socials: {
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

            <div className={styles.bottomPartLeftColumn}>
                <div className={styles.divWithContactsHeading}>
                    <span style={{ marginRight: "4px" }}>
                        <Bullet />
                    </span>
                    <span className={styles.contactsHeading}>
                        CONTACTS
                    </span>
                </div>

                <div className={styles.divWithContacts}>
                    {contacts?.map((contact, key) => {
                        return <div key={key} className={styles.contact} >
                            {contact}
                        </div>
                    })}
                </div>
            </div>

            <div className={styles.bottomPartMiddleColumn}>
                <div>
                    © 2024 {company} All Rights Reserved
                </div>
                <div>
                    <span>Terms & Conditions</span>
                    <span style={{ paddingLeft: "16px" }}>Privacy Policy</span>
                </div>
            </div>

            <div className={styles.bottomPartRightColumn}>
                <div className={styles.divWithSocialsHeading}>
                    <span style={{ marginRight: "4px" }}>
                        <Bullet />
                    </span>
                    <span className={styles.socialsHeading}>
                        SOCIALS
                    </span>
                </div>
                <div className={styles.divWithSocials}>
                    <a href={socials.linkedIn} target="_blank">
                        <LinkedIn />
                    </a>
                    <a href={socials.instagram} target="_blank">
                        <Instagram />
                    </a>
                    <a href={socials.facebook} target="_blank">
                        <Facebook />
                    </a>
                    <a href={socials.twitter} target="_blank">
                        <Twitter />
                    </a>
                </div>
            </div>

        </div>

    </div>
}