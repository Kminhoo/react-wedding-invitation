import Section from '@components/common/Section'
import Text from '@components/common/Text'
import MotionInner from '@components/common/MotionInner'
import { Location } from 'models/wedding'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    kakao: any
  }
}

const Locations = ({ location }: { location: Location }) => {
  const ref = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false`
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        )

        const option = {
          center: position,
          level: 3,
        }

        const marker = new window.kakao.maps.Marker({
          position: position,
        })

        const map = new window.kakao.maps.Map(ref.current, option)
        map.setDraggable(false)
        marker.setMap(map)
      })
    }
  }, [location.lat, location.lng])

  return (
    <Section className="location">
      <MotionInner className="location__inner">
        <div className="location__title">
          <span className="location__title-main">LOCATION</span>
          <span className="location__title-sub">오시는 길</span>
        </div>

        <div className="location__address-box">
          <p className="location__name">{location.name}</p>
          <Text className="location__address">{location.address}</Text>
        </div>

        <div className="location__container">
          <div ref={ref} className="location__map"></div>
        </div>
      </MotionInner>
    </Section>
  )
}

export default Locations
