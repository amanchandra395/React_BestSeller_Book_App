import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {books} from './books'
import Book from './Book'

const root = ReactDOM.createRoot(document.getElementById('root'));


const BookList = ()=>{
  // const getBook = (id) =>{
  //    const book = books.find((book) => book.id === id);
  //    alert(book);
  //}
  return (
    <>
      <h1>Amanzon best seller</h1>
      <section className="booklist">
        {/* <EventExamples/>  */}
        {books.map((book, index) => {
          // const {img,title,author,id} = book;
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

// const EventExamples = ()=>{
//   const handleFormFormat = (e)=>{
//     alert(e.target);
//     alert(e.target.name);
//     alert(e.target.value);
//   }
//   const handleButtonClick = ()=>{
//     alert("Button Click");
//   }
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     alert("Form Submitted");
//   };
//    return <section>
//     <form onSubmit={handleFormSubmission}>
//        <h2>
//         Typical Form
//        </h2>
//        <input 
//        type="text"
//        name='Example'
//        onChange={handleFormFormat}
//        style={{margin: '1rem 0'}}
//        />
//         <button type='submit' onClick={handleFormSubmission}>
//           Submit
//         </button>
//     </form>
//     <button onClick={handleButtonClick}>
//       Click Me
//     </button>
//    </section>
// }
 
root.render(
  <BookList/>
);

