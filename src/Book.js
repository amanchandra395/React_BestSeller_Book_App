const Book = (props) => {
  const { img, title, author, number } = props;
  // const displayTitle = ()=>{
  //       alert(title);
  // }
  //  const getSingleBook = ()=>{
  //   getBook(id);
  //  }

  return (
    <>
      <article className="book">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h3>{author}</h3>
        <span className="number">{"#" + (number + 1)}</span>
        {/* <button onClick={getSingleBook}>Click Me</button> */}
      </article>
    </>
  );
};

export default Book;
