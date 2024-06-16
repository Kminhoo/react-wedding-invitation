import Wave from '@components/Wave'
import Section from '@components/common/Section'
import MotionInner from '@components/common/MotionInner'

const Hero = () => {
  return (
    <Section className="hero">
      <MotionInner className="hero__inner">
        <Wave className="wave__top" />
        <img src="./assets/main.jpg" alt="main wedding " />
        <Wave className="wave__bottom" />
      </MotionInner>
    </Section>
  )
}

export default Hero
