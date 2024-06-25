import Section from '@components/common/Section'
import MotionInner from '@components/common/MotionInner'

const Navigation = ({ link }: { link: string[] }) => {
  return (
    <Section className="navigation">
      <MotionInner className="navigation__inner">
        <div className="navigation__title">
          <span className="navigation__title-main">길찾기</span>
          <p className="navigation__title-sub">
            원하시는 길찾기 버튼을 클릭하시면 길안내를 받으실 수 있습니다.
          </p>
        </div>
        <div className="navigation__container">
          <a href={link[1]}>
            <img src="./assets/kakaomap.png" alt="kakaoMap" />
            <span>카카오 맵</span>
          </a>

          <a href={link[2]}>
            <img src="./assets/tmap.png" alt="tmap" />
            <span>T Map</span>
          </a>

          <a href={link[0]}>
            <img src="./assets/navermap.png" alt="naverMap" />
            <span>네이버 지도</span>
          </a>
        </div>
      </MotionInner>
    </Section>
  )
}

export default Navigation
