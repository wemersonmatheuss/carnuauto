import styles from "./styles.module.css"

import person from "../../assets/person.png"
import { Button } from "../Button"

export function AboutPerson() {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <div className={styles.title}>
                    <h2>Non mwen se WOODDJERY</h2>
                </div>

                <div className={styles.paragraph}>
                    <p>Menm jan ak anpil moun ki rive Ozetazini, mwen te toujou reve pou gen pwòp machin mwen, men byento mwen reyalize ke achte li an lajan kach te difisil e li koute chè. Lè sa a, mwen dekouvri yon fason inovatè pou achte machin nan vant piblik. Avèk tan, mwen te kòmanse fouye nan aspè teknik sou kijan pou chwazi pi bon machin yo, idantifye opòtinite reyèl pou pwofi, epi evite erè ki fè anpil moun pèdi lajan. Kounye a, mwen ap rasanble tout konesans sa a nan yon kou 100% sou entènèt, avèk videyo pratik, kote mwen anseye etap pa etap kijan pou patisipe nan vant piblik Ozetazini epi achte machin ou pou yon pri ki anpil pi ba pase pri nan mache a - swa pou itilizasyon pèsonèl oswa pou revann avèk pwofi.</p>
                </div>

                <div className={styles.button}>
                    <Button name="Aprann avèk mwen"/>
                </div>
            </div>

            <div className={styles.image}>
                <img src={person} alt="Imagem da person" />
            </div>
        </div>
    )
}