import { Books } from '@/data/types'

interface BookListProps {
  books: Books
}

const BookList = ({ books }: BookListProps) => {
  return <ul>
    {books.map((book, i) => <li key={`book=-${i}`}>{book?.title}</li>)}  
  </ul>
}

export default BookList