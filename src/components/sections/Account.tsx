import Section from '@components/common/Section'
import Text from '@components/common/Text'
import { Person } from 'models/wedding'

interface AccountProps {
  groom: Person & { parents: Person[] }
  bride: Person & { parents: Person[] }
  message: string
}

const Account = ({ message, groom, bride }: AccountProps) => {
  return (
    <Section className="account">
      <div className="account__inner">
        <div className="account__title">
          <span>ACCOUNT</span>
          <p>마음 전하실 곳</p>
        </div>
        <div className="account__box">
          <Text className="account__message">{message}</Text>
          <div className="account__accordian"></div>
        </div>
      </div>
    </Section>
  )
}

export default Account
