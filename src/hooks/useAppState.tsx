import { useState } from 'react'

import { doc, getDoc } from 'firebase/firestore'
import { db } from '@firebaseApp'

import { Wedding } from 'models/wedding'

const useAppState = () => {
  const [loading, setLoading] = useState<Boolean>(false)

  const [error, setError] = useState()

  const [wedding, setWedding] = useState<Wedding | null>()

  const getWeddingData = async () => {
    try {
      setLoading(true)

      const docRef = doc(db, 'wedding', 'v3eNky8xXowBjARen4i5')
      const docSnap = await getDoc(docRef)

      setWedding(docSnap.data() as Wedding)
      setLoading(false)
    } catch (error: any) {
      setError(error)
    }
  }

  return { loading, error, wedding, getWeddingData }
}

export default useAppState
