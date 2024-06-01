import Section from '@components/common/Section'

interface InfoProps {
  date: string
  locationName: string
  groomName: string
  brideName: string
}

const Info = ({ date, locationName, groomName, brideName }: InfoProps) => {
  return (
    <Section className="info">
      <div className="info__inner">
        <div className="info__container">
          <div className="info__name">1</div>
          <div className="info__date">1</div>
          <div className="info__location">2</div>
        </div>
      </div>
    </Section>
  )
}

export default Info
