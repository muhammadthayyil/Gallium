import { useState } from "react";



async function searchBook(credentials) {
  console.log("test2");
  return fetch('http://localhost:3000/search', {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
  })
  .then(response => {
      console.log("test3");
      return response.text();
    })
    .then(data => {
      alert(data);
    });
}

const SearchPage = () => {
  const [ISBN, setISBN] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  
  const handleSubmit = async e => {
    console.log("test");
    e.preventDefault();
    const token = await searchBook({
        ISBN,
        author,
        title
    });

}

  //console.log(ISBN);
  //console.log(title);
  //console.log(author);

  return (

    <div className="create">
      <h1> the URL is {window.location.href} </h1>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label>ISBN:</label>
        <input 
          type="text" 
          required 
          value={ISBN}
          onChange={(e) => setISBN(e.target.value)}
        />
        <label>Title:</label>
        <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <label>Author:</label>
        <input
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
}
 
export default SearchPage;