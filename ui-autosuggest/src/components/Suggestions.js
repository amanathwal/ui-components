import React from 'react';
import './Suggestions.scss';


const Suggestions = (props) => {

    const regexp =  new RegExp(props.searchTerm, 'ig');

    function hightLightText(text) {
        return text.replace(regexp, str => `<strong>${str}</strong>`);
    }

    //(suggestCode)
    const suggestionList = props.suggestions.map( suggestion => {
        const suggestCode = suggestion.code.replace(regexp, str => (<strong>{str}</strong>));
        
        return (
            <li key={suggestion.code} dangerouslySetInnerHTML={{ __html: `${hightLightText(suggestion.name)} ${hightLightText(suggestion.code)}`} }></li>
        );
    });

    return (
        <ul className='ui-suggestions'>
         {suggestionList}
        </ul>
    );
 }
    
export default Suggestions;