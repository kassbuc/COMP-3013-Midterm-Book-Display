import books from "../data.js";
import './List.css';

type Props = {
    selected: number;
    setSelected: React.Dispatch<React.SetStateAction<number>>;
}

export function List( {selected, setSelected}: Props ) {

    function handleClick(id: number) {
        setSelected(id);
    }

    return (
    <div className='book-list'>

        <h1>Your book list</h1>
        {books.map( book => <div onClick={() => handleClick(book.id)} className={book.id === selected ? "selected" : ""} > <img src={book.coverImg} alt={book.name}/> <p>{book.name}</p></div> )}

    </div>
    );
}