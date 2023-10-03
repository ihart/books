import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Book as BookType, Books } from '@/data/types'
import BookList from '@/components/bookList'
 
describe('BookList', () => {
  const mockBook:BookType = {
    cover_i: 12345,
    has_fulltext: true,
    edition_count: 100,
    title: 'My book',
    author_name: ['The Author'],
    first_publish_year: 2023,
    key: 'qwerty',
    ia: ['qwerty'],
    author_key: ['qwerty'],
    public_scan_b: true,
    subject: ['The future'],
    number_of_pages_median: 999,
    first_sentence: ['It was the future.'],
    time: '23rd Century'
  }
  const books:Books = [mockBook]
  
  it('renders a book title when given an array of books', () => {
    render(<BookList books={books} />)
    const bookTitle = screen.getByText(mockBook.title)
    expect(bookTitle).toBeInTheDocument()
  })

  it('renders the number of results', () => {
    render(<BookList books={books} />)
    const resultText = screen.getByText('1 result')
    expect(resultText).toBeInTheDocument()
  })
  
  it('renders a no results message when there are no books', () => {
    render(<BookList books={[]} />)
    const msg = screen.getByText('Sorry, we couldn\'t find any books matching that title')
    expect(msg).toBeInTheDocument()
  })
})