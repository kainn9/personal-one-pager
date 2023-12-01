import { type FC } from "react"
import { YoutubePlayer } from "@kainn9/kain_ui_lib"
import { ProjectTabContentHelper } from "@components/projectTabContentHelper/ProjectTabContentHelper"
import "./geoTunesSubTab.scss"

const GeoTunesSubTab: FC = () => {
  const description = `
    GeoTunes was a collaborative project with Val (https://github.com/valnuccio) following our 4th module(React) at the Flatiron bootcamp. With just one week to apply our newly acquired skills, our goal was to create a web app allowing users to attach their Spotify playlists to a route on a shared Google Map. Users can preview each other's routes and playlists, listen to them, receive walking directions, and even favorite routes for convenient access. Additionally, users have the capability to edit their own routes.
  `

  return (
    <div className="projects-section__geo-tunes-sub-tab">
      <YoutubePlayer title={"GeoTunes Boot Camp Project"} embedId={"9ehWSGQz8q4"} />
      <ProjectTabContentHelper
        title = "GeoTunes Boot Camp Project"
        description={description}
        techStackString="React Javascript Ruby RubyOnRails SQL"
        githubUrl={"https://github.com/kainn9/Mod4-project-geoTunes"}
      />
    </div>
  )
}

export default GeoTunesSubTab
