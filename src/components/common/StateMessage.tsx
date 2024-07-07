import { useErrorBoundary } from 'react-error-boundary'

interface StateMessageProps {
  type: 'loading' | 'error'
  error?: string
}

const StateMessage = ({ type, error }: StateMessageProps) => {
  const { resetBoundary } = useErrorBoundary()

  return (
    <div className="message__container">
      {type === 'loading' ? (
        <>
          <Heart />
          <span className="message__text">경호와 해영이의 청첩장</span>
        </>
      ) : (
        <>
          <Error />
          <span className="message__text-error">
            청첩장을 가져오지 못했어요
          </span>
          <span className="message__text-error">{error}</span>
          <button className="message__text-error-btn" onClick={resetBoundary}>
            다시 시도하기
          </button>
        </>
      )}
    </div>
  )
}

export default StateMessage

const Heart = () => {
  return <div className="heart__icon"></div>
}

const Error = () => {
  return (
    <svg
      enable-background="new 0 0 32 32"
      id="Stock_cut"
      version="1.1"
      viewBox="0 0 32 32"
      className="error__icon"
    >
      <desc />
      <g>
        <path
          d="M29,27H3   c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h26c1.105,0,2,0.895,2,2v18C31,26.105,30.105,27,29,27z"
          fill="none"
          stroke="#000000"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <rect
          fill="none"
          height="4"
          stroke="#000000"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
          width="4"
          x="14"
          y="27"
        />
        <line
          fill="none"
          stroke="#000000"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
          x1="31"
          x2="1"
          y1="23"
          y2="23"
        />
        <line
          fill="none"
          stroke="#000000"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
          x1="9"
          x2="23"
          y1="31"
          y2="31"
        />
        <line
          fill="none"
          stroke="#000000"
          stroke-miterlimit="10"
          stroke-width="2"
          x1="16"
          x2="16"
          y1="8"
          y2="16"
        />
        <line
          fill="none"
          stroke="#000000"
          stroke-miterlimit="10"
          stroke-width="2"
          x1="16"
          x2="16"
          y1="18"
          y2="20"
        />
      </g>
    </svg>
  )
}
