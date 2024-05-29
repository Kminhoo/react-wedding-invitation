import { parseISO, format, getDay } from 'date-fns'

interface HeaderProps {
  date: string
  groomName: string
  brideName: string
}

const DAYS = [
  'Sunday',
  'Monday',
  'Tuseday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const Header = ({ date, groomName, brideName }: HeaderProps) => {
  const weddingDate = parseISO(date)

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__date-box">
          <span className="header__date">
            {format(weddingDate, 'yy. MM. dd')}
          </span>
          <span className="header__day">{DAYS[getDay(weddingDate)]}</span>
        </div>

        <div className="header__name-box">
          <span>신랑</span>
          <span className="header__groom-name">{groomName}</span>
          <span>신부</span>
          <span className="header__bride-name">{brideName}</span>
        </div>
      </div>
    </header>
  )
}

export default Header
