import { useEffect } from 'react'

const FullScreenMessage = ({ locationName }: { locationName: string }) => {
  useEffect(() => {
    const preventScroll = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
    }

    const preventTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      e.stopPropagation()
    }

    window.addEventListener('scroll', preventScroll, { passive: false })
    window.addEventListener('wheel', preventScroll, { passive: false })
    window.addEventListener('touchmove', preventTouchMove, { passive: false })

    return () => {
      window.removeEventListener('scroll', preventScroll)
      window.removeEventListener('wheel', preventScroll)
      window.removeEventListener('touchmove', preventTouchMove)
    }
  }, [])

  return (
    <div className="overlay">
      <div className="overlay__inner">
        <div className="overlay__message">
          <Heart className="overlay__icon" />
          <div className="overlay__typing">경호, 해영 결혼식에 초대합니다.</div>
        </div>

        <div className="overlay__location">
          <span>{locationName}</span>
        </div>
      </div>
    </div>
  )
}

export default FullScreenMessage

const Heart = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
        <g>
          <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" />
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  )
}
