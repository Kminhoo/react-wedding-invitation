interface InvitationPersonProps {
  name: string
  father: string
  mother: string
  tel: string
}

const InvitationPerson = ({
  name,
  father,
  mother,
  tel,
}: InvitationPersonProps) => {
  const relationship = name[0] === '국' ? '장남' : '장녀'

  return (
    <div className="invitationPerson">
      <span className="invitationPerson__parent">{`${father}.${mother}의`}</span>
      <span className="invitationPerson__children">{relationship}</span>
      <span className="invitationPerson__name">{name}</span>
      <a className="invitationPerson__call" href={`tel:${tel}`}>
        <Call />
      </a>
    </div>
  )
}

export default InvitationPerson

const Call = () => {
  return (
    <svg
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
