import styles from "./styles.module.css"

type Props = {
    title: string
    paragraph: string
}

export function PointForYou({ title, paragraph }: Props) {
    return (
        <div className={styles.container}>
            <h2>{title}</h2>

            <p>{paragraph}</p>
        </div>
    )
}