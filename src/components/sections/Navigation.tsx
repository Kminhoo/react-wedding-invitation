import NavigationLinkBtn, {
  NavigationLink,
} from '@components/NavigationLinkBtn'

import Section from '@components/common/Section'
import MotionInner from '@components/common/MotionInner'

const Navigation = ({ link }: { link: string[] }) => {
  const navigationLinks: NavigationLink[] = [
    {
      url: link[0],
      imgSrc: './assets/kakaomap.png',
      alt: 'kakaoMap',
      name: '카카오 맵',
    },
    { url: link[1], imgSrc: './assets/tmap.png', alt: 'tmap', name: 'T Map' },
    {
      url: link[2],
      imgSrc: './assets/navermap.png',
      alt: 'naverMap',
      name: '네이버 지도',
    },
  ]

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
          {navigationLinks.map((link, idx) => (
            <NavigationLinkBtn key={idx} link={link} />
          ))}
        </div>
      </MotionInner>
    </Section>
  )
}

export default Navigation
