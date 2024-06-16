import Timer from '@components/Timer'
import Section from '@components/common/Section'
import MotionInner from '@components/common/MotionInner'

import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'

import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

const Calendar = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date)

  return (
    <Section className="calendar">
      <MotionInner className="calendar__inner">
        <div className="calendar__date">
          <span className="calendar__day">
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className="calendar__item">
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
        <div className="calendar__container">
          <DayPicker
            disabled
            locale={ko}
            month={weddingDate}
            selected={weddingDate}
            formatters={{ formatCaption: () => '' }}
          />
        </div>
        <div className="calendar__D-day">
          <Timer date={date} />
        </div>
      </MotionInner>
    </Section>
  )
}

export default Calendar
