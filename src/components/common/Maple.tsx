import { useEffect } from 'react'

const Maple = () => {
  useEffect(() => {
    const newMapleGenerate = () => {
      const mapleContainer = document.querySelector('.maple-container')
      const mapleBox = document.createElement('div')
      const mapleImage = document.createElement('img')
      mapleImage.src = './assets/mapleLeaf.png'
      mapleImage.style.height = '25px'
      mapleImage.style.width = '25px'
      mapleBox.appendChild(mapleImage)
      mapleBox.classList.add('maple')
      mapleBox.style.left = Math.random() * window.innerWidth + 'px'
      mapleBox.style.opacity = `${Math.random()}`

      mapleContainer?.appendChild(mapleBox)

      setTimeout(() => {
        mapleBox.remove()
      }, 300000)
    }

    const interval = setInterval(newMapleGenerate, 500)

    return () => clearInterval(interval)
  }, [])

  return <div className="maple-container"></div>
}

export default Maple
