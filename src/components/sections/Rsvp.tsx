import RsvpForm from '@components/RsvpForm'
import Section from '@components/common/Section'
import React, { useState } from 'react'

const Rsvp = () => {
  const [response, setResponse] = useState<boolean>(false)

  return (
    <Section className="rsvp">
      <div className="rsvp__inner">
        <div className="rsvp__title">
          <h3>R.S.V.P</h3>
          <p>참석여부를 알려주세요.</p>
        </div>
        <div className="rsvp__desc">
          <p>
            신랑. 신부에게 참석여부를
            <br /> 미리 알려주시면 감사하겠습니다.
          </p>
        </div>
        <div className="rsvp__btn-box">
          <button
            className="rsvp__btn"
            onClick={() => {
              setResponse(true)
            }}
          >
            <Check className="rsvp__icon" />
            <span>참석 여부 전달하기</span>
          </button>
        </div>
        {response && <RsvpForm />}
      </div>
    </Section>
  )
}

export default Rsvp

const Check = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z" />
    </svg>
  )
}
