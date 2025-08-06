import styles from "./menu.module.css"

interface MenuProps {
    items: string[]
}

export default function Menu({ items }: MenuProps) {
    return <div className={styles.menu}>
        {items.map((item, key) => {
            return <div key={key} className={styles.menuItem}>
                {item}
            </div>
        })}
    </div>
}