import React from 'react'

interface TextProps {
  children: string
  className: string
}

const Text = ({ children, className }: TextProps) => {
  const message = children
    .replaceAll('\\n', '\n')
    .split('\n')
    .map((str, index, array) => {
      return (
        <React.Fragment key={index}>
          {str}
          {index === array.length - 1 ? '' : <br />}
        </React.Fragment>
      )
    })

  return <div className={className}>{message}</div>
}

export default Text
