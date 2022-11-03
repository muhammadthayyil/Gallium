import { useState } from "react";

const Create = () => {
  const [ISBN, setISBN] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <div className="create">
      <h2>Search</h2>
      <form>
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
 
export default Create;