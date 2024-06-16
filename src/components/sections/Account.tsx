import Accordion from '@components/common/Accordion'
import Section from '@components/common/Section'
import Text from '@components/common/Text'
import MotionInner from '@components/common/MotionInner'
import { Person, Wedding } from 'models/wedding'
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface AccountProps {
  groom: Wedding['groom']
  bride: Wedding['bride']
  message: string
}

const Account = ({ message, groom, bride }: AccountProps) => {
  return (
    <Section className="account">
      <MotionInner className="account__inner">
        <div className="account__title">
          <span className="account__title-main">ACCOUNT</span>
          <p className="account__title-sub">마음 전하실 곳</p>
        </div>
        <div className="account__box">
          <Text className="account__message">{message}</Text>
          <div className="account__accordion">
            <Accordion label="신랑측">
              <ContactInfo
                name={groom.name}
                account={groom.account}
                phoneNumber={groom.phoneNumber}
              />
              <ContactInfo
                name={groom.parents[0].name}
                account={groom.parents[0].account}
                phoneNumber={groom.parents[0].phoneNumber}
              />
              <ContactInfo
                name={groom.parents[1].name}
                account={groom.parents[1].account}
                phoneNumber={groom.parents[1].phoneNumber}
              />
            </Accordion>
            <Accordion label="신부측">
              <ContactInfo
                name={bride.name}
                account={bride.account}
                phoneNumber={bride.phoneNumber}
              />
              <ContactInfo
                name={bride.parents[0].name}
                account={bride.parents[0].account}
                phoneNumber={bride.parents[0].phoneNumber}
              />
              <ContactInfo
                name={bride.parents[1].name}
                account={bride.parents[1].account}
                phoneNumber={bride.parents[1].phoneNumber}
              />
            </Accordion>
          </div>
        </div>
      </MotionInner>
    </Section>
  )
}

export default Account

const ContactInfo = ({ name, account, phoneNumber }: Person) => {
  return (
    <div className="contact">
      <div className="contact__title">
        <span className="contact__name">{name}</span>
        <span className="contact__bank">{`${account.bankName} | ${account.accountNumber}`}</span>
      </div>
      <ul className="contact__menu">
        <li>
          <a href={`tel: ${phoneNumber}`}>전화</a>
        </li>
        <li>
          <CopyToClipboard
            text={`${account.bankName} ${account.accountNumber}`}
            onCopy={() => alert('계좌번호를 복사했습니다.')}
          >
            <button>복사</button>
          </CopyToClipboard>
        </li>
        {account.kakaopayLink && (
          <li>
            <a href={account.kakaopayLink} target="_blank" rel="noreferrer">
              송금
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}
