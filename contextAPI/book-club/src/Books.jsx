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
        {books.map(book => ( // looping through books array
          <li key={book.id}> // creating a list for each array
            <Link to={`/books/${book.id}`}>{book.title}</Link> // using link so that when list is clicked it links to the params :id which is the path for book details and adding book title 
            as the clickable text 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
