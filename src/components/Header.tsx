import React from 'react'

const Header = ({ date }: { date: string }) => {
  return (
    <header className="header">
      <div className="header__inner">
        <div>2023.11.28</div>
        <div>{date}</div>
        <div>
          <span>국경호</span>
          <span>하트</span>
          <span>권해영</span>
        </div>
      </div>
    </header>
  )
}

export default Header
