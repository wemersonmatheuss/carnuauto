import { useState } from "react"
import styles from "./styles.module.css"

import { useScrollAnimation } from "../../useScrollAnimation"

import JogarIcon from "../../assets/svg/jogar.svg"

const QUESTIONS = [
    {
        q: "Pour qui est le cours ?",
        a: "Pou tout moun ki vle aprann achte machin Ozetazini epi jwenn libète finansye!"
    },
    {
        q: "Ai-je besoin d'expérience pour comprendre le cours ?",
        a: "Non ! Nous vous montrons toutes les étapes, du débutant à l'avancé."
    },
    {
        q: "Èske mwen bezwen pale angle pou m ka achte machin?",
        a: "Pa gen pwoblèm! Kou a fèt nan lang Kreyol pou ou kapab konprann san pwoblèm."
    },
    {
        q: "Èske m ap aprann fè tout pwosesis la pou kont mwen oswa èske mwen bezwen entémedyè?",
        a: "Wi, nou montre w fason pouw jere biznis ou pou kont ou . oswa w ka itilize entèmedyè si ou vle."
    },
    {
        q: "Èske mwen bezwen rete Ozetazini pou m ka achte nan Auction?",
        a: "Non! Ou ka patisipe nan auction lan menm siw USA , CANADA , MEXIQUE."
    },
    {
        q: "Kijan mwen ka jwenn aksè nan kou a?",
        a: "Apre konfimasyon peman an, w ap resevwa yon imèl ak enstriksyon pou jwenn aksè nan platfòm entènèt kou a."
    }
]

export function Questions() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    function toggle(i: number) {
        setOpenIndex(openIndex === i ? null : i)
    }
    const { ref, isVisible } = useScrollAnimation()

    return (
        <div ref={ref} className={`${styles.container} ${isVisible ? styles.show : styles.hide}`}>
            <div className={styles.containerTwo}>
                {QUESTIONS.map((item, i) => (
                    <div key={i}>
                        <div className={styles.questionBox} onClick={() => toggle(i)}>
                            <img src={JogarIcon} alt="icon" className={openIndex === i ? `${styles.icon} ${styles.iconOpen}` : styles.icon} />
                            <div className={styles.questionText}>{item.q}</div>
                        </div>

                        <div className={openIndex === i ? styles.answerBox : styles.hidden}>
                            {item.a}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}