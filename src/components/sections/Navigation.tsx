import Section from '@components/common/Section'

const Navigation = ({ link }: { link: string[] }) => {
  return (
    <Section className="navigation">
      <div className="navigation__inner">
        <div className="navigation__title">
          <span className="navigation__title-main">길찾기</span>
          <p className="navigation__title-sub">
            원하시는 길찾기 버튼을 클릭하시면 길안내를 받으실 수 있습니다.
          </p>
        </div>
        <div className="navigation__container">
          <a href={link[1]}>
            <img src="./assets/kakaomap.png" alt="kakaoMap" />
            <span>카카오 길찾기</span>
          </a>
          <a href={link[0]}>
            <img src="./assets/navermap.png" alt="naverMap" />
            <span>네이버 길찾기</span>
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Navigation
