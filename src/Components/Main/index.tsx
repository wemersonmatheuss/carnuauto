import styles from "./styles.module.css"

import { Button } from "../Button"


export function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Vire Machin an Oportunite epi Rive nan Libète Finansye Ou</h1>

                <p>Aprann kijan pou achte machin nan vant piblik epi rive jwenn libète finansye, menm si w ap kòmanse depi nan zero.</p>

                <Button name="Mwen vle aprann"/>
            </div>
        </div>
    )
}