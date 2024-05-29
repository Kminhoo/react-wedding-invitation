import React from 'react'

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) => {
  return <section className={`section ${className}`}>{children}</section>
}

export default Section
