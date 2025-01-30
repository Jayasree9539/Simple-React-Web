import React, {useState} from "react";

function SearchBar() {

    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Search for:${query}`);
    };
    return(
        <form onSubmit={handleSearch} className="search-bar">
            <div className="search-container">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
            </div>
        </form>
    );
}


export default SearchBar;