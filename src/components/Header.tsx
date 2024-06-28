import { parseISO, format, getDay } from 'date-fns'

import MotionInner from '@components/common/MotionInner'

interface HeaderProps {
  date: string
  groomName: string
  brideName: string
}

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const Header = ({ date, groomName, brideName }: HeaderProps) => {
  const weddingDate = parseISO(date)
  const daysIdx = getDay(weddingDate)
  const weddingDay = DAYS[daysIdx]
  const formattedDate = format(weddingDate, 'yy. MM. dd')

  return (
    <header className="header">
      <MotionInner className="header__inner">
        <div className="header__date-box">
          <span className="header__date">{formattedDate}</span>
          <span className="header__day">{weddingDay}</span>
        </div>

        <div className="header__name-box">
          <span className="header__name-title">신랑</span>
          <span className="header__groom-name">{groomName}</span>
          <span className="header__name-title bride">신부</span>
          <span className="header__bride-name">{brideName}</span>
        </div>
      </MotionInner>
    </header>
  )
}

export default Header
