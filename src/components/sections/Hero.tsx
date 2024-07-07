import Section from '@components/common/Section'
import MotionInner from '@components/common/MotionInner'
import generateImgUrl from '@utils/generateImgUrl'

const Hero = () => {
  return (
    <Section className="hero">
      <MotionInner className="hero__inner">
        <div className="hero__images">
          <picture>
            <source
              srcSet={generateImgUrl({
                fileName: 'weddingHero',
                type: 'webp',
                option: 'w_640',
              })}
            />
            <img
              className="hero__images-main"
              src={generateImgUrl({
                fileName: 'weddingHero',
                type: 'jpg',
                option: 'w_640',
              })}
              alt="main Wedding"
            />
          </picture>
          <picture>
            <source
              srcSet={generateImgUrl({
                fileName: 'weddingText',
                type: 'webp',
                option: 'w_500',
              })}
              type="image/webp"
            />
            <img
              className="hero__images-sub"
              src={generateImgUrl({
                fileName: 'weddingText',
                type: 'jpg',
                option: 'w_500',
              })}
              alt="wedding text"
            />
          </picture>
        </div>
        <div className="hero__text-image">
          <picture>
            <source
              srcSet={generateImgUrl({
                fileName: 'weddingText1',
                type: 'webp',
                option: 'w_800',
              })}
              type="image/webp"
            />
            <img
              src={generateImgUrl({
                fileName: 'weddingText1',
                type: 'jpg',
                option: 'w_800',
              })}
              alt="wedding text1"
            />
          </picture>
        </div>
      </MotionInner>
    </Section>
  )
}

export default Hero
