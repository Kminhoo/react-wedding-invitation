import ImageViewer from '@components/ImageViewer'
import Section from '@components/common/Section'
import { useState } from 'react'

const ImageGallery = ({ images }: { images: string[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const [isMore, setIsMore] = useState(false)

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
            <span className="gallery__title-main">WEDDING GALLERY</span>
            <span className="gallery__title-sub">우리의 시간</span>
          </div>
          <div className={`gallery__container ${isMore && 'show'}`}>
            <ul className={`gallery__album ${isMore && 'show'}`}>
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
          <div className="gallery__more">
            <button
              onClick={() => {
                setIsMore(!isMore)
              }}
              className={`gallery__btn ${isMore ? '' : 'show'}`}
            >
              {isMore ? '닫기' : '더 보기'}
            </button>
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
