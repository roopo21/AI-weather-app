import React, { useContext, useState } from 'react';
import "../styles/components/Search.scss";
import { findPlaces } from '../api';
import WeatherContext from '../context/weather.context';
const Search = () => {
    const [text, setText] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const [openSearchResults, setOpenSeachResults] = useState(false);

    const { setPlace } = useContext(WeatherContext);

    const onSearch = async (evt) => {
        setText(evt.target.value);
        const places = await findPlaces(text);
        setSearchResults(places);
        setOpenSeachResults(true);
    }
    const handlePlaceChange = (place) => {
        console.log(place, 'place_id');
        setPlace(place);
        setText('');
        setOpenSeachResults(false);

    }
    return (
        <div className='search-container'>
            <div className='search-icon'>
                <i className="bi bi-search"></i>
            </div>
            <div className='search-input'>
                <input type="text" name="search-city" placeholder='Search city...' onChange={onSearch} />
            </div>
            {
                openSearchResults && <div className="search-results">
                    <div className="results-container">
                        {searchResults.map((result) => (
                            <div className="result" key={result.place_id} onClick={() => handlePlaceChange(result)}>
                                {result.name}, {result.adm_area1}, {result.country}
                            </div>
                        ))

                        }
                    </div>
                </div>
            }


        </div>
    );
}

export default Search;
