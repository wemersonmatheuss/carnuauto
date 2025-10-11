import styles from "./styles.module.css"

import { useScrollAnimation } from "../../useScrollAnimation"

import logo from "../../assets/logo.png"
import { Button } from "../Button"

export function AboutCarnu() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <div ref={ref} className={`${styles.container} ${isVisible ? styles.show : styles.hide}`}>
            <div className={styles.image}>
                <img src={logo} alt="Logo Carnu Auto" />
            </div>

            <div className={styles.description}>
                <div className={styles.title}>
                    <h2>Men, finalman, kiyès nou ye?</h2>
                </div>

                <div className={styles.paragraph}>
                    <p>Nou se yon gwoup envestisè ki renmen machine , epi ki remake gen yon fason pou jwenn libètefinansye nan Achte e Revann machine . Nou ini ansanm e, Depi lè sa a nou fonde CARNU AUTO ki se yonn dealer kap bay kominote a sevis pandan anpil tan , ak lide pou ede moun kiap swiv nou yo jwenn libète finansye yo toujou reve a atravè revann machin,WOODDJERY, ki responsab pou jesyon konpayi an nan peyi Etazini, te dirije pwojè a epikòmanse anseye sou pati teknik pou achte ak chwazi pi bon machin yo, konsa moun kareyalize pwofi gras ak patenarya ak inyon avèk òganizasyon biznis nou an.</p>
                </div>

                <div className={styles.button}>
                    <Button name="Mwen vle aprann avèk nou"/>
                </div>
            </div>
        </div>
    )
}