import { useEffect, useRef, useState } from 'react'

const Bgm = () => {
  const [playMusic, setPlayMusic] = useState<Boolean>(false)

  const ref = useRef<HTMLAudioElement>(null)

  const playBgm = () => {
    setPlayMusic(true)
    ref.current?.play()
  }

  const stopBgm = () => {
    setPlayMusic(false)
    ref.current?.pause()
  }

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && ref.current.paused) {
        ref.current.play()
        setPlayMusic(true)

        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bgm" onClick={playMusic ? stopBgm : playBgm}>
      <audio
        ref={ref}
        loop={true}
        autoPlay={true}
        src="./assets/background.mp3"
      />
      {playMusic ? <StopMusic /> : <PlayMusic />}
    </div>
  )
}

export default Bgm

const StopMusic = () => {
  return (
    <svg className="bgm__icon" viewBox="0 0 32 32">
      <title />
      <g id="Pause">
        <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z" />
        <path d="M13,11a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V12A1,1,0,0,0,13,11Z" />
        <path d="M19,11a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V12A1,1,0,0,0,19,11Z" />
      </g>
    </svg>
  )
}

const PlayMusic = () => {
  return (
    <svg className="bgm__icon" viewBox="0 0 32 32">
      <title />
      <g id="Play">
        <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z" />
        <path d="M22.5,15.13l-9-5.2a1,1,0,0,0-1.5.87V21.2a1,1,0,0,0,1.5.87l9-5.2a1,1,0,0,0,0-1.73ZM14,19.46V12.54L20,16Z" />
      </g>
    </svg>
  )
}
