import { type FC } from "react"
import { YoutubePlayer } from "@kainn9/kain_ui_lib"
import { ProjectTabContentHelper } from "@components/projectTabContentHelper/ProjectTabContentHelper"
import "./artAppSubTab.scss"

const ArtAppSubTab: FC = () => {
  const description = `
    My final bootcamp project at Flatiron School involved creating a highly inefficient 
    Instagram-like application with a terrible user interface and a peculiar plot twist. 
    This twist allows users to view images on a poorly rendered 3D canvas or using 
    Augmented Reality HIRO symbols. The project facilitated my ongoing learning with 
    using Ruby on Rails as a backend API and practicing state management in React.
  `

  return (
    <div className="projects-section__art-app-sub-tab">
      <YoutubePlayer title={"AR Art Boot Camp Project"} embedId={"b1ZqJJBFYMk"} />
      <ProjectTabContentHelper
        title = "AR Art Boot Camp Project"
        description={description}
        techStackString="React Redux Javascript Ruby RubyOnRails SQL"
        githubUrl={"https://github.com/kainn9/Mod5-Project-ARt-App"}
      />
    </div>
  )
}

export default ArtAppSubTab
