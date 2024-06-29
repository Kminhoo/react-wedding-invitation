import Vehicle from '@components/Vehicle'

import Section from '@components/common/Section'
import MotionInner from '@components/common/MotionInner'

import { Location } from 'models/wedding'

const WayToCome = ({ location }: { location: Location }) => {
  return (
    <Section className="waytocome">
      <MotionInner className="waytocome__inner">
        <Vehicle title="기차" waytocome={location.waytocome.train} />
        <Vehicle title="버스" waytocome={location.waytocome.bus} />
        <Vehicle title="자가용" waytocome={location.waytocome.car} />
      </MotionInner>
    </Section>
  )
}

export default WayToCome
