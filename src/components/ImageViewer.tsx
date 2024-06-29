import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './swiper.css'

const ImageViewer = ({
  images,
  open,
  selectedIndex,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIndex: number
  onClose: () => void
}) => {
  if (open === false) {
    return null
  }

  return (
    <div className="viewer">
      <Close className="viewer__close" onClose={onClose} />
      <Swiper
        modules={[Pagination, Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIndex}
        pagination={{ clickable: true }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              className="viewer__img"
              src={`./assets/images/${img}.jpeg`}
              alt="wedding"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageViewer

const Close = ({
  className,
  onClose,
}: {
  className: string
  onClose: () => void
}) => {
  return (
    <svg
      className={className}
      onClick={onClose}
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
    >
      <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
    </svg>
  )
}
