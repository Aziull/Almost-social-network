import React, { useState } from 'react'
import s from './Paginator.module.css'


let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / props.pageSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.pageSize + 1;
    let rightPortionPageNumber = portionNumber * props.pageSize;

    return <div>

        {
            portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>
        }
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => < span onClick={() => props.onPageChanged(p)} className={props.currentPage === p && s.currentPage}> {p}</span>)
        }
                {
                    portionNumber < portionCount &&
                    <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>
                }
    </div>

}

export default Paginator