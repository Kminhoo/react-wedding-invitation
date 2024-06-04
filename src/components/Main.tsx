import React from 'react'
import Hero from '@sections/Hero'
import Info from '@sections/Info'
import { Wedding } from 'models/wedding'
import Invitation from '@sections/Invitation'
import Calendar from '@sections/Calendar'
import ImageGallery from '@sections/ImageGallery'

const Main = ({
  children,
  wedding,
}: {
  children: React.ReactNode
  wedding: Wedding
}) => {
  const { date, location, groom, bride, message, galleryImages } = wedding

  return (
    <main>
      <Hero />
      <Info
        date={date}
        locationName={location.name}
        groomName={groom.name}
        brideName={bride.name}
      />
      <Invitation message={message} />
      <Calendar date={date} />
      <ImageGallery images={galleryImages} />
    </main>
  )
}

export default Main
