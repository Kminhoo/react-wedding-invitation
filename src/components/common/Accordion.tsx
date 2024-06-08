import { PropsWithChildren, useState } from 'react'

interface AccordionProps {
  label: string
}

const Accordion = ({ label, children }: PropsWithChildren<AccordionProps>) => {
  const [showAccordion, setShowAccordion] = useState(false)

  const handleAccordion = () => {
    setShowAccordion(!showAccordion)
  }

  return (
    <div className={`accordion ${showAccordion && 'open'}`}>
      <div className="accordion__title">
        <span>{label}</span>
        <AccordionArrow
          onClick={handleAccordion}
          className={`accordion__icon ${showAccordion && 'open'}`}
        />
      </div>
      <div className={`accordion__menu ${showAccordion && 'open'}`}>
        {children}
      </div>
    </div>
  )
}

export default Accordion

const AccordionArrow = ({
  className,
  onClick,
}: {
  className: string
  onClick: () => void
}) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      height="7px"
      version="1.1"
      viewBox="0 0 10 7"
      width="10px"
    >
      <title />
      <desc />
      <defs />
      <g
        fill="none"
        fill-rule="evenodd"
        id="Page-1"
        stroke="none"
        stroke-width="1"
      >
        <g
          fill="#000000"
          id="Core"
          transform="translate(-469.000000, -9.000000)"
        >
          <g id="arrow-drop-down" transform="translate(469.000000, 9.500000)">
            <path d="M0,0 L5,5 L10,0 L0,0 Z" id="Shape" />
          </g>
        </g>
      </g>
    </svg>
  )
}
