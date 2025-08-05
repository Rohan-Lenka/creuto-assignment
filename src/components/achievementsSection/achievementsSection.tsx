import { ReactNode } from "react"
import styles from "./achievementsSection.module.css"

interface AchievementsSectionProps {
    items: {
        name: string
        quantity: string
        startIcon: ReactNode
    }[]
}

export default function AchievementsSection({ items }: AchievementsSectionProps) {
    return <div className={styles.achievements}>
        {items.map((item, key) => {
            return <div key={key}>
                <div className={styles.divWithQuantity} >
                    {item.startIcon} {item.quantity}
                </div>
                <div className={styles.divWithName}>
                    {item.name}
                </div>
            </div>
        })}
    </div>
}