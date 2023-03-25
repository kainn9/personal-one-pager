import { type FC } from "react"
import { YoutubePlayer } from "@kainn9/kain_ui_lib"
import { ProjectTabContentHelper } from "@components/projectTabContentHelper/ProjectTabContentHelper"
import "./goGameTab.scss"
import { socialUrls } from "@util/globals"
const GoGameTab: FC = () => {
  const description = `
   Immerse yourself in a shared world built entirely in Golang, where you can 
   embody various characters, explore zones, and engage in battles until your last 
   breath (after which you respawn). This game features classic platformer mechanics 
   alongside a hitbox fighter-style combat system. As an ongoing proof-of-concept project, 
   it enables me to experiment with unique technologies and tackle complex problem-solving 
   challenges.
  `
  return (
    <div className="projects-section__go-game-tab">
      <YoutubePlayer title={"Multiplayer Golang Game"} embedId={"MiJp1PyAfec"} />
      <ProjectTabContentHelper
        title = "Online Multiplayer GRPC Game"
        description={description}
        techStackString="Golang gRPC Protobuf EC2 GithubActions"
        githubUrl={socialUrls.githubGoGameRepoUrl}
      />
    </div>
  )
}

export default GoGameTab
