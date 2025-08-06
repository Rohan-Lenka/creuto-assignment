import styles from "./trustedSection.module.css"

interface TrustedSectionProps {
    heading: string
    brands: string[]
}

export default function TrustedSection({ heading, brands }: TrustedSectionProps) {
    return <div className={styles.trustedSection}>
        <p className={styles.heading}>
            {heading}
        </p>
        <div className={styles.brandsSection}>
            {brands.map((brand, key) => {
                return <div key={key} className={styles.divWithBrand}>
                    <img src={brand} alt="" />
                </div>
            })}
        </div>
    </div>
}