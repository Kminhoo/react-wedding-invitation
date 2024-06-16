import { useEffect, useState } from 'react'

import { doc, getDoc } from 'firebase/firestore'

import { db } from '@firebaseApp'

import Bgm from '@components/Bgm'
import StateMessage from '@components/common/StateMessage'
import Header from '@components/Header'
import Main from '@components/Main'

import { Wedding } from 'models/wedding'
import Footer from '@components/Footer'
import Maple from '@components/common/Maple'
import FullScreenMessage from '@components/common/FullScreenMessage'

const App = () => {
  const [loading, setLoading] = useState<Boolean>(false)

  const [error, setError] = useState()

  const [wedding, setWedding] = useState<Wedding | null>()

  const [visibleApp, setVisibleApp] = useState(false)

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

  useEffect(() => {
    setVisibleApp(true)
    getWeddingData()

    const timer = setTimeout(() => {
      setVisibleApp(false)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <StateMessage type="loading" />
  }

  if (error) {
    return <StateMessage type="error" />
  }

  if (wedding == null) {
    return null
  }

  const { date, groom, bride, footerMessage, location } = wedding

  return (
    <>
      {/* <Maple /> */}
      <div className="App">
        <Maple />
        <Bgm />
        <Header date={date} groomName={groom.name} brideName={bride.name} />
        <Main wedding={wedding} />
        <Footer
          message={footerMessage}
          date={date}
          groomName={groom.name}
          brideName={bride.name}
        />
        {visibleApp && <FullScreenMessage locationName={location.name} />}
      </div>
    </>
  )
}

export default App
