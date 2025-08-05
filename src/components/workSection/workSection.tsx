import PaperClip from "@/icons/paperClip"
import Bullet from "../bullet/bullet"
import Button from "../button/button"
import styles from "./workSection.module.css"

interface WorkSectionProps {
    introText: string
    heading: string
    description: string
    works: {
        heading: string
        description: string
    }[]
} 

export default function WorkSection({ introText, heading, description, works }: WorkSectionProps) {
    return <div className={styles.workSection}>

        <div className={styles.topArea}>
            <div className={styles.divWithIntroText}>
                <div>{<Bullet />} {introText}</div>
            </div>
            <div className={styles.divWithHeading}>
                <div className={styles.workSectionHeading}>
                    {heading}
                </div>
            </div>
            <div className={styles.divWithDescription}>
                <div className={styles.workSectionDescription}>
                    {description}
                </div>
                <div>
                    {<Button text="View Services" type="primary" />}
                </div>
            </div>
        </div>

        <div className={styles.bottomArea}>
            <div className={styles.bottomAreaLeftColumn}>
                <div className={styles.divWithImage}>
                    <img className={styles.image} src="https://creuto.com/_next/static/media/c1.0465baad.webp" alt="" />
                </div>
                    <div className={styles.textOverlayHeading}>1. Discovery & Proposal</div>
                    <div className={styles.textOverlayDescription}>From the first call to the final plan, we are here to understand and guide your brand. Discover, explore, and propose - together, we’ll make your project stand out and shine!</div>
            </div>
            <div className={styles.bottomAreaRightColumn}>
                {works.map((work, key) => {
                    return <div key={key}>
                        <div className={styles.divWithHeading}>
                            {<PaperClip />} <div className={styles.workHeading}>{work.heading}</div>
                        </div>
                        <div className={styles.workDescription}>
                            {work.description}
                        </div>
                    </div>
                })}
            </div>
        </div>

    </div>
}