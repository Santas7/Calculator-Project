import './Button.css'

export default function Button( {text, type, onClick} ) {
    return (
        <button onClick={onClick} className={`button ${type}`}>
            {text}
        </button>
    )
}