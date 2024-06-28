import Section from '@components/common/Section'
import MotionInner from '@components/common/MotionInner'
import Text from '@components/common/Text'

import InvitationPerson from '@components/InvitationPerson'

import { Message } from 'models/wedding'

interface InvitationProps {
  message: Message
  groomName: string
  brideName: string
  groomTel: string
  brideTel: string
  groomFatherName: string
  groomMotherName: string
  brideFatherName: string
  brideMotherName: string
}

const Invitation = ({
  message,
  groomName,
  brideName,
  groomTel,
  brideTel,
  groomFatherName,
  groomMotherName,
  brideFatherName,
  brideMotherName,
}: InvitationProps) => {
  return (
    <Section className="invitation">
      <MotionInner className="invitation__inner">
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
        <div className="invitation__person-box">
          <InvitationPerson
            name={groomName}
            tel={groomTel}
            father={groomFatherName}
            mother={groomMotherName}
          />
          <InvitationPerson
            name={brideName}
            tel={brideTel}
            father={brideFatherName}
            mother={brideMotherName}
          />
        </div>
      </MotionInner>
    </Section>
  )
}

export default Invitation
