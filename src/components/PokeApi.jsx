import React, {useState} from 'react'

const PokeApi = () =>{

    const [allPokes, setAllPokes] = useState([])

    const getPokes = () =>{
        console.log("POKES")
        fetch("https://pokeapi.co/api/v2/pokemon?limit=800")
            .then(response => {
                return response.json();
            }).then(response => {
                console.log(response);
                setAllPokes(response.results)
            }).catch(err=>{
                console.log(err);
        });
    }

    return(
        <div>
            <h4>Click to show all pokemon!</h4>
            <button onClick={getPokes}>Show Pokemon</button>
            {
                allPokes.map((pokeObj, i)=>{
                    return(
                        <div key={i}>
                            <h4>{pokeObj.name}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PokeApi;