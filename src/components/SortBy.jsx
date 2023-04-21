

const SortBy  = ({setSortBy, setOrder, setSearchParams, searchParams}) => {

  const setSortByQuery = (event) => {
    setSortBy(event.target.value)
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort_by', event.target.value);
    setSearchParams(newParams);
  };


  const setOrderQuery = (event) => {
    setOrder(event.target.value)
    const newParams = new URLSearchParams(searchParams);
    newParams.set('order', event.target.value);
    setSearchParams(newParams);
  };

    return <section className="sort-options">
            <select defaultValue="created_at" onChange={setSortByQuery}>
                <option value="votes">Votes</option>
                <option value="created_at">Date</option>
                <option value="comment_count">Comment Count</option>
             </select>
             <select defaultValue="DESC" onChange={setOrderQuery}>
                <option value="ASC">Ascending</option>
                <option value="DESC">Descending</option>
             </select>
 </section>
}

export default SortBy;