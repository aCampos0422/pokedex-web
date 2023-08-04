import { useState, useEffect } from "react";


const Pagination = ({pokesPerPage, currentPage, setCurrentPage, pokemons}) => {

  const [visiblePageNumbers, setVisiblePageNumbers] = useState([])
  
  const totalCard = pokemons?.results.length
  const pageNumbers = []
  
  for (let i = 1; i <= Math.ceil(totalCard / pokesPerPage); i++) {
    pageNumbers.push(i)
  }
  
  useEffect(() => {
    setVisiblePageNumbers(pageNumbers.slice(0, 10));
  }, [totalCard, pokesPerPage]);
  

  const onPreviusPage = () => {
    const previousPage = currentPage - 1;

    if (currentPage > 1) {
      if (!visiblePageNumbers.includes(previousPage) && previousPage > 0) {
        const startIndex = pageNumbers.indexOf(previousPage);
        setVisiblePageNumbers(pageNumbers.slice(startIndex, startIndex + 10));
      }
      setCurrentPage(previousPage);
    }
  }

  const onNextPage = () => {
    const nextPage = currentPage + 1;

      if (currentPage < pageNumbers.length) {
        if (!visiblePageNumbers.includes(nextPage) && nextPage <= pageNumbers.length) {
          const startIndex = pageNumbers.indexOf(nextPage) - 9;
          setVisiblePageNumbers(pageNumbers.slice(startIndex, startIndex + 10));
        }
        setCurrentPage(nextPage);
      }
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
          visiblePageNumbers?.map(noPage =>(
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
        <li><span className="pagination-ellipsis">&hellip;</span></li>
      </ul>
    </nav>
  )
}

export default Pagination;



