import { type FC } from "react"
import { Text } from "@kainn9/kain_ui_lib"
import colors from "@styles/variables.module.scss"

const PurpleLightSansMd: FC<{
  children: string
  className?: string
  inline?: boolean
}> = ({ children, className, inline }) => {
  return (
  <Text
    font={"sans"}
    color={colors["purple-lightest"]}
    className={className}
    size="md"
    inline={inline ?? true}
    customStyles={{
      lineHeight: "1.4"
    }}
  >
    {children}
  </Text>
  )
}

const TealSansMd: FC<{
  children: string
  className?: string
  inline?: boolean
}> = ({ children, className, inline }) => {
  return (
  <Text
    font={"sans"}
    color={colors["retro-teal"]}
    className={className}
    size="md"
    inline={inline ?? true}
  >
    {children}
  </Text>
  )
}

export { PurpleLightSansMd, TealSansMd }
