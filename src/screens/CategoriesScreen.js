import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export default function CategoriesScreen() {
  return (
    <BrowserRouter>
    <h1>Categories</h1>
    <div className="cards-wrap">
      <div className="card category-card">
        <a href="/">
          <img src="https://purepng.com/public/uploads/large/purepng.com-suitclothingsuitfashion-people-men-dress-black-cloth-suit-vest-coat-waistcoat-631522327063pe2oh.png" alt="producto" className="card__img" width="300px" height="300px" />
        </a>
        <a href="/">
          <h2 className="card__title">Men Clothing</h2>
        </a>
      </div>
      <div className="card category-card">
        <a href="/">
          <img src="https://i.pinimg.com/originals/07/a0/65/07a06542fef2592d07637da0dcf25050.png" alt="producto" className="card__img" width="300px" height="300px" />
        </a>
        <a href="/">
          <h2 className="card__title">Jewelry</h2>
        </a>
      </div>
      <div className="card category-card">
        <a href="/">
          <img src="https://lh3.googleusercontent.com/proxy/O_JcfJFrOE1fUhdFMeKXF9YRgouJ2OZ7sk0j2PckKYnpL5jjIK1xICCjfA6Ze2-2po7G1plXFEnD9uQPrY60Aa4YVfHShcsBf1-rIoXyIVEqVzBhU0o" alt="producto" className="card__img" width="300px" height="300px" />
        </a>
        <a href="/">
          <h2 className="card__title">Electronics</h2>
        </a>
      </div>
      <div className="card category-card">
        <a href="/">
          <img src="https://www.pngarts.com/files/5/Midi-Dress-PNG-Pic.png" alt="producto" className="card__img" width="300px" height="300px" />
        </a>
        <a href="/">
          <h2 className="card__title">Women Clothing</h2>
        </a>
      </div>
    </div>
    </BrowserRouter>
  )
}
