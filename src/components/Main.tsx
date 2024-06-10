import React from 'react'
import Hero from '@sections/Hero'
import Info from '@sections/Info'
import { Wedding } from 'models/wedding'
import Invitation from '@sections/Invitation'
import Calendar from '@sections/Calendar'
import ImageGallery from '@sections/ImageGallery'
import Locations from '@sections/Locations'
import Navigation from '@sections/Navigation'
import WayToCome from '@sections/WayToCome'
import GuestBook from '@sections/GuestBook'
import Account from './sections/Account'
import Rsvp from './sections/Rsvp'

const Main = ({ wedding }: { wedding: Wedding }) => {
  const {
    date,
    location,
    groom,
    bride,
    message,
    galleryImages,
    accountMessage,
  } = wedding

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
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Locations location={location} />
      <Navigation link={location.link} />
      <WayToCome location={location} />
      <GuestBook />
      <Account message={accountMessage} groom={groom} bride={bride} />
      <Rsvp />
    </main>
  )
}

export default Main
