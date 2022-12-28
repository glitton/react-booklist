import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL600_SR600,400_.jpg'
    alt='Atomic Habits'
  />
)
const Title = () => <h2>Atomic Habits</h2>
const Author = () => <h4>James Clear</h4>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)
