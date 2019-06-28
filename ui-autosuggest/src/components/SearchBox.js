import React from 'react';

import './SearchBox.scss';

const SearchBox = props => {
    return (
        <div>
            <input 
                type='text' 
                name='searchBox' 
                onChange={ evt => props.change(evt.target.value) }
            />
            <button onClick={ props.clickHandler }> Go! </button>
        </div>
    );
}

export default SearchBox;