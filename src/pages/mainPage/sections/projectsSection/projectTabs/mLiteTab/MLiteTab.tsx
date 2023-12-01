import { type FC } from "react"
import { YoutubePlayer } from "@kainn9/kain_ui_lib"
import { ProjectTabContentHelper } from "@components/projectTabContentHelper/ProjectTabContentHelper"
import "./mLiteTab.scss"

const MLiteTab: FC = () => {
  const description = `
    In this Golang-based project, embark on a captivating journey through a contemporary world, exploring the 
    intricate mind and heart of a troubled protagonist. The project utilizes functionality from my side projects/
    libraries, such as the ColdBrew Scene Manager and Tteokbokki physics library. While still in its early stages, 
    the project boasts the beginnings of some foundational systems, including animation, parallax layers, camera 
    dynamics, basic combat mechanics, rudimentary sound design, and NPC dialogues. As development progresses, 
    anticipate an evolving and immersive fusion of technology and storytelling.
  `

  return (
    <div className="projects-section__mLite-tab">
      <YoutubePlayer title={"Platformer/Metroidvania-Lite"} embedId={"e66Y5aiWFLI"} />
      <ProjectTabContentHelper
        title = "Platformer/Metroidvania-Lite"
        description={description}
        techStackString="Golang"
        githubUrl={"https://github.com/kainn9/demo"}
      />
    </div>
  )
}

export default MLiteTab
