import styles from "./awardsSection.module.css"

interface AwardsSectionProps {
    awards: string[]
}

export default function AwardsSection({ awards }: AwardsSectionProps) {
    return <div className={styles.section}>
        <header className={styles.header}>AWARDS & RECOGNITIONS</header>
        <div className={styles.divWithAwards}>
            {awards.map((award, key) => {
                return <div key={key} className={styles.divWithAward}>
                    {award}
                </div>
            })}
        </div>
    </div>
}