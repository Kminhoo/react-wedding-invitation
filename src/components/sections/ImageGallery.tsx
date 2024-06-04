import ImageViewer from '@components/ImageViewer'
import Section from '@components/common/Section'
import { useState } from 'react'

const ImageGallery = ({ images }: { images: string[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const open = selectedIndex > -1

  const handleSelectedImage = (index: number) => {
    setSelectedIndex(index)
  }

  const handleCloseImage = () => {
    setSelectedIndex(-1)
  }

  return (
    <>
      <Section className="gallery">
        <div className="gallery__inner">
          <div className="gallery__title">
            <span>이미지 갤러리</span>
          </div>
          <div className="gallery__container">
            <ul className="gallery__album">
              {images.map((img, index) => (
                <li
                  key={index}
                  className="gallery__item"
                  onClick={() => {
                    handleSelectedImage(index)
                  }}
                >
                  <img alt="wedding" src={`./assets/images/${img}.jpeg`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIndex={selectedIndex}
        onClose={handleCloseImage}
      />
    </>
  )
}

export default ImageGallery
