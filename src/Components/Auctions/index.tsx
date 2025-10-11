import styles from "./styles.module.css"

import { Button } from "../Button"

export function Auctions() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Mèt sou mache vant machin nan lè w patisipe nan pi bon vant yo</h2>
            </div>

            <div className={styles.auctions}>
                <p><span>AUCTION 1 – Copart</span> se youn nan pi gwo platfòm auction machin nan mond lan. Li espesyalize nan machin ki  fè aksidan, machin leta sezi, ak machin pou revann oswa pou pyès.  Li se yon chwa pafè pou moun k ap chèche machin ki gen ti domaj oswa pou moun k ap travay  nan domèn pyès machin ak rekiperasyon. </p>

                <p><span>AUCTION 2 – IAAI (Insurance Auto Auctions)</span> se yon gwo konpayi Auction machin ki soti nan konpayi asirans, bank, ak konpayi lwe  machin.  Yo vann anpil machin ki domaje, ki te vòlè, oswa ke bank te reprann.  Se yon ekselan opsyon pou moun k ap travay nan reparasyon machin oswa pou moun k ap  chèche bon opòtinite anba pri mache a. </p>

                <p><span>AUCTION 3 – Manheim</span> rekonèt pou konsantrasyon li sou machin dezyèm men ki an bon eta. Li se youn nan  pi gwo rezo Auction machin ki konsantre sou mache revann.  Yo vann machin soti nan konpayi lwe, flòt biznis ak konsesyonè, anjeneral byen mentni ak  an bon eta .   Se vant piblik ideyal pou konsesyonè, revandè, ak achtè k ap chèche machin pare pou itilize  san twòp risk.</p>

                <p><span>AUCTION 4 – ADESA</span> se youn nan pi gwo platfòm vant piblik machin Ozetazini, anpil itilize pa revandè ak konsesyonè.  Là ou ka jwenn machin dezyèm men ki nan bon eta, anpil ki sòti nan flòt biznis ak lwe machin, avèk antretyen a jou ak sèlman kèk ti reparasyon pou fè — pafè pou moun ki vle achte bon mache epi revann ak pwofi.  Genyen tou machin nan gwo konsesyonè, mete sou vant pou libere stock, anjeneral pi ba pase valè mache a, sa ki fè ADESA yon ekselan opsyon pou biznis ak opòtinite reyèl pou ekonomize.</p>
            </div>

            <div className={styles.button}>
                <Button name="Mwen vle patisipe nan pi bon yo"/>
            </div>
        </div>
    )
}