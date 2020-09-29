import React, { useState } from 'react'

export function Search() {

    const [input, setInput] = useState({})

    const handleInput = ({ target }) => {
        console.log(target);
        const key = target.name
        const value = target.value
        setInput({ ...input, [key]: value })
    }

    const onSearch = () => {
        console.log(input);
    }


    return (
        <div className="search-bar">
            <div>
                <input type="search" name="searchWord" value={input.searchWord} onInput={handleInput} placeholder="training" />
                <select name="category" onChange={handleInput}>
                    <option value="all">all</option>
                    <option value="strength">strength</option>
                    <option value="aerobe">aerobe</option>
                    <option value="yoga">yoga</option>
                    <option value="gym">gym</option>
                    <option value="looseWeight">loose weight</option>
                    <option value="homeWorkout">home workout</option>
                </select>

            </div>
            <button onClick={onSearch}>search</button>

        </div>
    )
}