import styles from "./trustedSection.module.css"

interface TrustedSectionProps {
    heading: string
    items: string[]
}

export default function TrustedSection({ heading, items }: TrustedSectionProps) {
    return <div className={styles.trustedSection}>
        <p className={styles.heading}>
            {heading}
        </p>
        <div className={styles.itemsSection}>
            {items.map((item, key) => {
                return <div key={key}>
                    {item}
                </div>
            })}
        </div>
    </div>
}