import type { ComponentProps } from "react"
import styles from "./styles.module.css"

type Props = ComponentProps<"button"> & {
    name:string
}

export function Button({ name }:Props) {
    return (
        <div className={styles.container}>
            <button type="button">{name}</button>
        </div>
    )
}