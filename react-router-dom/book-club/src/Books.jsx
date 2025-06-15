import { Link } from 'react-router-dom';

function Books() {
  // Example books with IDs (IDs can be anything unique, like slugs or numbers)
  const books = [
    { id: 'gone-girl', title: 'Gone Girl' },
    { id: 'harry-potter', title: 'Harry Potter' },
    { id: 'dune', title: 'Dune' },
  ];

  return (
    <div>
      <h1>Book List:</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
