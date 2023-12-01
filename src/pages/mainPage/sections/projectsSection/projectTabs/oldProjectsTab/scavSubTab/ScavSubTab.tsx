import { type FC } from "react"
import { YoutubePlayer } from "@kainn9/kain_ui_lib"
import { ProjectTabContentHelper } from "@components/projectTabContentHelper/ProjectTabContentHelper"
import "./scavSubTab.scss"

const MLiteTab: FC = () => {
  const description = `
  For one of my concluding bootcamp projects, I chose to diverge from the familiar realm of Ruby on Rails 
  (ROR) backends and delved into the world of full-stack JavaScript. My primary objective was to explore the 
  dynamics of a document-based database, moving away from the SQL relational databases commonly associated with 
  ROR projects. This venture provided the perfect opportunity to acquaint myself with technologies such as Express, 
  Mongoose, and MongoDB, all within the Node.js runtime while adhering to the familiar MVC architecture.
  The resulting application enables users to collaboratively share a Google Map, where they can mark 
  routes/pins and attach various media, including images, videos, and even songs/podcasts via Spotify.
  `

  return (
    <div className="projects-section__scav-sub-tab">
      <YoutubePlayer title={"Scavenger Boot Camp Project"} embedId={"tApE3d16Nl4"} />
      <ProjectTabContentHelper
        title = "Scavenger Boot Camp Project"
        description={description}
        techStackString="React Express NodeJs Redux Mongoose MongoDB Typescript Javascript"
        githubUrl={"https://github.com/kainn9/scavenger_frontend"}
      />
    </div>
  )
}

export default MLiteTab
