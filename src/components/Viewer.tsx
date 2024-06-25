import books from "../data.js";
import './Viewer.css'

type Props = {
    selected: number;
}

export function Viewer( {selected}: Props ) {
const starRating = `star${books[selected].rating}`;

  return (
    <div className="book-viewer">
        <img src={books[selected].coverImg} alt="book" />
        
        <div className="book-info">
            <h2>{books[selected].name}</h2>
            <h3>Author: {books[selected].author}</h3>
            {books[selected].coAuthor &&
                <h3>{`Co-Author: ${books[selected].coAuthor}`}</h3>
            }
            {books[selected].sequels &&
               <h3>Sequels:</h3> 
            }
            <ol>
                {books[selected].sequels?.map( item => <li>{item}</li>)}
            </ol>
            <h4 className={starRating}>Rating: </h4>
        </div>
    </div>
  );
}