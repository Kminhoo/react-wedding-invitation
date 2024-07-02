import { useState } from 'react'

import ImageViewer from '@components/ImageViewer'

import Section from '@components/common/Section'
import MotionInner from '@components/common/MotionInner'

import generateImgUrl from '../../utils/generateImgUrl'

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
        <MotionInner className="gallery__inner">
          <div className="gallery__title">
            <span className="gallery__title-main">GALLERY</span>
            <span className="gallery__title-sub">우리의 시작</span>
          </div>
          <div className={`gallery__container ${isMore && 'show'}`}>
            <ul className={`gallery__album ${isMore && 'show'}`}>
              {images.map((img, index) => (
                <li
                  key={index}
                  className="gallery__item"
                  onClick={() => handleSelectedImage(index)}
                >
                  <picture>
                    <source
                      srcSet={generateImgUrl({
                        fileName: img,
                        type: 'webp',
                        option: 'w_350,h_350,c_fill,g_auto',
                      })}
                    />
                    <img
                      alt="wedding"
                      src={generateImgUrl({
                        fileName: img,
                        type: 'jpg',
                        option: 'w_350,h_350,c_fill,g_auto',
                      })}
                    />
                  </picture>
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
              <BtnArrowIcon
                className={`gallery__btn-icon ${isMore && 'open'}`}
              />
            </button>
          </div>
        </MotionInner>
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

export const BtnArrowIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      height="30px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width="30px"
    >
      <path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z" />
    </svg>
  )
}
