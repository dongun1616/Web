function handleFormSubmit(evt) {
    evt.preventDefault();
    console.log("Submit!!")
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
}