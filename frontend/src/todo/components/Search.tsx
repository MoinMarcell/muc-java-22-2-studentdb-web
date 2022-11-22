import React, {ChangeEvent} from "react";

export type SearchProps = {
    searchQuery(searchText: string): void
}

export default function Search(props: SearchProps){

    function handleSearchQuery(e: ChangeEvent<HTMLInputElement>){
        props.searchQuery(e.target.value)
    }

    return(
        <section>
            <input onChange={handleSearchQuery}/>
            <button>Search</button>
        </section>
    )
}