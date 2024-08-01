import React from 'react'

import ReactPaginate from 'react-paginate';

const PaginationComponent = ({ getPage ,pageCount ,word}) => {
    const handlePageClick = (data) => {
        console.log(data.selected + 1)
        getPage(data.selected + 1,word)
    }
    return (
        <>
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={(e)=>{
                getPage(e.selected+1,word)
                console.log(word)}}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="السابق"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
       
        </>
    )
}

export default PaginationComponent
