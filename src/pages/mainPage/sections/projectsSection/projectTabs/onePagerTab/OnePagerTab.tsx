import { type FC } from "react"
import { ProjectTabContentHelper } from "@components/projectTabContentHelper/ProjectTabContentHelper"
import { ImageLink, Text } from "@kainn9/kain_ui_lib"
import { socialUrls } from "@util/globals"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons"
import scssVars from "@styles/variables.module.scss"
import onePagerPreviewImage from "@localAssets/photos/onePagerPreviewImage.png"
import "./onePagerTab.scss"

const OnePagerTab: FC = () => {
  const description = `
    I created this static website to test my UI library and showcase my side projects, 
    with a focus on my current multiplayer Golang game. While the project is a bit messy, 
    it helped me discover a love for using aliases to simplify JavaScript imports.
  `
  return (
    <div className="projects-section__one-pager-tab">
      <ImageLink
        src={onePagerPreviewImage}
        href={"/"}
        icon={<IconForImageLink />}
      />
      <ProjectTabContentHelper
        title = "This Website"
        description={description}
        techStackString="Typescript React Sass"
        githubUrl={socialUrls.githubOnePagerRepoURL}
      />
    </div>
  )
}

const IconForImageLink: FC = () => {
  return (
  <>
    <FontAwesomeIcon icon={faArrowsRotate} size="2xl" color={scssVars["retro-teal"]} />
      <Text
        font={"sans"}
        color="white"
        size="sm"
        customStyles={{
          fontSize: "7px",
          color: scssVars["retro-teal"]
        }}
      >
        Refresh Website
      </Text>
  </>
  )
}

export default OnePagerTab
