import { type FC } from "react"
import { ProjectTabContentHelper } from "@components/projectTabContentHelper/ProjectTabContentHelper"
import { ImageLink, Text } from "@kainn9/kain_ui_lib"
import { socialUrls } from "@util/globals"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"
import scssVars from "@styles/variables.module.scss"
import storybookPreviewImage from "@localAssets/photos/storybookPreviewImage.png"
import "./uiLibTab.scss"

const UiLibTab: FC = () => {
  const description = `
    A React UI library comprised of reusable components written in TypeScript. 
    The preview build was bundled and presented using Webpack and Storybook, while 
    the distributed package was exported using Rollup. To host the Storybook preview, 
    basic Terraform code was written for S3/Cloudfront infrastructure. GitHub Actions 
    CI/CD workflows were set up to automate the deployment of the Storybook preview to 
    S3/Cloudfront and the release of the library to GitHub Packages.
  `
  return (
    <div className="projects-section__ui-lib-tab">
      <ImageLink
        src={storybookPreviewImage}
        href={socialUrls.storyBookWaterDragonLoader}
        icon={<IconForImageLink />}
      />
      <ProjectTabContentHelper
        title = "React Storybook Ui Library"
        description={description}
        techStackString="Typescript React Webpack Rollup Sass S3 Cloudfront Terraform Storybook GithubActions"
        githubUrl={socialUrls.githubUiLibRepoURL}
      />
    </div>
  )
}

const IconForImageLink: FC = () => {
  return (
  <>
    <FontAwesomeIcon icon={faBookOpen} size="2xl" color={scssVars["retro-teal"]} />
      <Text
        font={"sans"}
        color="white"
        size="sm"
        customStyles={{
          fontSize: "7px",
          color: scssVars["retro-teal"]
        }}
      >
        View Preview
      </Text>
  </>
  )
}

export default UiLibTab
