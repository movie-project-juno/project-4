const CreateListForm = (props) => {
    return(
        <section>
            <h2>Create a List</h2>
            <form action="submit">
                <input type="text" onChange={props.createList} value={props.userListNameInput}/>
                <button>Create</button>
            </form>
        </section>
    )
}

export default CreateListForm