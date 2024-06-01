import Wave from '@components/Wave'
import Section from '@components/common/Section'

const Hero = () => {
  return (
    <Section className="hero">
      <div className="hero__inner">
        <img src="./assets/main.jpg" alt="main wedding " />
        <Wave />
      </div>
    </Section>
  )
}

export default Hero
