import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const firstBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "./images/atomic-habits.jpeg",
}

const secondBook = {
  author: "Colleen Hoover",
  title: "It Starts With Us",
  img: "./images/it-starts-with-us.jpg",
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        img={firstBook.img}
        author={firstBook.author}
      />
      <Book
        title={secondBook.title}
        img={secondBook.img}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)
