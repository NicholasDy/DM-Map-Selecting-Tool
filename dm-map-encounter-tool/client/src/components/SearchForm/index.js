
const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span class="d-flex justify-content-center p-3">
      Search Any Column: {' '}
      <input value={filter || ""} onChange={e => setFilter(e.target.value)} class="ms-1" />
    </span>
  )
}

export default GlobalFilter;