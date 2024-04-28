import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <form id="searchForm">
            <div className="search-container">
                <div className="input-container">
                    <img className="search-icon" src="/images/top-menu-icons/magnifying-glass.png" alt="Search Icon" />
                    <input 
                        className="search-bar" 
                        type="text" 
                        name="searchInput" 
                        id="searchInput" 
                        placeholder="Search" 
                        value={searchTerm} 
                        onChange={handleChange} 
                    />
                </div>
            </div>
        </form>
    );
};



export default SearchBar;