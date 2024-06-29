import { CopyToClipboard } from 'react-copy-to-clipboard'

import Accordion from '@components/common/Accordion'
import Section from '@components/common/Section'
import Text from '@components/common/Text'
import MotionInner from '@components/common/MotionInner'

import { Person, Wedding } from 'models/wedding'

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
        {account && (
          <span className="contact__bank">{`${account.bankName} | ${account.accountNumber}`}</span>
        )}
      </div>
      <ul className="contact__menu">
        <li>
          <a href={`tel: ${phoneNumber}`}>전화</a>
        </li>
        {account && (
          <li>
            <CopyToClipboard
              text={`${account.bankName} ${account.accountNumber}`}
              onCopy={() => alert('계좌번호를 복사했습니다.')}
            >
              <button>복사</button>
            </CopyToClipboard>
          </li>
        )}
        {account?.kakaopayLink && (
          <li>
            <a href={account.kakaopayLink} target="_blank" rel="noreferrer">
              <KaKaoPay />
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}

const KaKaoPay = () => {
  return (
    <svg
      width="40px"
      height="20px"
      version="1.1"
      id="레이어_1"
      x="0px"
      y="0px"
      viewBox="0 0 192.9 80.4"
      xmlSpace="preserve"
    >
      <style type="text/css">
        {`
          .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#FFEB00;}
          .st1{fill-rule:evenodd;clip-rule:evenodd;}
        `}
      </style>
      <g>
        <g>
          <path
            className="st0"
            d="M152.7,80.4H40.2C18,80.4,0,62.4,0,40.2S18,0,40.2,0h112.6c22.2,0,40.2,18,40.2,40.2S174.9,80.4,152.7,80.4"
          />
        </g>
        <g>
          <g>
            <g>
              <path
                className="st1"
                d="M45.1,19.3C33,19.3,23.2,27,23.2,36.6c0,6.1,4.1,11.5,10.2,14.6L31.3,59c-0.1,0.2,0,0.5,0.2,0.7
                  c0.1,0.1,0.3,0.2,0.4,0.2c0.1,0,0.3-0.1,0.4-0.1l8.9-6c1.3,0.2,2.6,0.3,4,0.3c12.1,0,21.9-7.8,21.9-17.3
                  C67.1,27,57.3,19.3,45.1,19.3z"
              />
            </g>
          </g>
          <path
            d="M85.6,51v11.2h-8V20.9h5.6l1,2.6c1.7-1.7,4.3-3.5,8.4-3.5c7.8,0,11.5,5.8,11.5,15.3c0,9.9-5.7,16.2-13.9,16.2
            C88.6,51.6,87.4,51.5,85.6,51z M85.6,27.6v17.8c0.4,0.1,1.5,0.2,2.6,0.2c5.7,0,7.9-4,7.9-10.3c0-5.5-1.5-8.8-6-8.8
            C88.5,26.5,86.9,26.9,85.6,27.6z"
          />
          <path
            d="M121.4,32.6h4.5v-1c0-3.3-1.9-4.8-5.1-4.8c-2.5,0-5.6,0.7-8.2,2l-2.2-5.3c2.8-2,7.2-3.3,11.1-3.3c7.6,0,11.8,4,11.8,11.7
            v18.9h-5.6l-0.8-2.5c-3.2,2.3-6.2,3.3-8.8,3.3c-5.8,0-9.1-3.5-9.1-9.4C109,35.9,113.3,32.6,121.4,32.6z M126,43.1v-5.5h-3.7
            c-4.1,0-6.2,1.5-6.2,4.4c0,2.2,1.1,3.3,3.5,3.3C121.8,45.4,124.6,44.3,126,43.1z"
          />
          <path
            d="M157.5,47.7c-2.8,7.4-6.1,12.8-11,15.8l-4.9-4.5c2.8-2.5,4.9-4.9,6.6-8.1L137.6,22l7.9-2.1l6.8,23.4l6.7-23.5l7.8,2.2
            L157.5,47.7z"
          />
        </g>
      </g>
    </svg>
  )
}
