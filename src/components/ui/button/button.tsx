'use client'

import { ReactNode } from "react"
import styles from "./button.module.css"

interface ButtonProps {
    text: string
    type: "header-primary" | "header-secondary" | "primary" | "secondary"
    startIcon?: ReactNode
    endIcon?: ReactNode
    onClick?: () => void
}

export default function Button({ text, type, startIcon, endIcon, onClick }: ButtonProps) {
    return <button className={styles[type]} onClick={onClick}>
        {startIcon} {text} {endIcon}
    </button>
}