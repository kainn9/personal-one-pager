import { type FC } from "react"
import { ProjectTabContentHelper } from "@components/projectTabContentHelper/ProjectTabContentHelper"
import { socialUrls } from "@util/globals"
import "./uiLibTab.scss"

const UiLibTab: FC = () => {
  const UILibUrl = "https://d2qhtb7c0usx4g.cloudfront.net/?path=/story/baseloader--water-dragon"
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

      <div className="projects-section__extra-header-container">
        <h2 className="projects-section__extra-header"><a href={UILibUrl}>{"Click to view on CloudFront"}</a></h2>
        <h3 className="projects-section__extra-header"><a href={UILibUrl}>{"(recommended for mobile/tablet)"}</a></h3>
      </div>

      <iframe src={UILibUrl}></iframe>
      <ProjectTabContentHelper
        title = "React Storybook Ui Library"
        description={description}
        techStackString="Typescript React Webpack Rollup Sass S3 Cloudfront Terraform Storybook GithubActions"
        githubUrl={socialUrls.githubUiLibRepoURL}
      />
    </div>
  )
}

export default UiLibTab
