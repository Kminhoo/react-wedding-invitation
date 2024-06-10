import React, { SetStateAction, useState } from 'react'

const RsvpForm = ({
  setResponse,
}: {
  setResponse: (value: SetStateAction<boolean>) => void
}) => {
  const [person, setPerson] = useState<string>('')
  const [attend, setAttend] = useState<boolean | null>(null)
  const [name, setName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [count, setCount] = useState<string>('')

  const handleCheckPerson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e

    setPerson(value)
    console.log('value : ', value)
  }

  const handleCheckAttend = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { id, checked },
    } = e

    if (id === 'attendTrue' && checked) {
      setAttend(true)
    }

    if (id === 'attendFalse' && checked) {
      setAttend(false)
    }

    console.log(id, checked)
  }

  const handleCheckName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e
    if (name === 'name') {
      setName(value)
    }
  }

  const handleCheckPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e
    if (name === 'contact') {
      setPhoneNumber(value)
    }
  }

  const handleCheckCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e
    if (name === 'contact') {
      setCount(value)
    }
  }

  return (
    <div className="rsvp-form__container">
      <div className="rsvp-form__box">
        <form className="rsvp-form">
          <div className="rsvp-form__title">
            <h4>참석여부 전달하기</h4>
            <CloseIcon
              onClick={() => setResponse(false)}
              className="rsvp-form__close-icon"
            />
          </div>

          <div className="rsvp-form__attend-check">
            <div className={`${attend && 'checked'} rsvp-form__attend-true`}>
              <label htmlFor="attendTrue">
                {attend && <Check className="rsvp-form__check-icon" />}
                <span>참석 가능</span>
              </label>
              <input
                onChange={handleCheckAttend}
                type="radio"
                id="attendTrue"
                name="attend"
              />
            </div>

            <div
              className={`${attend === false && 'checked'} rsvp-form__attend-false`}
            >
              <label htmlFor="attendFalse">
                {attend === false && (
                  <Check className="rsvp-form__check-icon" />
                )}
                <span>참석 불가능</span>
              </label>
              <input
                onChange={handleCheckAttend}
                type="radio"
                id="attendFalse"
                name="attend"
              />
            </div>
          </div>

          <div className="rsvp-form__person">
            <div
              className={`${person === 'groom' && 'checked'} rsvp-form__groom`}
            >
              <label htmlFor="groom">
                {person === 'groom' && (
                  <Check
                    className={`${person === 'groom' && 'checked'} rsvp-form__check-icon`}
                  />
                )}
                <span>신랑측</span>
              </label>
              <input
                onChange={handleCheckPerson}
                id="groom"
                name="check"
                type="radio"
                value="groom"
              />
            </div>
            <div
              className={`${person === 'bride' && 'checked'} rsvp-form__bride`}
            >
              <label htmlFor="bride">
                {person === 'bride' && (
                  <Check
                    className={`${person === 'bride' && 'checked'} rsvp-form__check-icon`}
                  />
                )}
                <span>신부측</span>
              </label>
              <input
                onChange={handleCheckPerson}
                id="bride"
                name="check"
                type="radio"
                value="bride"
              />
            </div>
          </div>

          <div className="rsvp-form__name">
            <label htmlFor="name">이름 :</label>
            <input
              placeholder="(필수) 대표자 성명"
              type="text"
              id="name"
              name="name"
              required
              onChange={handleCheckName}
            />
          </div>

          <div className="rsvp-form__contact">
            <label htmlFor="contact">연락처 :</label>
            <input
              placeholder="(필수) 대표자 연락처"
              type="text"
              name="contact"
              id="contact"
              onChange={handleCheckPhone}
              required
            />
          </div>

          {attend && (
            <div className="rsvp-form__attend-count">
              <label htmlFor="count">총인원 :</label>
              <input
                placeholder="총 인원수를 입력하세요."
                type="text"
                name="count"
                id="count"
                required
                onChange={handleCheckCount}
              />
            </div>
          )}

          <div className="rsvp-form__privacy">
            <div className="rsvp-form__privacy-check-box">
              <input type="checkbox" id="privacyAgreement" required />
              <label htmlFor="privacyAgreement">
                <p>개인정보 수집 및 이용 동의(필수) </p>
              </label>
            </div>
            <p className="rsvp-form__privacy-content">
              참석여부 전달을 위한 개인정보 수집 및 이용에 동의해주세요.
              <br /> 항목: 성함,연락처,동행인 성함 · 보유기간: 청첩장 이용
              종료시 까지
            </p>
          </div>

          <div className="rsvp-form__submit-btn">
            <button>
              <Check className="rsvp-form__check-icon" />
              <span>참석여부 전달</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RsvpForm

const CloseIcon = ({
  className,
  onClick,
}: {
  className: string
  onClick: () => void
}) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      version="1.1"
      viewBox="0 0 24 24"
    >
      <g id="info" />
      <g id="icons">
        <path
          d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z"
          id="exit"
        />
      </g>
    </svg>
  )
}

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
