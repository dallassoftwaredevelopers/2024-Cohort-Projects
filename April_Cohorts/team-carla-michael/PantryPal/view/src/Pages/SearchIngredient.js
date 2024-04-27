import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import SearchResult from './PantryComponent/SearchResult';

function SearchIngredient({profile}) {
    const [results, setResults] = useState([]);

    //query comes from the state attribute in pantry NavLink.
    const query = useLocation().state;

    //Initializes results
    useEffect(() => {
        search();
    }, []);

    //Searches for ingredients based off query.
    async function search() {
        const url = "/recipes/getIngredient?ingredient=" + query;

        const data = await fetch(url).then(async (response) => {
            return await response.json().catch((error) => {console.error(error)});
        }).catch((error) => {
            console.error(error);
        });

        setResults(data);
    }

    return (
        <div className="flex justify-around">
            <div>
                <h1 className="text-2xl font-bold m-5">Search results for: {query}</h1>
                {results.map((ingredient) => {
                    return (<SearchResult ingredient={ingredient} fridgeID={profile.fridgeID._id}/>);
                })}
            </div>
        </div>
    );
}

export default SearchIngredient;