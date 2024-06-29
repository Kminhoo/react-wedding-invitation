import Hero from '@sections/Hero'
import Info from '@sections/Info'
import Invitation from '@sections/Invitation'
import Calendar from '@sections/Calendar'
import ImageGallery from '@sections/ImageGallery'
import Locations from '@sections/Locations'
import Navigation from '@sections/Navigation'
import WayToCome from '@sections/WayToCome'
import GuestBook from '@sections/GuestBook'
import Account from '@sections/Account'
import Rsvp from '@sections/Rsvp'

import { Wedding } from 'models/wedding'

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
      <Invitation
        message={message}
        groomName={groom.name}
        brideName={bride.name}
        groomTel={groom.phoneNumber}
        brideTel={bride.phoneNumber}
        groomFatherName={groom.parents[0].name}
        groomMotherName={groom.parents[1].name}
        brideFatherName={bride.parents[0].name}
        brideMotherName={bride.parents[1].name}
      />
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
