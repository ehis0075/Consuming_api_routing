import React, {useState} from 'react'
import Add from './Add'
import Search from './Search'

export default function Note() {

    const[display, setDisplay] = useState({
        addComponent:false,
        searchComponent: false
    })

    const onClickHandler =(display) => {
        setDisplay({
            ...display,
            [display]:true
        })
    }

    return (
        <div>
            {display.addComponent === true?<Add />:null}
            {display.searchComponent === true?<Search />:null}
            <button onClick={()=>onClickHandler('addComponent')}>add on|off</button>
            <button onClick={()=>onClickHandler('searchComponent')}>search on|off</button>     
        </div>
    )
}
