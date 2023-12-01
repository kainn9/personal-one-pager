import { type FC } from "react"
import { ProjectTabContentHelper } from "@components/projectTabContentHelper/ProjectTabContentHelper"
import "./tteokbokkiTab.scss"

const TteokbokkiTab: FC = () => {
  const physicsIframeUrl = window.location.protocol + "//" + window.location.host + "/tteokbokki.html"
  const description = `
    This project is dedicated to crafting a 2D physics library entirely in Golang. 
    Inspired by Gustavo Pezzi's extensive C++ physics course, my objective is to 
    develop a library that is ECS (Entity-Component-System)-friendly while 
    remaining adaptable to various programming paradigms. This design approach 
    ensures versatility, enabling seamless integration with different coding styles. 
    The library is also designed to facilitate the coexistence of both linear and 
    angular bodies within a unified simulation environment. While the project is in a 
    continuous state of refinement, I actively integrate it into my side projects/indie 
    games, showcasing its applicability in real development scenarios. Although 
    there is still much work and improvement ahead, reaching this point has involved an 
    immense learning journey that fills me with pride and excitement for both the present and future 
    of this endeavor.
  `

  return (
    <div className="projects-section__tboki-tab">

    <div className="projects-section__extra-header-container">
      <h2 className="projects-section__extra-header">{"Simple Interactive Example"}</h2>
      <h3 className="projects-section__extra-header">{"(click to spawn random rigid bodies)"}</h3>
    </div>

    <iframe src={physicsIframeUrl}></iframe>
      <ProjectTabContentHelper
        title = "2D Physics Library Named Tteokbokki"
        description={description}
        techStackString="Golang WASM"
        githubUrl={"https://github.com/kainn9/tteokbokki"}
      />
    </div>
  )
}

export default TteokbokkiTab
