import { useEffect, useState } from 'react'

import {
  parseISO,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns'

const Timer = ({ date }: { date: string }) => {
  const [today, setToday] = useState(new Date())

  const weddingDate = parseISO(date)

  const daysLeft = differenceInDays(weddingDate, today)
  const hoursLeft = differenceInHours(weddingDate, today) - daysLeft * 24
  const minutesLeft =
    differenceInMinutes(weddingDate, today) -
    daysLeft * 24 * 60 -
    hoursLeft * 60

  const secondsLeft =
    differenceInSeconds(weddingDate, today) -
    daysLeft * 24 * 60 * 60 -
    hoursLeft * 60 * 60 -
    minutesLeft * 60

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <div className="timer">
        <div className="timer__item">
          <span>DAYS</span>
          <span>{daysLeft}</span>
        </div>
        <div className="timer__item">
          <span>&nbsp;</span>
          <span>:</span>
        </div>
        <div className="timer__item">
          <span>HOUR</span>
          <span>{hoursLeft}</span>
        </div>
        <div className="timer__item">
          <span>&nbsp;</span>
          <span>:</span>
        </div>
        <div className="timer__item">
          <span>MIN</span>
          <span>{minutesLeft}</span>
        </div>
        <div className="timer__item">
          <span>&nbsp;</span>
          <span>:</span>
        </div>
        <div className="timer__item">
          <span>SEC</span>
          <span>{secondsLeft}</span>
        </div>
      </div>
      <p className="timer__message">
        경호와 해영이의 결혼식 까지{' '}
        <span className="timer__day">{daysLeft}</span>
        &nbsp;일 남았습니다.
      </p>
    </>
  )
}

export default Timer
