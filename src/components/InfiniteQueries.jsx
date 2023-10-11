import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { Fragment } from 'react'

const fetchColors = ({pageParam = 1}) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}

const InfiniteQueries = () => {
    const {isLoading, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage, isError, error, data} = useInfiniteQuery(['colors'], fetchColors, 
    {
        getNextPageParam: (_lastPage, pages) => {
            if(pages.length < 4) {
                return pages.length + 1
            }
            else {
                return undefined;
            }
        }
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
                        data?.pages.map((group, i) => {
                            return (
                                <li key={i}>
                                {
                                    group.data.map(color => (<h2 key={color.id}>{color.label}</h2>))
                                }
                                </li>
                            )
                        })
                    }
                </ul>
                <>
                </>
                <button onClick={fetchNextPage} disabled={!hasNextPage}>load more</button>
                <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
            </Fragment>
            
        }
        </div>
    )
}

export default InfiniteQueries;