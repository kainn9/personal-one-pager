import { type FC } from "react"
import { GlowText, SectionWithScrollEffect, Text } from "@kainn9/kain_ui_lib"
import { email, sectionThreshHold } from "@util/globals"
import scssVars from "@styles/variables.module.scss"
import "./contactSection.scss"

const ContactSection: FC = () => {
  const mainText = `
    Even though I'm not actively seeking new opportunities, feel free to 
    drop me a message anytime. I'm open to questions and greetings and will 
    make an effort to respond promptly.
  `
  return (
    <SectionWithScrollEffect className="contact-section" iObserverOpts={{ threshold: sectionThreshHold }}>
      <>
        <div id="contact">
          <GlowText
            font={"sans"}
            size="xl"
            color={scssVars["white-pink"]}
            glowColor={scssVars.pink}
            headingLevel={2}
          >
            Contact Me
          </GlowText>
        </div>

        <Text
          font={"sans"}
          color={scssVars["purple-lightest"]}
          size="md"
        >
          {mainText}
        </Text>

        <a
          id="contact-section__reach-out-btn"
          href={`mailto:${email}`}>
          Reach Out
        </a>
    </>
    </SectionWithScrollEffect>
  )
}

export default ContactSection
