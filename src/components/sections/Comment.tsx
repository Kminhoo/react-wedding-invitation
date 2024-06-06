// import CommentForm from '@components/CommentForm'
// import Section from '@components/common/Section'
// import { Comment } from 'models/wedding'
// import { useEffect } from 'react'

// const Comments = ({ comments }: { comments: Comment[] }) => {
//   useEffect(() => {}, [])

//   const onClick = () => {
//     window.confirm('정말 댓글을 삭제 할 까요?')
//   }

//   console.log(comments)

//   return (
//     <Section className="comment">
//       <div className="comment__inner">
//         <div className="comment__title">
//           <span>GEUST BOOK</span>
//           <p>방명록</p>
//         </div>
//         <div className="comment__box">
//           {comments.map((cmt, index) => (
//             <div key={index}>
//               <span>{cmt.name}</span>
//               <span>{cmt.createdAt}</span>
//               <p>{cmt.comment}</p>
//               <DeleteComment onClick={onClick} />
//             </div>
//           ))}
//         </div>
//         <div className="comment__input-box">
//           <CommentForm />
//         </div>
//       </div>
//     </Section>
//   )
// }

// export default Comments

// const DeleteComment = ({ onClick }: { onClick: () => void }) => {
//   return (
//     <svg onClick={onClick} viewBox="0 0 448 512">
//       <path d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z" />
//     </svg>
//   )
// }

import React, { useState } from 'react'
import { arrayRemove, doc, updateDoc } from 'firebase/firestore'
import { db } from '@firebaseApp'
import CommentForm from '@components/CommentForm'
import Section from '@components/common/Section'
import { Comment } from 'models/wedding'
import { useEffect } from 'react'

const Comments = ({ comments }: { comments: Comment[] }) => {
  useEffect(() => {}, [])

  const onDelete = async (index: number, password: string) => {
    const commentToDelete = comments[index]

    if (commentToDelete.password === password) {
      const docRef = doc(db, 'wedding', 'v3eNky8xXowBjARen4i5')

      try {
        await updateDoc(docRef, {
          comments: arrayRemove(commentToDelete),
        })
        alert('댓글이 삭제되었습니다.')
      } catch (error) {
        console.error('댓글 삭제 중 오류가 발생했습니다:', error)
      }
    } else {
      alert('비밀번호가 일치하지 않습니다.')
    }
  }

  return (
    <Section className="comment">
      <div className="comment__inner">
        <div className="comment__title">
          <span>GEUST BOOK</span>
          <p>방명록</p>
        </div>
        <div className="comment__box">
          {comments.map((cmt, index) => (
            <div key={index}>
              <span>{cmt.name}</span>
              <span>{cmt.createdAt}</span>
              <p>{cmt.comment}</p>
              <DeleteComment index={index} onDelete={onDelete} />
            </div>
          ))}
        </div>
        <div className="comment__input-box">
          <CommentForm />
        </div>
      </div>
    </Section>
  )
}

export default Comments

const DeleteComment = ({
  index,
  onDelete,
}: {
  index: number
  onDelete: (index: number, password: string) => void
}) => {
  const [password, setPassword] = useState<string>('')

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleDeleteClick = () => {
    onDelete(index, password)
  }

  return (
    <div>
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={handlePasswordChange}
      />
      <svg onClick={handleDeleteClick} viewBox="0 0 448 512">
        <path d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z" />
      </svg>
    </div>
  )
}
