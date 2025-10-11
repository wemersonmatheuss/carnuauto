import styles from "./styles.module.css"

import logo from "../../assets/logo.png"

export function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={logo} alt="" />
            </div>

            <div className={styles.description}>
                <p>Carnu Auto INC</p>
                <p>Todos os direitos reservados.</p>
                <a href="#">Desenvolvido e mantido por Wemerson Dev</a>
            </div>
        </div>
    )
}