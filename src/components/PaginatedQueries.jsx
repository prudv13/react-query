import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { Fragment, useState } from 'react'

const fetchColors = (pageNumber) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}

const PaginatedQueries = () => {

    const [pageNumber, setPageNumber] = useState(1);

    const {isLoading, isFetching, isError, error, data} = useQuery(['colors', pageNumber], () => fetchColors(pageNumber), {
        keepPreviousData: true,
    });

    if(isError){
        return <h2 style={{margin: "30px", color:"red"}}>{error.message}</h2>
    }
  return (
    <div style={{margin: "30px"}}>
        {
            isLoading ?
            <h2 style={{margin: "30px"}}>Loading...</h2> :
            <Fragment>
                <ul style={{margin: "30px"}}>
                    {
                        data?.data.map((color) => {
                            return (
                                <li key={color.id}>{color.label}</li>
                            )
                        })
                    }
                </ul>
                <div>
                    <button onClick={() => setPageNumber(page => page-1)} disabled={pageNumber === 1}>prev</button>
                    <button onClick={() => setPageNumber(page => page+1)} disabled={pageNumber === 4}>next</button>
                </div>
            </Fragment>
            
        }
    </div>
  )
}

export default PaginatedQueries;