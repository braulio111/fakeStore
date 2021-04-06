import React from 'react'

export default function NavBar() {
  return (
    <div className="header">
      <div className="header__title">
        <a href="/">FakeStore</a>
      </div>
      <div className="header__links">
        <a href="/">Products</a>
        <a href="/category">Categories</a>
      </div>
    </div>
  )
}
