import Wave from '@components/Wave'
import Section from '@components/common/Section'

const Hero = () => {
  return (
    <Section className="hero">
      <div className="hero__inner">
        <Wave className="wave__top" />
        <img src="./assets/main.jpg" alt="main wedding " />
        <Wave className="wave__bottom" />
      </div>
    </Section>
  )
}

export default Hero
