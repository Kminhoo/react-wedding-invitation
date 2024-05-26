import { useEffect, useState } from 'react'

import { doc, getDoc } from 'firebase/firestore'
import { db } from 'firebaseApp'

import Bgm from 'components/Bgm'

const App = () => {
  const [loading, setLoading] = useState<Boolean>(false)

  const [error, setError] = useState()

  const [wedding, setWedding] = useState<any>()

  const getWeddingData = async () => {
    try {
      setLoading(true)

      const docRef = doc(db, 'wedding', 'v3eNky8xXowBjARen4i5')
      const docSnap = await getDoc(docRef)

      setWedding(docSnap.data())
      setLoading(false)
    } catch (error: any) {
      setError(error)
    }
  }

  useEffect(() => {
    getWeddingData()
  }, [])

  if (loading) {
    return <div>로딩중</div>
  }

  if (error) {
    return <div>에러발생!</div>
  }

  return (
    <div className="App">
      <Bgm />
      {JSON.stringify(wedding)}
    </div>
  )
}

export default App
