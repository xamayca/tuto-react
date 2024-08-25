import {Checkbox} from "./Checkbox.jsx";
import {InputSearch} from "./InputSearch.jsx";

function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange}) {

    return <div style={{border: '1px solid black', padding: '20px', marginTop: '20px'}} >
            <InputSearch value={search} onChange={onSearchChange} placeholder={'Faire une recherche...'}/>
            <Checkbox id="stocked" checked={showStockedOnly} onChange={onStockedOnlyChange} label={'Filtré uniquement les produits disponible'} />
        </div>
}

export default SearchBar;