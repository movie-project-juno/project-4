import { useState, UserContext } from "react";

const NaturalList = ({children}) => {

    //Create two useState hooks to capture values from dropdown menus

    const [ genre, setGenre ] = useState("");
    const [ time, setTime] = useState("")


    
    //Capture changes from dropdown menus below and update each of their states 👇👇👇

    // Pass updated States to Index.jsk to use as search Params for API

    const selectedGenre = (event) => {
        const selectedGenre = event.target.value;
        console.log(selectedGenre)
        setGenre(selectedGenre)

    }

    const selectedTime = (event) => {
        const selectedTime = event.target.value;
        setTime(selectedTime)
        console.log(selectedTime)
    }
 
    return (
    <>
        <form id="NLForm" className="NLForm" onSubmit={(event) => {
            event.preventDefault()
        }}>
        <p className="NLParagraph">  I feel like watching a</p>
        <select onChange={selectedGenre}> 
        
            <option value="1">Choose...</option>
            <option value="Horror">Horror</option>
            <option value="Action">Action</option>
            <option value="Romance">Romance</option>
            <option value="Comedy">Comedy</option>
        </select>
        <br /> <p className="NLParagraph">and I have</p>
        <select onChange={selectedTime}>
            <option value="1">Choose...</option>
            <option value="90">Less than an hour and a half</option>
            <option value="<120">Less than two hours</option>
            <option value="500">All the time in the world</option>
        </select>
        <button> Find a movie! </button>
    
    
        </form>

         {/* <UserContext.Provider value={{ time, genre }}>
      {children}
    </UserContext.Provider> */}
    </>
    );
}

export default NaturalList