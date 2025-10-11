import styles from "./styles.module.css"

import { useScrollAnimation } from "../../useScrollAnimation"


import { PointForYou } from "../Points/PointForYou"
import { Button } from "../Button"

export function ForYou() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <div ref={ref} className={`${styles.container} ${isVisible ? styles.show : styles.hide}`}>
            <h2>Carnu Auto a se pou ou ki:</h2>

            <div className={styles.allPoints}>
               <PointForYou title="1. Li se yon achtè debutan" paragraph="Li pa janm achte machin nan yon vant piblik anvan, men li enterese aprann kijan pwosesis la fonksyone ak kijan pou fè yon acha ki an sekirite ak pwofitab." /> 


               <PointForYou title="1. Li se yon achtè debutan" paragraph="Li pa janm achte machin nan yon vant piblik anvan, men li enterese aprann kijan pwosesis la fonksyone ak kijan pou fè yon acha ki an sekirite ak pwofitab." /> 


               <PointForYou title="1. Li se yon achtè debutan" paragraph="Li pa janm achte machin nan yon vant piblik anvan, men li enterese aprann kijan pwosesis la fonksyone ak kijan pou fè yon acha ki an sekirite ak pwofitab." /> 


               <PointForYou title="1. Li se yon achtè debutan" paragraph="Li pa janm achte machin nan yon vant piblik anvan, men li enterese aprann kijan pwosesis la fonksyone ak kijan pou fè yon acha ki an sekirite ak pwofitab." /> 


               <PointForYou title="1. Li se yon achtè debutan" paragraph="Li pa janm achte machin nan yon vant piblik anvan, men li enterese aprann kijan pwosesis la fonksyone ak kijan pou fè yon acha ki an sekirite ak pwofitab." /> 


               <PointForYou title="1. Li se yon achtè debutan" paragraph="Li pa janm achte machin nan yon vant piblik anvan, men li enterese aprann kijan pwosesis la fonksyone ak kijan pou fè yon acha ki an sekirite ak pwofitab." /> 
            </div>

            <div className={styles.button}>
                <Button name="Mwen vle"/>
            </div>
        </div>
    )
}