import React from 'react'
import {useSelector} from 'react-redux'

export default function CountValue(){
    const count=useSelector(state=>state.count)
    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}