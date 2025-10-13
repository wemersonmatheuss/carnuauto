import styles from "./styles.module.css"

import { Button } from "../Button"


export function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Aprann achte machin nan AUCTION ak pri ki pi ba pase valè yo sou 
                    mache a, epi rive jwenn endepandans finansye ou .</h1>

                <p>menm si ou pat gen okenn eksperyans nan Achte e Vann machine Deja.</p>

                <Button name="Mwen vle aprann"/>
            </div>
        </div>
    )
}