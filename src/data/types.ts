type Book = {
  cover_i: number,
  has_fulltext: boolean,
  edition_count: number,
  title: string,
  author_name: Array<string>,
  first_publish_year: number,
  key: string,
  ia: Array<string>,
  author_key: Array<string>,
  public_scan_b: boolean
}

export interface APIData {
  start: number,
  num_found: number,
  docs: Array<Book>
}