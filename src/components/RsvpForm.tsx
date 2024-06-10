import React, { useState } from 'react'

const RsvpForm = () => {
  const [person, setPerson] = useState<string>('')
  const [rsvp, setRsvp] = useState<boolean>(false)

  const handleCheckPerson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e

    setPerson(value)
  }

  const handleCheckRsvp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { id, checked },
    } = e

    if (id === 'rsvpTrue' && checked) {
      setRsvp(true)
    }

    if (id === 'rsvpFalse' && checked) {
      setRsvp(false)
    }

    console.log(id, checked)
  }

  return (
    <div className="rsvp__form-dimmed">
      <div className="rsvp-from">
        <form>
          <div>
            <div>
              <label htmlFor="groom">신랑측</label>
              <input
                onChange={handleCheckPerson}
                id="groom"
                name="check"
                type="radio"
                value="groom"
              />
            </div>
            <div>
              <label htmlFor="bride">신부측</label>
              <input
                onChange={handleCheckPerson}
                id="bride"
                name="check"
                type="radio"
                value="bride"
              />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="rsvp">참석가능</label>
              <input
                onChange={handleCheckRsvp}
                name="account"
                id="rsvpTrue"
                type="radio"
              />
            </div>
            <div>
              <label htmlFor="rsvp">참석 불가능</label>
              <input
                onChange={handleCheckRsvp}
                name="account"
                id="rsvpFalse"
                type="radio"
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact">연락처</label>
            <input type="text" id="contact" required />
          </div>
          <div>
            <label htmlFor="count">참여 인원</label>
            <input type="text" id="count" required />
          </div>
          <div>
            <input type="checkbox" id="privacyAgreement" required />
            <label htmlFor="privacyAgreement">
              <span>
                개인 정보 활용에 동의하시는거 맞죠? 여기에 개인정보를 어디에
                활용하는지 사용내역에 대해 글을 작성하세요.
              </span>
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RsvpForm
