import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'

import Section from '@components/common/Section'
import MotionInner from '@components/common/MotionInner'

interface InfoProps {
  date: string
  locationName: string
  groomName: string
  brideName: string
}

const Info = ({ date, locationName, groomName, brideName }: InfoProps) => {
  const weddingDate = parseISO(date)

  return (
    <Section className="info">
      <MotionInner className="info__inner">
        <div className="info__container">
          <div className="info__name">
            <span>{groomName}</span>
            <Heart className="info__icon" />
            <span>{brideName}</span>
          </div>

          <div className="info__date">
            <span>
              {format(weddingDate, 'yyyy년 MM월 dd일 eeee a h시', {
                locale: ko,
              })}
            </span>
          </div>

          <div className="info__location">
            <span>{locationName}</span>
          </div>
        </div>
      </MotionInner>
    </Section>
  )
}

export default Info

const Heart = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      height="512px"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
        <g>
          <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" />
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  )
}
