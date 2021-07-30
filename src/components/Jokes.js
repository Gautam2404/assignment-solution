import React, {useState, useEffect} from 'react'
import axios from 'axios';


function Jokes() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        axios.get(`https://official-joke-api.appspot.com/jokes/ten`)
      .then(res => {
        const persons = res.data;
        setItems(persons);
        setIsLoaded(true);
      })

       
        // fetch("https://official-joke-api.appspot.com/jokes/ten")
        //   .then(res => res.json())
        //   .then(
        //     (result) => {
        //       setIsLoaded(true);
        //       setItems(result);
        //     },
        //     // Note: it's important to handle errors here
        //     // instead of a catch() block so that we don't swallow
        //     // exceptions from actual bugs in components.
        //     (error) => {
        //       setIsLoaded(true);
        //       setError(error);
        //     }
        //   )
      }, [])

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.type}
                 {item.setup}
                  {item.punchline}
              </li>
            ))}
          </ul>
        );
      }

//     return (
//         <div>
//             Jokes
// JokesJokes
// JokesJokes
// JokesJokes
// Jokes
//         </div>
//     )
}

export default Jokes
