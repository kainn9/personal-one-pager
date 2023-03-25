import { type FC } from "react"
import kLogo from "@localAssets/photos/logo.svg"

const Logo: FC = () => {
  return (<img src={kLogo} height={50} onClick={() => { window.location.href = window.location.protocol + "//" + window.location.host + "/" }}/>)
}

export { Logo }
