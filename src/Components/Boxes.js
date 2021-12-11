import React from 'react'
import '../Styles/Boxes.css'

// const defaultSquares = () => (new Array(arrayLength:9)).fill(value:null);

function Boxes() {
    const [boxList, setBoxList] = React.useState(Array(9).fill(''))
    return (
        <div className="boxes">
           {boxList.map((box)=> 
           <div>{box}</div>
           
           )}
          
            


            
        </div>
    )
}

export default Boxes
