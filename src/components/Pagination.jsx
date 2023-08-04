

const Pagination = ({pokesPerPage, currentPage, setCurrentPage, pokemons}) => {

  const pageNumbers = []


  for (let i = 1; i <= Math.ceil(1081 / pokesPerPage); i++) {
    pageNumbers.push(i)
  }

  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const onNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const onSpecificPage = (n) => {
    setCurrentPage(n)
  }

  return (
    <nav
      className="pagination is-centered mb-4 mt-4 column"
      role="navigation"
      aria-label="pagination"
    >
      <button className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviusPage}>Previous</button>
      <button className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`} onClick={onNextPage}>Next page</button>
      <ul className="pagination-list">
        {
          pageNumbers?.map(noPage =>(
            <li key={noPage}>
              <a 
                className={`pagination-link ${noPage === currentPage ? 'is-current' : ''}`}
                onClick={() => onSpecificPage(noPage)}
              >
                {noPage}
              </a>
            </li>
          ))
        }  
        <li><span class="pagination-ellipsis">&hellip;</span></li>
      </ul>
    </nav>
  )
}

export default Pagination;



{/* <nav class="pagination is-centered" role="navigation" aria-label="pagination">
  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
    <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
    <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
  </ul>
</nav> */}