import React, { useState } from 'react'
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '@firebaseApp'
import CommentForm from '@components/CommentForm'
import Section from '@components/common/Section'
import { Comment } from 'models/wedding'
import { useEffect } from 'react'
import DeleteModal from '@components/DeleteModal'

// const GuestBook = () => {
//   const [modal, setModal] = useState<boolean>(false)
//   const [password, setPassword] = useState<string>('')
//   const [selectedCommentIndex, setSelectedCommentIndex] = useState<
//     number | null
//   >(null)
//   const [comments, setComments] = useState<Comment[]>([])
//   const [error, setError] = useState()

//   useEffect(() => {
//     const docRef = doc(db, 'wedding', 'v3eNky8xXowBjARen4i5')

//     const unsubscribe = onSnapshot(docRef, (querySnapshot) => {
//       try {
//         const newComments: Comment[] = querySnapshot?.data()?.comments
//         setComments(newComments)
//       } catch (e: any) {
//         setError(e)
//       }
//     })

//     return () => unsubscribe()
//   }, [])

//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const {
//       target: { name, value },
//     } = e

//     if (name === 'inputPassword') {
//       setPassword(value)
//     }
//   }

//   const onDeleteClick = (index: number) => {
//     setSelectedCommentIndex(index)
//     setModal(true)
//   }

//   const onConfirmDelete = async () => {
//     if (selectedCommentIndex === null) return

//     const commentToDelete = comments[selectedCommentIndex]

//     try {
//       if (commentToDelete.password === password) {
//         const docRef = doc(db, 'wedding', 'v3eNky8xXowBjARen4i5')
//         await updateDoc(docRef, {
//           comments: arrayRemove(commentToDelete),
//         })
//         alert('댓글이 삭제되었습니다.')

//         setModal(false)
//         setPassword('')
//         setSelectedCommentIndex(null)
//       } else {
//         alert('비밀번호가 일치하지 않습니다.')
//         setModal(true)
//         setPassword('')
//       }
//     } catch (error) {
//       console.error('댓글 삭제 중 오류가 발생했습니다:', error)
//     }
//   }

//   if (comments.length === 0) {
//     return (
//       <div>
//         댓글이 없습니다. 첫번째 댓글을 작성해보세요!
//         <CommentForm />
//       </div>
//     )
//   }

//   if (error) {
//     return <div>댓글을 불러올 수 없습니다.</div>
//   }

//   return (
//     <Section className="guest__book">
//       <div className="guest__book__inner">
//         <div className="guest__book__title">
//           <span className="guest__book__title-main">GEUST BOOK</span>
//           <p className="guest__book__title-sub">방명록</p>
//         </div>
//         <div className="guest__book-box">
//           {comments?.map((cmt, index) => (
//             <div className="guest__book-comment" key={index}>
//               <div className="guest__book-comment-box">
//                 <div className="guest__book-comment-title">
//                   <span className="guest__book-comment-title-name">
//                     {cmt.name}
//                   </span>
//                   <span className="guest__book-comment-title-date">
//                     {cmt.createdAt}
//                   </span>
//                 </div>
//                 <DeleteComment
//                   onClick={() => onDeleteClick(index)}
//                   className="guest__book__icon"
//                 />
//               </div>
//               <p className="guest__book-comment-content">{cmt.comment}</p>
//             </div>
//           ))}
//         </div>
//         {modal && (
//           <DeleteModal
//             onChange={onChange}
//             password={password}
//             onClick={onConfirmDelete}
//             setModal={setModal}
//           />
//         )}
//         <div className="guest__book__input-box">
//           <CommentForm />
//         </div>
//       </div>
//     </Section>
//   )
// }

// export default GuestBook

const GuestBook = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [selectedCommentIndex, setSelectedCommentIndex] = useState<
    number | null
  >(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [error, setError] = useState()
  const [visibleComments, setVisibleComments] = useState<number>(3)

  useEffect(() => {
    const docRef = doc(db, 'wedding', 'v3eNky8xXowBjARen4i5')

    const unsubscribe = onSnapshot(docRef, (querySnapshot) => {
      try {
        const newComments: Comment[] = querySnapshot?.data()?.comments.reverse()
        setComments(newComments)
      } catch (e: any) {
        setError(e)
      }
    })

    return () => unsubscribe()
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e

    if (name === 'inputPassword') {
      setPassword(value)
    }
  }

  const onDeleteClick = (index: number) => {
    setSelectedCommentIndex(index)
    setModal(true)
  }

  const onConfirmDelete = async () => {
    if (selectedCommentIndex === null) return

    const commentToDelete = comments[selectedCommentIndex]

    try {
      if (commentToDelete.password === password) {
        const docRef = doc(db, 'wedding', 'v3eNky8xXowBjARen4i5')
        await updateDoc(docRef, {
          comments: arrayRemove(commentToDelete),
        })
        alert('댓글이 삭제되었습니다.')

        setModal(false)
        setPassword('')
        setSelectedCommentIndex(null)
      } else {
        alert('비밀번호가 일치하지 않습니다.')
        setModal(true)
        setPassword('')
      }
    } catch (error) {
      console.error('댓글 삭제 중 오류가 발생했습니다:', error)
    }
  }

  const handleLoadMore = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + 3)
  }

  if (error) {
    return <div>댓글을 불러올 수 없습니다.</div>
  }

  return (
    <Section className="guest__book">
      <div className="guest__book__inner">
        <div className="guest__book__title">
          <span className="guest__book__title-main">GEUST BOOK</span>
          <p className="guest__book__title-sub">방명록</p>
        </div>
        <div className="guest__book-box">
          {comments?.length === 0 ? (
            <>
              <p className="guest__book-no-comment">
                첫번 째 축하 댓글을 남겨보세요!
              </p>
            </>
          ) : (
            <>
              {comments.slice(0, visibleComments).map((cmt, index) => (
                <div className="guest__book-comment" key={index}>
                  <div className="guest__book-comment-box">
                    <div className="guest__book-comment-title">
                      <span className="guest__book-comment-title-name">
                        {cmt.name}
                      </span>
                      <span className="guest__book-comment-title-date">
                        {cmt.createdAt}
                      </span>
                    </div>
                    <DeleteComment
                      onClick={() => onDeleteClick(index)}
                      className="guest__book__icon"
                    />
                  </div>
                  <p className="guest__book-comment-content">{cmt.comment}</p>
                </div>
              ))}
            </>
          )}
        </div>
        {comments.length > visibleComments && (
          <button onClick={handleLoadMore}>더보기</button>
        )}
        {modal && (
          <DeleteModal
            onChange={onChange}
            password={password}
            onClick={onConfirmDelete}
            setModal={setModal}
          />
        )}
        <div className="guest__book__input-box">
          <CommentForm />
        </div>
      </div>
    </Section>
  )
}

export default GuestBook

const DeleteComment = ({
  className,
  onClick,
}: {
  className: string
  onClick: () => void
}) => {
  return (
    <svg onClick={onClick} className={className} viewBox="0 0 448 512">
      <path d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z" />
    </svg>
  )
}
