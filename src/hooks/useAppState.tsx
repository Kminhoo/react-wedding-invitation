import { useState } from 'react'

import { useErrorBoundary } from 'react-error-boundary'

import { doc, getDoc } from 'firebase/firestore'
import { db } from '@firebaseApp'

import { Wedding } from 'models/wedding'

const useAppState = () => {
  const { showBoundary } = useErrorBoundary()

  const [loading, setLoading] = useState<Boolean>(false)

  const [wedding, setWedding] = useState<Wedding | null>()

  const getWeddingData = async () => {
    try {
      setLoading(true)

      const docRef = doc(db, 'wedding', 'v3eNky8xXowBjARen4i5')
      const docSnap = await getDoc(docRef)

      if (!docSnap.exists()) {
        throw new Error('데이터를 가져올 수 없습니다.')
      }

      setWedding(docSnap.data() as Wedding)
      setLoading(false)
    } catch (error: any) {
      showBoundary(error)
    }
  }

  return { loading, wedding, getWeddingData }
}

export default useAppState
