import { type FC } from "react"
import { TabContainer } from "@kainn9/kain_ui_lib"
import ScavSubTab from "./scavSubTab/ScavSubTab"
import ArtAppSubTab from "./artAppSubTab/ArtAppSubTab"
import GeoTunesSubTab from "./geoTunesSubTab/GeoTunesSubTab"

import "./oldProjectsTab.scss"
import colors from "@styles/variables.module.scss"

const tabClickCb = (): void => {
  const url = new URL(window.location.href)
  const projectId = 5
  const hash = "projectsZone"

  url.searchParams.set("project", projectId.toString())
  url.hash = hash

  window.history.pushState({}, "", url.toString())
}

const SectionTabs: FC = () => {
  const tabHeaders = [
    "Scavenger",
    "ARt App",
    "GeoTunes"

  ]

  const tabContent = [
    <ScavSubTab key={0} />,
    <ArtAppSubTab key={1} />,
    <GeoTunesSubTab key={2} />
  ]

  return (
    <div className="projects-section__old-projects-tab">

      <h3 className="projects-section__extra-header">Please be aware that these older bootcamp projects were done in a week or less by with very minimal coding experience.</h3>

      <TabContainer
        className="projects-section____tab-container-component"
        bgColor={colors["purple-darkest"]}
        tabHeaders={tabHeaders}
        tabContent={tabContent}
        tabBgColor={colors["purple-darker"]}
        tabfontColor={colors["retro-teal"]}
        tabActiveHighlight={colors["retro-teal"]}
        font="monospace"
        tabQpKey="project"
        tabClickCb={tabClickCb}
      />
    </div>
  )
}

const OldProjectsTab: FC = () => {
  return (
    <SectionTabs />
  )
}

export default OldProjectsTab
