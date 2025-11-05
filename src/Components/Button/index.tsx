import type { ComponentProps } from "react"
import styles from "./styles.module.css"

type Props = ComponentProps<"button"> & {
  name: string
  /** mensagem opcional a ser enviada no WhatsApp */
  message?: string
  /** permite sobrescrever o número se necessário (formato livre, será filtrado para dígitos) */
  phone?: string
}

const DEFAULT_PHONE = "+1 (857) 236-8531"
const DEFAULT_MESSAGE = "Bonjou, mwen enterese nan kou a"

function formatPhoneToDigits(phone: string) {
  return phone.replace(/\D/g, "")
}

function openWhatsApp(phone: string, message: string) {
  const digits = formatPhoneToDigits(phone)
  const text = encodeURIComponent(message)
  const url = `https://wa.me/${digits}?text=${text}`
  // abre em nova aba (seguindo boas práticas de segurança)
  window.open(url, "_blank", "noopener,noreferrer")
}

export function Button({ name, message, phone, onClick, ...rest }: Props) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    // chama um onClick passado externamente se houver
    if (typeof onClick === "function") onClick(e)

    // abre o WhatsApp do cliente (ou o telefone informado)
    try {
      openWhatsApp(phone ?? DEFAULT_PHONE, message ?? DEFAULT_MESSAGE)
    } catch (err) {
      // se window.open falhar (ex: em testes), apenas ignore — não deve quebrar a UI
      // log em ambiente de desenvolvimento (Vite usa import.meta.env.DEV)
      try {
        const meta = import.meta as unknown as { env?: { DEV?: boolean } }
        if (meta.env?.DEV) console.error(err)
      } catch {
        // ambiente sem import.meta (fallback seguro) — não quebrar
      }
    }
  }

  return (
    <div className={styles.container}>
      <button type="button" className={styles.button} onClick={handleClick} {...rest}>
        {name}
      </button>
    </div>
  )
}
