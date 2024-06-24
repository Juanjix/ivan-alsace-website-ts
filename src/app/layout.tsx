import { PropsWithChildren } from "react"

const RootLayout: React.FC<PropsWithChildren> = (props) => {
  /**
   * PROPS
   */
  const { children } = props

  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
