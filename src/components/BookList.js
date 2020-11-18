// src/components/BookList.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BookDetails from './BookDetails';

import { fetchBooks } from '../actions/bookActions';

const BookList = ({ dispatch, books }) => {
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read</div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books.books,
});

export default connect(mapStateToProps)(BookList);