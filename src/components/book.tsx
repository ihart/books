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
      <div className={`bg-slate-50 p-2 hover:cursor-pointer hover:bg-slate-100`} onClick={handleClick}>
        <p>{book.title} – {book?.author_name?.join(', ')}</p>
        {isActive &&
          <Fragment>
            <p>
              First published in {book.first_publish_year}
              {book.time && <span> and set in {book.time[0]}</span>}
              {' '} with {book.number_of_pages_median} pages.
            </p>
            {book.first_sentence && <blockquote>&ldquo;{book.first_sentence[0]}&rdquo;</blockquote>}
          </Fragment>
        }
      </div>
    }
  </Fragment>
}

export default Book