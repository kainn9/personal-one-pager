import { type FC } from "react"
import {
  GlowText,
  TwoPanelContentZone,
  SimpleCard,
  ImageLink,
  AnimContainer,
  useWindowDimensions,
  SectionWithScrollEffect
} from "@kainn9/kain_ui_lib"

import scssVars from "@styles/variables.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { TealSansMd, PurpleLightSansMd } from "@components/text/Text"
import { sectionThreshHold, socialUrls } from "@util/globals"

import meImg from "../../../../localAssets/photos/kainan.jpg"
import "./aboutSection.scss"

const SectionHeader: FC = () => {
  return (
    <div className="about-section__section-header" id="whoami">
      <FontAwesomeIcon icon={faUser} color={scssVars["retro-teal"]} size="xl" />
      <GlowText
        font={"sans"}
        size="xl"
        color={scssVars["white-pink"]}
        glowColor={scssVars.pink}
        headingLevel={2}
      >
        Who Am I?
      </GlowText>
    </div>
  )
}

const SectionCardOne: FC<{ height: number }> = ({ height }) => {
  return (
    <ImageLink
      className="about-section__img-link"
      fit={"cover"}
      height={height}
      src={meImg}
      href={socialUrls.linkedInUrl}
      icon={
        <>
          <FontAwesomeIcon icon={faLinkedin} color={scssVars["retro-teal"]} />
        </>
      }
    />
  )
}

const AboutText: FC = () => {
  return (
    <>
      <PurpleLightSansMd>{"My name is Kainan Doneson, and I credit my passion for programming to two childhood interests: Lego Bionicles and World of Warcraft. Bionicles ignited my interest in building, while WoW showed me the boundless potential of software design. Although I didn't pursue game development, my early forays likely laid the foundation for my career in web development."}</PurpleLightSansMd>
      <br /> <br />
      <PurpleLightSansMd>{"For work, I use "}</PurpleLightSansMd>
      <TealSansMd>{"TypeScript "}</TealSansMd>
      <PurpleLightSansMd>{"(for client and server-side programming) and "}</PurpleLightSansMd>
      <TealSansMd>{"Ruby "}</TealSansMd>
      <PurpleLightSansMd>{"in the context of the "}</PurpleLightSansMd>
      <TealSansMd>{"Rails "}</TealSansMd>
      <PurpleLightSansMd>{"framework. I also have varied experience working with technologies like "}</PurpleLightSansMd>
      <TealSansMd>{"React, NextJS, Stimulus, AWS, Heroku, Terraform, CI/CD workflows via GitHub Actions, etc. "}</TealSansMd>
      <br /><br />
      <PurpleLightSansMd>{"As a hobbyist, I've been experimenting with "}</PurpleLightSansMd>
      <TealSansMd>{"Golang, GRPC, " }</TealSansMd>
      <PurpleLightSansMd>{"and "}</PurpleLightSansMd>
      <TealSansMd>{"Protobuf "}</TealSansMd>
      <PurpleLightSansMd>{"to expand my skills. It is fulfilling to experiment with technologies beyond what I use in my professional work, as it helps me broaden my knowledge and skills."}</PurpleLightSansMd>
    </>
  )
}
const SectionCardTwo: FC<{ padding: number }> = ({ padding }) => {
  return (
    <SimpleCard
    className="about-section__card"
     color={scssVars["purple-darker"]}
     padding={padding}
     hFit
    >
      <AboutText />
    </SimpleCard>
  )
}

const SectionContent: FC = () => {
  const { width } = useWindowDimensions()
  const cardTwoPadding = 45
  const sectionOneCardHeight = 450
  const zoneOneWidth = 600
  const zoneTwoWidth = 500
  const inc = 140

  const layoutShift = width <= parseInt(scssVars["breakpoint-tablet"])
  return (
    <div className="about-section__section-content">
      <TwoPanelContentZone
        zoneOneHeight={layoutShift ? 200 : sectionOneCardHeight}
        zoneOneWidth={zoneOneWidth}
        zoneOneContent={<SectionCardOne height={layoutShift ? 200 : sectionOneCardHeight} />}
        zoneTwoWidth={zoneTwoWidth}
        zoneTwoOffsetX={400}
        zoneTwoOffsetY={layoutShift ? -20 : 170}
        zoneTwoContent={<SectionCardTwo padding={layoutShift ? 20 : cardTwoPadding} />}

        previewBorders={false}
        increment={layoutShift ? 60 : inc}
      />
    </div>
  )
}

const AboutSection: FC = () => {
  return (
    <SectionWithScrollEffect className="about-section"iObserverOpts={{ threshold: sectionThreshHold }}>
      <>
        <SectionHeader />
        <AnimContainer
          key={2}
          delay={700}
          anim={"revealFromLeft"}
          freezeAtFinalFrame
          customStyle={{
            opacity: "0"
          }}
        >
        <SectionContent />
      </AnimContainer>
     </>
    </SectionWithScrollEffect>
  )
}

export default AboutSection
