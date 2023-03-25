import { type FC } from "react"
import { Text } from "@kainn9/kain_ui_lib"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGears } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TealSansMd } from "@components/text/Text"
import scssVars from "@styles/variables.module.scss"
import "./projectTabContentHelper.scss"

interface ProjectTabContentHelperProps {
  title: string
  description: string
  techStackString: string
  githubUrl: string
}

const ProjectTabContentHelper: FC<ProjectTabContentHelperProps> = ({
  title,
  description,
  techStackString,
  githubUrl
}) => {
  return (
    <div className="project-tab-content-helper__container">
      <Text
        font={"sans"}
        color={scssVars["retro-teal"]}
        size="lg"
        headingLevel={2}
      >
        {title}
      </Text>

      <Text
        font={"sans"}
        color={scssVars["white-pink"]}
        size="md"
      >
        {description}
      </Text>
      <div className="project-tab-content-helper__tech-section">
        <div className="project-tab-content-helper__tech-section-left" >
          <div className="project-tab-content-helper__tech-section-left__icon-header">
            <FontAwesomeIcon icon={faGears} size={"sm"} color={scssVars["retro-teal"]}/>
            <TealSansMd inline={false}>Tech</TealSansMd>
            <TealSansMd inline={false}>Stack</TealSansMd>
          </div>

          <div className="project-tab-content-helper__tech-section-left__tech-stack-area">
            <Text
              font={"sans"}
              color={scssVars["white-pink"]}
              size="sm"
            >
              {techStackString}
            </Text>
          </div>
        </div>

        <div className="project-tab-content-helper__tech-section-left__github-area">
          <div
            className="project-tab-content-helper__tech-section-left__github-link"
            onClick={() => { window.location.href = githubUrl }}
          >
            <FontAwesomeIcon icon={faGithub} size={"lg"}/>
            <Text font={"sans"}>
              View On Github
            </Text>
          </div>
        </div>
      </div>

    </div>
  )
}

export { ProjectTabContentHelper }
