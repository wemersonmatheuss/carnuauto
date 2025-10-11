import styles from "./styles.module.css"

import { useScrollAnimation } from "../../useScrollAnimation"

import { PointDestak } from "../Points/PointDestak"

import licensa from "../../assets/svg/licenca.svg"
import carro from "../../assets/svg/carro-compacto.svg"
import cifrao from "../../assets/svg/cifrao.svg"

export function Destak() {
    const { ref, isVisible } = useScrollAnimation()
    return (
        <div ref={ref}
            className={`${styles.container} ${isVisible ? styles.show : styles.hide}`}>
            <PointDestak icon={licensa} headline="Ou pa konnen kijan pou ou jwenn lisans machann oswa kat vant san ou pa oblije pase anba lòt moun." paragraph="Dekouvri etap pa etap ki jan pou jwenn lisans vandè ou Ozetazini endepandamman, rapid epi san entèmedyè."/>


            <PointDestak icon={carro} headline="Ou pa konnen kijan ak nan ki fason pou w achte bon machin nan nan vant piblik la avèk sekirite." paragraph="Aprann etap pa etap pou idantifye pi bon machin yo nan vann piblik epi fè bon negosasyon."/>


            <PointDestak icon={cifrao} headline="Ou pa gen bon kredi  , oubyen ou poko gen ase lajan pouw louer local." paragraph="Menm san kredi oswa anpil lajan, gen yon chemen pou kòmanse — epi patisipe nan vant piblik yo se premye etap la."/>
        </div>
    )
}