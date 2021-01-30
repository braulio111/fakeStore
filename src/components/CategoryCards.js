import React from 'react'

export default function CategoryCards() {
  return (
    <>
    <h1>Categories</h1>
    <div className="cards-wrap">
      <div className="card category-card">
        <a href="/category/men%20clothing">
          <img src="https://purepng.com/public/uploads/large/purepng.com-suitclothingsuitfashion-people-men-dress-black-cloth-suit-vest-coat-waistcoat-631522327063pe2oh.png" alt="producto" className="card__img" width="300px" height="300px" />
        </a>
        <a href="/category/men%20clothing">
          <h2 className="card__title">Men Clothing</h2>
        </a>
      </div>
      <div className="card category-card">
        <a href="/category/jewelery">
          <img src="https://i.pinimg.com/originals/07/a0/65/07a06542fef2592d07637da0dcf25050.png" alt="producto" className="card__img" width="300px" height="300px" />
        </a>
        <a href="/category/jewelery">
          <h2 className="card__title">Jewelry</h2>
        </a>
      </div>
      <div className="card category-card">
        <a href="/category/electronics">
          <img src="https://lh3.googleusercontent.com/proxy/7WP9PSvAhdHPSKPvLbAglwPfKgCSIfNbyBop0PfhLs8ER-hPkwrZfraQwmJVBdhS7ghZro0aKbg6pBpEdKkZDMYWXDv8XbGAdQ" alt="producto" className="card__img" width="300px" height="300px" />
        </a>
        <a href="/category/electronics">
          <h2 className="card__title">Electronics</h2>
        </a>
      </div>
      <div className="card category-card">
        <a href="/category/women%20clothing">
          <img src="https://www.pngarts.com/files/5/Midi-Dress-PNG-Pic.png" alt="producto" className="card__img" width="300px" height="300px" />
        </a>
        <a href="/category/women%20clothing">
          <h2 className="card__title">Women Clothing</h2>
        </a>
      </div>
    </div>
    </>
  )
}
