

const Categories = ({setCategory}) => {
    return <select id="category-selector" defaultValue="" onChange={(ev) => {setCategory(ev.target.value);}}>
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