import { type FC } from "react"
import { SimpleNav, Link, AnimContainer, IconLink, useWindowDimensions } from "@kainn9/kain_ui_lib"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faLaptopCode, faHamburger, faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import scssVars from "@styles/variables.module.scss"
import { animDelay, navBarHeight, socialUrls } from "@util/globals"
import { scrollCallback } from "../../App"
import "./nav.scss"

const links = [
  <AnimContainer
    key={0}
    anim={"revealFromLeft"}
    delay={animDelay[1]}
    freezeAtFinalFrame
    customStyle={{
      opacity: "0"
    }}
  >
    <IconLink
      faIcon={faGithub}
      size={"xl"}
      color={scssVars["retro-teal"]}
      hoverColor={scssVars["purple-lightest"]}
      onClick={() => { window.location.href = socialUrls.githubProfileURL } }
    />
  </AnimContainer>,

  <AnimContainer
    className="s-nav__linkedin-nav-icon-container"
    key={1}
    anim={"revealFromLeft"}
    delay={animDelay[1]}
    freezeAtFinalFrame
    customStyle={{
      opacity: "0"
    }}
  >
    <IconLink
      faIcon={faLinkedin}
      size={"xl"}
      color={scssVars["retro-teal"]}
      hoverColor={scssVars["purple-lightest"]}
      onClick={() => { window.location.href = socialUrls.linkedInUrl } }
    />
  </AnimContainer>,

  <AnimContainer
    key={2}
    anim={"revealFromLeft"}
    delay={animDelay[3]}
    freezeAtFinalFrame
    customStyle={{
      opacity: "0"
    }}
  >
    <Link
      content="Resume"
      childrenBeforeContent
      font="mono"
      onClick={() => { window.location.href = "/kainan_resume.pdf" }}
      color={scssVars["purple-lightest"]}
      customStyles={{
        letterSpacing: "0.08rem"
      }}
      hoverStyles={{
        color: scssVars["retro-teal"]
      }}
    >
      <FontAwesomeIcon icon={faFile} color={scssVars["retro-teal"]} />
    </Link>
  </AnimContainer>,

  <AnimContainer
    key={3}
    anim={"revealFromLeft"}
    delay={animDelay[3]}
    freezeAtFinalFrame
    customStyle={{
      opacity: "0"
    }}
  >
    <Link
      content="Contact"
      childrenBeforeContent
      font="mono"
      onClick={() => { scrollCallback("#contact") }}
      color={scssVars["purple-lightest"]}
      customStyles={{
        letterSpacing: "0.08rem"
      }}
      hoverStyles={{
        color: scssVars["retro-teal"]
      }}
    >
      <FontAwesomeIcon icon={faEnvelope} color={scssVars["retro-teal"]} />
    </Link>
  </AnimContainer>,

  <AnimContainer
      key={4}
      anim={"revealFromLeft"}
      delay={animDelay[2]}
      freezeAtFinalFrame
      customStyle={{
        opacity: "0"
      }}
  >
    <Link
      content="Side Projects"
      childrenBeforeContent
      font="mono"
      onClick={() => { scrollCallback("#projectsZone") }}
      color={scssVars["purple-lightest"]}
      customStyles={{
        letterSpacing: "0.08rem"
      }}
      hoverStyles={{
        color: scssVars["retro-teal"]
      }}
    >
      <FontAwesomeIcon icon={faLaptopCode} color={scssVars["retro-teal"]} />
    </Link>
  </AnimContainer>,

  <AnimContainer
    key={5}
    anim={"revealFromLeft"}
    delay={animDelay[1]}
    freezeAtFinalFrame
    customStyle={{
      opacity: "0"
    }}
  >
    <Link
      content="About Me"
      childrenBeforeContent
      font="mono"
      onClick={() => { scrollCallback("#whoami") }}
      color={scssVars["purple-lightest"]}
      customStyles={{
        letterSpacing: "0.08rem"
      }}
      hoverStyles={{
        color: scssVars["retro-teal"]
      }}
    >
      <FontAwesomeIcon icon={faUser} color={scssVars["retro-teal"]} />
    </Link>
  </AnimContainer>

]

const Nav: FC = () => {
  const { width } = useWindowDimensions()
  const gap = 30
  return (
    <SimpleNav
      bgColor={scssVars["purple-darker"]}
      links={links}
      gap={gap}
      direction={"row"}
      height={navBarHeight}
      alignment={"center"}
      justify={"right"}
      reverse
      offsetRight={width < parseInt(scssVars["breakpoint-tablet"]) ? gap : 0}
      mobileSettings={{
        iconLink: <IconLink faIcon={faHamburger} color={scssVars["purple-lightest"]} size={"sm"} hoverColor={scssVars["retro-teal"]} onClick={() => {}} />,
        justify: "right",
        translationOffsetY: -navBarHeight,
        translationOffsetX: -gap,
        translationStart: 1000
      }}
    />
  )
}

export { Nav }
