import { useEffect, useCallback } from 'react'

const Maple = () => {
  const createMaple = useCallback(() => {
    const mapleContainer = document.querySelector('.maple-container')
    const mapleBox = document.createElement('div')

    const size = Math.random() * 20 + 10
    const duration = Math.random() * 8 + 6

    mapleBox.classList.add('maple')
    mapleBox.style.left = `${Math.random() * 100}%`
    mapleBox.style.width = `${size}px`
    mapleBox.style.height = `${size}px`
    mapleBox.style.opacity = `${Math.random() * 0.6 + 0.4}`
    mapleBox.style.animationDuration = `${duration}s`

    mapleBox.style.animationName = Math.random() > 0.5 ? 'fall1' : 'fall2'

    mapleContainer?.appendChild(mapleBox)

    setTimeout(() => {
      mapleBox.remove()
    }, duration * 1000)
  }, [])

  useEffect(() => {
    const interval = setInterval(createMaple, 900)
    return () => clearInterval(interval)
  }, [createMaple])

  return <div className="maple-container"></div>
}

export default Maple
