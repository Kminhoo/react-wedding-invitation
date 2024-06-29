import { useEffect, useState } from 'react'

import Header from '@components/Header'
import Main from '@components/Main'
import Bgm from '@components/Bgm'
import Footer from '@components/Footer'
import Maple from '@components/common/Maple'
import StateMessage from '@components/common/StateMessage'
import FullScreenMessage from '@components/common/FullScreenMessage'

import useAppState from '@hooks/useAppState'

const App = () => {
  const { loading, error, wedding, getWeddingData } = useAppState()

  const [visibleApp, setVisibleApp] = useState(false)

  useEffect(() => {
    setVisibleApp(true)
    getWeddingData()

    const timer = setTimeout(() => {
      setVisibleApp(false)
    }, 4000)

    return () => clearTimeout(timer)
    //eslint-disable-next-line
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
  )
}

export default App
