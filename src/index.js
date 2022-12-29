import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const books = [
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "./images/atomic-habits.jpeg",
    id: 1,
  },
  {
    author: "Colleen Hoover",
    title: "It Starts With Us",
    img: "./images/it-starts-with-us.jpg",
    id: 2,
  },
]

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  console.log(props)
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
