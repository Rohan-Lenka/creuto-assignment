import { ReactNode } from "react"
import styles from "./button.module.css"

interface ButtonProps {
    text: string
    type: "header-primary" | "header-secondary" | "primary" | "secondary"    
    startIcon?: ReactNode
    endIcon?: ReactNode
}

export default function Button({ text, type, startIcon, endIcon }: ButtonProps) {
    return <button className={styles[type]}>
        {startIcon} {text} {endIcon}
    </button>
}