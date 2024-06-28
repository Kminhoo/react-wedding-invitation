import Section from '@components/common/Section'
import MotionInner from '@components/common/MotionInner'

const Hero = () => {
  return (
    <Section className="hero">
      <MotionInner className="hero__inner">
        <div className="hero__images">
          <img
            className="hero__images-main"
            src="./assets/images/wedding_06.png"
            alt="main Wedding"
          />
          <img
            className="hero__images-sub"
            src="./assets/weddingtext.png"
            alt="wedding text"
          />
        </div>
        <div className="hero__text-image">
          <img src="./assets/weddingtext2.png" alt="wedding text2" />
        </div>
      </MotionInner>
    </Section>
  )
}

export default Hero
