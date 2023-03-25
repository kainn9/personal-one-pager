import { type FC } from "react"

// to make this single import struct
import IntroSection from "./sections/introSection/IntroSection"
import AboutSection from "./sections/aboutSection/AboutSection"
import ProjectsSection from "./sections/projectsSection/ProjectsSection"

import "./mainPage.scss"

import { Nav } from "../../components/nav/nav"
import ContactSection from "./sections/contactSection/ContactSection"

const MainPage: FC = () => {
  return (
    <div className="main-page">
      <Nav/>
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default MainPage
