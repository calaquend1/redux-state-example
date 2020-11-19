import Axios from 'axios';
export const GET_BOOKS = 'GET_BOOKS';
export const ADD_BOOK = 'ADD_BOOk';

export const fetchBooks = () => async (dispatch) => {
  const data = await fetchData();
  dispatch({
    type: GET_BOOKS,
    payload: data,
  });
};

export const addBook = (newBook) => async (dispatch) => {
  dispatch({
    type: ADD_BOOK,
    payload: newBook,
  });
};

// fetch data from the API
const fetchData = async () => {
  try {
    const res = await Axios.get(
      'https://fakerapi.it/api/v1/custom?_quantity=5&author=name&id=counter&title=city'
    );

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};