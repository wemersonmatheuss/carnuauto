import styles from "./styles.module.css"

type Props = {
    icon: string
    headline: string
    paragraph: string
}

export function PointDestak({ icon, headline, paragraph }:Props) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <img src={icon} alt="" />
                <h2>{headline}</h2>
            </div>

            <div className={styles.paragraph}>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}