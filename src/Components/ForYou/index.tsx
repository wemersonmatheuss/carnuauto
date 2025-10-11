import styles from "./styles.module.css"

import { PointForYou } from "../Points/PointForYou"
import { Button } from "../Button"

export function ForYou() {
    return (
        <div className={styles.container}>
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