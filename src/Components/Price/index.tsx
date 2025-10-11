import styles from "./styles.module.css"

import { useScrollAnimation } from "../../useScrollAnimation"

import { PointPrice } from "../Points/PointPrice"
import { Button } from "../Button"

import verify from "../../assets/svg/verificado.svg"

export function Price() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <div ref={ref} className={`${styles.container} ${isVisible ? styles.show : styles.hide}`}>
            <div className={styles.containerTwo}>
                <div className={styles.points}>
                    <PointPrice icon={verify} description="Kou Konplè Machin Carnu INC"/>
                    <PointPrice icon={verify} description="Kijan pou chwazi pi bon machin yo"/>
                    <PointPrice icon={verify} description="Kijan pou achte machin nan vann piblik Copart"/>
                    <PointPrice icon={verify} description="Kijan pou achte machin nan vann piblik IAAI"/>
                    <PointPrice icon={verify} description="Kijan pou achte machin nan vann piblik Manheim"/>
                    <PointPrice icon={verify} description="Kijan pou achte machin nan vann piblik Adesa"/>
                    <PointPrice icon={verify} description="Kijan pou jwenn lisans lan"/>
                    <PointPrice icon={verify} description="Bonis: Zouti pou rechèch machin yo pral achte"/>
                    <PointPrice icon={verify} description="Bonis: Pi bon kote pou achte pyès ki abòdab"/>
                </div>

                <div className={styles.price}>
                    <p>Soti nan <span>$597</span></p>

                    <h3>US$ 347,00</h3>
                </div>

                <div className={styles.button}>
                    <Button name="Achte kounye a"/>

                    <p>PEMAN 100% SÈN</p>
                </div>
            </div>
            
        </div>
    )
}