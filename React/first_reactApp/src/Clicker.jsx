export default function Clicker({ buttonText, message }) {
    const handleClick = () => {
        alert(message)
    }
    return (
        <div>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}