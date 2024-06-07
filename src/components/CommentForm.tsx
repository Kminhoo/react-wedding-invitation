import React, { useState } from 'react'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from '@firebaseApp'

const CommentForm = () => {
  const [comment, setComment] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [password, setPassWord] = useState<string>('')

  const onSubmit = async (e: any) => {
    e.preventDefault()

    if (comment) {
      try {
        const docRef = doc(db, 'wedding', 'v3eNky8xXowBjARen4i5')

        const commentObj = {
          comment,
          password,
          name,
          createdAt: new Date().toLocaleDateString('ko', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }),
        }

        await updateDoc(docRef, {
          comments: arrayUnion(commentObj),
        })

        setName('')
        setPassWord('')
        setComment('')
      } catch (error) {
        console.log(error)
      }
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = e

    if (name === 'comment') {
      setComment(value)
    }
  }

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e

    if (name === 'name') {
      setName(value)
    }
  }

  const onChangePassWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e

    if (name === 'password') {
      setPassWord(value)
    }
  }

  return (
    <form className="comment__form" onSubmit={onSubmit}>
      <div className="comment__info">
        <input
          id="name"
          name="name"
          onChange={onChangeName}
          value={name}
          required
          placeholder="이름을 입력해 주세요"
        />
        <input
          onChange={onChangePassWord}
          type="password"
          name="password"
          value={password}
          required
        />
      </div>
      <textarea
        className="comment__form-area"
        id="comment"
        name="comment"
        placeholder="축하의 한마디를 남겨주세요!"
        onChange={onChange}
        value={comment}
      />
      <div className="comment__form-submit">
        <button
          disabled={!comment}
          className="comment__form-submit-btn"
          type="submit"
        >
          작성하기
        </button>
      </div>
    </form>
  )
}

export default CommentForm
