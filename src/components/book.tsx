import { Fragment, useState } from 'react'
import { Book } from '@/data/types'

interface BookProps {
  book: Book | null
}

const Book = ({ book }: BookProps) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  
  const handleClick = () => {
    setIsActive(!isActive)
  }

  return <Fragment>
    {book &&
      <div onClick={handleClick}>
        <p>{book.title}</p>
        {isActive &&
          <Fragment>
            <p>Written by {book.author_name.join(', ')}</p>
            <p>First published in {book.first_publish_year}</p>
            {book.time && <p>Set in {book.time[0]}</p>}
            <p>Number of pages: {book.number_of_pages_median}</p>
            {book.first_sentence && <blockquote>{book.first_sentence[0]}</blockquote>}
          </Fragment>
        }
      </div>
    }
  </Fragment>
}

export default Book