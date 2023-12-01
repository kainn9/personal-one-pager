import { type FC } from "react"
import { YoutubePlayer } from "@kainn9/kain_ui_lib"
import { ProjectTabContentHelper } from "@components/projectTabContentHelper/ProjectTabContentHelper"
import "./goGameTab.scss"
import { socialUrls } from "@util/globals"
const GoGameTab: FC = () => {
  const description = `
  Embark on an immersive journey within a shared world, where you assume the roles of 
  diverse characters, explore captivating zones, and partake in battles until your 
  last breath, only to respawn and resume the adventure. This game seamlessly 
  integrates classic platformer mechanics with a hitbox fighter-style combat system. 
  As a retired proof-of-concept project, it served as a canvas for experimenting with 
  unique technologies and addressing intricate problem-solving challenges.
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
