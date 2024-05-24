import React, { useEffect, useState } from 'react'

import { doc, getDoc } from 'firebase/firestore'
import { db } from 'firebaseApp'

const App = () => {
  const [wedding, setWedding] = useState<any>()

  const getWeddingData = async () => {
    const docRef = doc(db, 'wedding', 'v3eNky8xXowBjARen4i5')
    const docSnap = await getDoc(docRef)

    console.log(docSnap.data())
    setWedding(docSnap.data())
  }

  useEffect(() => {
    getWeddingData()
  }, [])

  return <div>{JSON.stringify(wedding)}</div>
}

export default App
