import { useEffect } from 'react'

import mapleRedLeaf from '@mapleAssets/mapleRedLeaf.png'
import mapleYellowLeaf from '@mapleAssets/mapleYellowLeaf.png'

const Maple = () => {
  useEffect(() => {
    const newMapleGenerate = () => {
      const mapleContainer = document.querySelector('.maple-container')
      const mapleBox = document.createElement('div')

      const mapleImages = [mapleRedLeaf, mapleYellowLeaf]
      const randomIndex = Math.floor(Math.random() * mapleImages.length)
      mapleBox.style.backgroundImage = `url(${mapleImages[randomIndex]})`

      mapleBox.classList.add('maple')
      mapleBox.style.left = Math.random() * window.innerWidth + 'px'
      mapleBox.style.opacity = `${Math.random()}`

      mapleContainer?.appendChild(mapleBox)

      setTimeout(() => {
        mapleBox.remove()
      }, 300000)
    }

    const interval = setInterval(newMapleGenerate, 300)

    return () => clearInterval(interval)
  }, [])

  return <div className="maple-container"></div>
}

export default Maple
