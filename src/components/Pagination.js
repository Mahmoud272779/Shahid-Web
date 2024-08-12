import React, { useEffect, useState } from 'react'

import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getPageCount } from '../redux/actions/actionMovie';

const PaginationComponent = () => {

    // const handlePageClick = (data) => {
    //     console.log(data.selected + 1)
    //     getPage(data.selected + 1)
    // }
    const [pageCount,setPageCount]=useState(0)
    const [SW,setSW]=useState(0)
    const pages=useSelector(s=>s.pages)
    const searchWord=useSelector(s=>s.searchWord)
    console.log(searchWord)
    console.log(pages)
    const dispatch=useDispatch()
    useEffect(()=>{
        setPageCount(pages)
        setSW(searchWord)
      },[])
      useEffect(()=>{
        setPageCount(pages)
        setSW(searchWord)
      },[pages])
    return (
        <>
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={(e)=>{
                dispatch(getPageCount( e.selected+1,SW))
                }}
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
