import { type FC, useState, useEffect, type SetStateAction } from "react"
import { AnimContainer, PageLoader } from "@kainn9/kain_ui_lib"
import { Logo } from "@components/Logo/Logo"
import MainPage from "./pages/mainPage/MainPage"
import "@styles/index.scss"

const timeOutCallback = (setLoading: { (value: SetStateAction<boolean>): void, (arg0: boolean): void }): void => {
  setLoading(false)
}

const scrollCallback = (query: string): void => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!query) return
  const currentPath = window.location.pathname + window.location.search
  window.history.replaceState({ path: currentPath, hash: query }, "", currentPath + query)
  const element = document?.querySelector(query)
  if (element !== null && element !== undefined) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

const LogoFitted: FC = () => {
  return (
    <AnimContainer
      className="logo-fitted"
      key={0}
      anim={"revealFromTop"}
      delay={1000}
      freezeAtFinalFrame
      customStyle={{
        opacity: "0"
      }}
    >
      <Logo />
    </AnimContainer>
  )
}

const NavBgBuffer: FC = () => {
  return (
    <div className="nav-bg-buffer" />
  )
}

const App: FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => { timeOutCallback(setLoading) }, 3200)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const hash = window.location.hash
    scrollCallback(hash)
  }, [loading])

  return (

    <div className="App">
      {loading
        ? (
        <PageLoader />
          )
        : (
        <>
          <NavBgBuffer />
          <LogoFitted />
          <MainPage />
        </>
          )}
    </div>
  )
}

export default App
export { scrollCallback }
