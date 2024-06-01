import React from 'react'
import Hero from '@sections/Hero'
import Info from '@sections/Info'
import { Wedding } from 'models/wedding'

const Main = ({
  children,
  wedding,
}: {
  children: React.ReactNode
  wedding: Wedding
}) => {
  const { date, location, groom, bride } = wedding

  return (
    <main>
      <Hero />
      <Info
        date={date}
        locationName={location.name}
        groomName={groom.name}
        brideName={bride.name}
      />
    </main>
  )
}

export default Main
