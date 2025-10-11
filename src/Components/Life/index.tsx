import styles from "./styles.module.css"

import { useScrollAnimation } from "../../useScrollAnimation"


import { Button } from "../Button"

export function Life() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <div ref={ref} className={`${styles.container} ${isVisible ? styles.show : styles.hide}`}>
            <div className={styles.title}>
                <h2>Chanje lavi finansye ou aprann achte machin nan vant piblik Ozetazini!</h2>
            </div>

            <div className={styles.paragraph}>
                <p>Rive Ozetazini e bezwen yon machin se prèske yon règ.</p>


                <p>Men lè ou wè pri finansman yo — peman ki wo anpil, enterè ki twòp ak dèt ki dire plizyè ane — rèv la tounen enkyetid. Lavni an se: <span>ou pa bezwen mete tèt ou nan dèt pou gen machin ou toujou te vle a.</span></p>


                <p>Gen yon fason ki pi entelijan ak abòdab:</p>

                <p>Achte dirèkteman nan vant piblik yo.</p>
                <p>Sèlman itilize lisans kondwi ou oswa viza ou.</p>
                <p>San kredi, san finansman ak san biwokrasi.</p>

                <p>Isit la, ou pral aprann etap pa etap kijan pou patisipe nan vann piblik yo, chwazi pi bon machin yo, epi achte yo pou yon pri anpil pi ba pase nan magazen yo — swa pou itilize pèsonèl oswa pou revann epi fè pwofi.</p>

                <p><span>Ou vini nan Amerik pou viv pi byen, pa pou fè dèt.</span></p>
            </div>

            <div className={styles.button}>
                <Button name="Mwen vle ekonomize"/>
            </div>
        </div>
    )
}