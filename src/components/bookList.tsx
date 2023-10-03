import { Fragment } from 'react'
import { Book as BookType, Books } from '@/data/types'

import Book from '@/components/book'

interface BookListProps {
  books: Books
}

const BookList = ({ books }: BookListProps) => {
  const hasBooks = books.length ? true : false

  return <Fragment>
    {hasBooks && 
      <div>
        <p className={'text-sm py-4'}>{books.length} result{books.length > 1 ? 's': ''}</p>
        <ul>
          {books.map((book, i) => <li key={`book=-${i}`}><Book book={book}/></li>)}
        </ul>
      </div>
    }
    {!hasBooks && <p className={'py-4'}>Sorry, we couldn't find any books matching that title.</p>}
  </Fragment>
}

export default BookList