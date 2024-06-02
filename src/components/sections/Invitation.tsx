import Section from '@components/common/Section'

import Text from '@components/common/Text'

import { Message } from 'models/wedding'

const Invitation = ({ message }: { message: Message }) => {
  console.log(message.intro)
  return (
    <Section className="invitation">
      <div className="invitation__inner">
        <div className="invitation__title">
          <span className="invitation__title-main">INVITATION</span>
          <span className="invitation__title-sub">
            경호. 해영 결혼식에 초대합니다.
          </span>
        </div>
        <Text className="invitation__intro">{message.intro}</Text>
        <div className="invitation__message-img">
          <img src="./assets/file.jpg" alt="wedding message" />
        </div>
        <Text className="invitation__message">{message.invitation}</Text>
      </div>
    </Section>
  )
}

export default Invitation
