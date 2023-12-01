import { type FC } from "react"
import { AnimContainer, GlowText, Text } from "@kainn9/kain_ui_lib"
import colors from "@styles/variables.module.scss"
import "./introSection.scss"
import { socialUrls } from "@util/globals"

const style = {
  opacity: "0"
}

const NamePrefixSub: FC = () => {
  const text = "Yo! I'm known as"

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
        {text}
      </Text>
    </AnimContainer>
  </span>
  )
}

const NameHeader: FC = () => {
  const text = "Kainan Doneson"
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
        {text}
      </GlowText>
    </AnimContainer>
  </span>
  )
}

const NameSubHeader: FC = () => {
  const text = "And I like to write code."

  return (
  <span className="intro__name-sub-header">
    <AnimContainer
      delay={2350}
      anim={"revealFromTop"}
      freezeAtFinalFrame
      customStyle={style}
    >
      <Text font={"sans"} size="bingBong" color={colors["purple-lightest"]} headingLevel={1}>
        {text}
      </Text>
    </AnimContainer>
  </span>
  )
}

const Subtext: FC = () => {
  const paragraphOnePreLinkText = "I'm a software engineer who has previously worked with "
  const paragraphOneLinkText = "Upright, "
  const paragraphOnePostLinkText = "a real estate fintech company formerly known as FundThatFlip. During my time there, I contributed to software designed for building lasting relationships through extraordinary experiences, empowering investors to create wealth, and improving communities."

  const paragraphTwoText = "On the side, I've been exploring game development and 2D physics from scratch. Although my professional expertise lies in web development, I take pleasure in exploring different technologies, embracing the challenges of building and breaking things, all while enjoying the learning process to continually enhance my skills."

  return (
    <AnimContainer
      delay={2550}
      anim={"revealFromBottom"}
      freezeAtFinalFrame
      customStyle={style}
    >
      <div className="intro__section-sub-text">
        <Text font={"sans"} size="md" color={colors["purple-lightest"]} inline>
          {paragraphOnePreLinkText}
        </Text>

        <a id="intro__section-ftf-link" href={socialUrls.ftfLink}>
          <Text font={"sans"} size="md" color={colors["retro-teal"]} inline>
            {paragraphOneLinkText}
          </Text>
        </a>

        <Text font={"sans"} size="md" color={colors["purple-lightest"]} inline>
          {paragraphOnePostLinkText}
        </Text>

        <br />
        <br />

        <Text font={"sans"} size="md" color={colors["purple-lightest"]}>
          {paragraphTwoText}
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
