

const Categories = ({setCategory, setSearchParams, searchParams}) => {

    const setCategoryQuery = (event) => {
        setCategory(event.target.value)
        const newParams = new URLSearchParams(searchParams);
        newParams.set('sort_by', event.target.value);
        setSearchParams(newParams);
      };
    

    return <select id="category-selector" defaultValue="" onChange={setCategoryQuery}>
            <option value=''>All</option>
            <option value='strategy'>strategy</option>
            <option value='hidden-roles'>hidden-roles</option>
            <option value='dexterity'>dexterity</option>
            <option value='push-your-luck'>push-your-luck</option>
            <option value='roll-and-write'>roll-and-write</option>
            <option value='deck-building'>deck-building</option>
            <option value='engine-building'>engine-building</option>
    </select>
}

export default Categories;