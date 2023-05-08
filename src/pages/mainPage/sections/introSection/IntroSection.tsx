import { type FC } from "react"
import { AnimContainer, GlowText, Text } from "@kainn9/kain_ui_lib"
import colors from "@styles/variables.module.scss"
import "./introSection.scss"
import { socialUrls } from "@util/globals"

const style = {
  opacity: "0"
}

const NamePrefixSub: FC = () => {
  return (
  <span className="intro__name-prefix-sub">
    <AnimContainer
      anim={"revealFromTop"}
      delay={1950}
      freezeAtFinalFrame
      customStyle={style}
    >
      <Text
        headingLevel={1}
        font={"mono"}
        size="md"
        color="#26d8ff"
      >
        {"Yo! I'm known as"}
      </Text>
    </AnimContainer>
  </span>
  )
}

const NameHeader: FC = () => {
  return (
  <span className="intro__name-header">
    <AnimContainer
      delay={2150}
      anim={"revealFromTop"}
      freezeAtFinalFrame
      customStyle={style}
    >
      <GlowText
        font={"sans"}
        size="bingBong"
        color={colors["white-pink"]}
        glowColor={colors.pink}
        headingLevel={1}
      >
        Kainan Doneson
      </GlowText>
    </AnimContainer>
  </span>
  )
}

const NameSubHeader: FC = () => {
  return (
  <span className="intro__name-sub-header">
    <AnimContainer
      delay={2350}
      anim={"revealFromTop"}
      freezeAtFinalFrame
      customStyle={style}
    >
      <Text font={"sans"} size="bingBong" color={colors["purple-lightest"]} headingLevel={1}>
        And I like to write code.
      </Text>
    </AnimContainer>
  </span>
  )
}

const Subtext: FC = () => {
  return (
    <AnimContainer
      delay={2550}
      anim={"revealFromBottom"}
      freezeAtFinalFrame
      customStyle={style}
    >
      <div className="intro__section-sub-text">
        <Text font={"sans"} size="md" color={colors["purple-lightest"]} inline>
          {"Professionally I work as a software engineer for "}
        </Text>

        <a id="intro__section-ftf-link" href={socialUrls.ftfLink}>
          <Text font={"sans"} size="md" color={colors["retro-teal"]} inline>
            FundThatFlip,
          </Text>
        </a>

        <Text font={"sans"} size="md" color={colors["purple-lightest"]}>
          {
            `where we leverage technology to build lasting relationships through 
            extraordinary experiences, empowering investors to create wealth and 
            improve communities.`
          }
        </Text>

        <Text font={"sans"} size="md" color={colors["purple-lightest"]}>
          On the side, I enjoy exploring different technologies, building, breaking, and learning while having fun to better myself in the process.
        </Text>
      </div>
    </AnimContainer>
  )
}

const IntroSection: FC = () => (
  <section className="intro-section">
    <NamePrefixSub />
    <NameHeader />
    <NameSubHeader />
    <Subtext />
  </section>
)

export default IntroSection
