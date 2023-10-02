import { Fragment } from 'react'
import { Books } from '@/data/types'

interface BookListProps {
  books: Books
}

const BookList = ({ books }: BookListProps) => {
  const hasBooks = books.length ? true : false

  return <Fragment>
    {hasBooks && 
      <div>
        <p>{books.length} result{books.length > 1 ? 's': ''}</p>
        <ul>
          {books.map((book, i) => <li key={`book=-${i}`}>{book?.title}</li>)}  
        </ul>
      </div>
    }
    {!hasBooks && <p>Sorry, we couldn't find any books matching that title</p>}
  </Fragment>
}

export default BookList