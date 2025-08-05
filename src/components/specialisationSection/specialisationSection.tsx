import Bullet from "../bullet/bullet"
import styles from "./specialisationSection.module.css"

interface SpecialisationSectionProps {
    introText: string
    heading: string
    description: string
    specialisations: {
        imageSrc: string
        name: string
    }[]
}

export default function SpecialisationSection({ introText, heading, description, specialisations }: SpecialisationSectionProps) {
    return <div className={styles.section}>
        <div className={styles.divWithIntroText}>
            <div className={styles.introText}>
                {<Bullet />} {introText}
            </div>
        </div>
        <div className={styles.heading}>
            {heading}
        </div>
        <div className={styles.divWithDescription}>
            <div className={styles.description}>
                {description}
            </div>
        </div>
        <div className={styles.divWithSpecialisationCards}>
            {specialisations.map((specialisation, key) => {
                return <div key={key} className={styles.specialisationCard}>
                    <div className={styles.divWithImage}>
                        <img src={specialisation.imageSrc} className={styles.image} />
                    </div>
                    <p className={styles.name}>
                        {specialisation.name}
                    </p>
                </div>
            })}
        </div>
    </div>
}