
import { type FC } from "react"
import GoGameTab from "./projectTabs/goGameTab/GoGameTab"
import { GlowText, SectionWithScrollEffect, TabContainer } from "@kainn9/kain_ui_lib"
import colors from "@styles/variables.module.scss"

import "./projectsSection.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"
import { sectionThreshHold, sectionAnchors } from "@util/globals"
import UiLibTab from "./projectTabs/uiLibTab/UiLibTab"
import OnePagerTab from "./projectTabs/onePagerTab/OnePagerTab"

const tabClickCb = (): void => {
  const url = new URL(window.location.href)
  const hash = sectionAnchors.sideProjects

  url.hash = hash
  window.history.pushState({}, "", url.toString())
}

const SectionHeader: FC = () => {
  return (
    <div className="projects-section__section-header" id="projectsZone">
      <FontAwesomeIcon icon={faLaptopCode} color={colors["retro-teal"]} size="xl" />
      <GlowText
        font={"sans"}
        size="xl"
        color={colors["white-pink"]}
        glowColor={colors.pink}
        headingLevel={2}
      >
        Side Projects
      </GlowText>
    </div>
  )
}

const SectionTabs: FC = () => {
  const tabHeaders = [
    "Multiplayer Game",
    "UI Library",
    "This One Pager"
  ]

  const tabContent = [
    <GoGameTab key={0} />,
    <UiLibTab key={1} />,
    <OnePagerTab key={2} />
  ]

  return (
    <div className="projects-section__tab-container">
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

const ProjectsSection: FC = () => {
  return (
    <SectionWithScrollEffect className="projects-section" iObserverOpts={{ threshold: sectionThreshHold }}>
      <>
        <SectionHeader />
        <SectionTabs />
      </>
    </SectionWithScrollEffect>
  )
}

export default ProjectsSection
