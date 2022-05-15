import { useContext, useState } from "react";
import { UserContext } from "../context/apiMovies";

const DisplayMovies = () => {
  //   const theFavMovies =  [
  // //   {
  // //   "453395": {
  // //     "id": 453395,

  //  "Doctor Strange in the Multiverse of Madness",
  //     // "time": 1652458798279
  // //   },
  // //   "661231": {
  // //     "id": 661231,
  // //     "name": "Operation Mincemeat",
  // //     "time": 1652458806365
  // //   },
  // //   "752623": {
  // //     "name": "The Lost City",
  // //     "time": 1652461062128
  // //   }
  // // }
  //   ]

  // const result = Object.values(theFavMovies)
  // console.log('THE RESULT', result)
  const { movies, genres, favList } = useContext(UserContext);
  // console.log("Alexxxxxxxxx ", favList)

  const theFavMovie = [];

  theFavMovie.push(favList);

  return (
    <div>
      {/* <ul>
            {
                theFavMovie.map((movie) => {
                    console.log("HEY THIS IS MOVIE" , movie)
                    return (
                        <li>{movie}</li>
                    )
                })
            }
        </ul> */}

      {/* <ul>
            {favList.map((movie) => {
                return (

                    <li>{movies.name}</li>

                )
            })}
            
        </ul> */}
      <p>Alex && THEO</p>
    </div>
  );
};

export default DisplayMovies;
