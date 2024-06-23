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
        window.removeEventListener('touchstart', handleScroll)
        window.removeEventListener('click', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('touchstart', handleScroll)
    window.addEventListener('click', handleScroll)
  }, [])

  return (
    <div className="bgm" onClick={playMusic ? stopBgm : playBgm}>
      <audio
        ref={ref}
        loop={true}
        autoPlay={playMusic ? true : false}
        src="./assets/bgm.mp3"
      />
      {playMusic ? (
        <StopMusic className="bgm__icon" />
      ) : (
        <PlayMusic className="bgm__icon" />
      )}
    </div>
  )
}

export default Bgm

const StopMusic = ({ className }: { className: string }) => {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <title />
      <rect fill="#464646" height="11" width="2" x="8" y="7" />
      <rect fill="#464646" height="11" width="2" x="14" y="7" />
    </svg>
  )
}

const PlayMusic = ({ className }: { className: string }) => {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <title />
      <path
        d="M19,12a1,1,0,0,1-.55.89l-10,5A1,1,0,0,1,8,18a1,1,0,0,1-.53-.15A1,1,0,0,1,7,17V7a1,1,0,0,1,1.45-.89l10,5A1,1,0,0,1,19,12Z"
        fill="#464646"
      />
    </svg>
  )
}
