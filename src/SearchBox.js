import React from 'react';

const SearchBox = ({searchChange})=>{

    return(
        <input type="search" placeholder="Enter search term" onChange={searchChange}></input>
    );
}

export default SearchBox;