// src/components/BookForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions/bookActions';

const BookForm = ({ dispatch }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      id: 5,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <input type="submit" value="add book" />
    </form>
  );
};

export default connect(null)(BookForm);