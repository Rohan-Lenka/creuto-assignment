import { ReactNode } from "react"
import styles from "./company.module.css"

interface CompanyProps {
    name: string
    logo?: ReactNode
}

export default function Company({ name, logo }: CompanyProps) {
    return <div className={styles.company}>
        {logo} {name}
    </div>
}