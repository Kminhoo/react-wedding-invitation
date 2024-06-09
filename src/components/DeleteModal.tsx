import React, { SetStateAction } from 'react'

interface DeleteModalProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  password: string
  onClick: () => void
  setModal: (value: SetStateAction<boolean>) => void
}

const DeleteModal = ({
  onChange,
  password,
  onClick,
  setModal,
}: DeleteModalProps) => {
  return (
    <div className="delete">
      <div className="delete__container">
        <p className="delete__container-desc">
          방명록을 삭제하려면 비밀번호를 입력하세요.
        </p>
        <input
          onChange={onChange}
          name="inputPassword"
          value={password}
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <div className="delete__container-btns">
          <button className="delete__container-btn" onClick={onClick}>
            삭제
          </button>
          <button
            onClick={() => setModal(false)}
            className="delete__container-btn"
          >
            나가기
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
