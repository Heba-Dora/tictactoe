import {useState, useEffect} from 'react'
// import Boxes from './Boxes'
import '../Styles/Boxes.css'
import produce from 'immer'


const allRows= 10;
const allCols= 10;

const comb=  
   [ [0,1,2,3,4],
    [5,6,7,8,9],
    [10,11,12,13,14],
    [15,16,17,18,19],
    [20,21,22,23,24],
    [0,5,10,15,20],
    [1,6,11,16,21],
    [2,7,12,17,22],
    [3,8,13,18,23],
    [4,9,14,19,24],
    [0,6,12,18,24],
    [4,8,12,16,20],]

function Board() {
    const [player, setPlayer]= useState(true)
    const [boxList, setBoxList] = useState(()=>{

        const rowbox =[];
        for (let z =0; z < allRows; z++){
            rowbox.push(Array.from(Array(allCols), ()=>null))
            
        }
        return rowbox;
       
    })
    useEffect(()=> {
        const computerTurn = boxList.filter(list => list !== null).length % 2 === 1;
       if (computerTurn){
           console.log(alert('1'))
       }
      
    }, [boxList])


    const handleClick =(z,k)=> {
   const humanTurn = boxList.filter(box=> box !== null).length % 2 === 0;
        
        if (humanTurn )
      
        {
         
                const newBox = produce(boxList, boxListCopy => {
                    boxListCopy[z][k]= 'X'
                })
                setBoxList(newBox)
            
          
           
                
                // boxListCopy[z][k]= player ? 'X' : 'O';
               
           
            // setPlayer(!player)
            
        } 
      
    }
  
    return (
        <div className="board">
        
            {boxList.map((rowbox, z)=> rowbox.map((colbox, k)=> (
                <div className="box" key={`${z}-${k}`} 
                onClick={() => handleClick(z,k)} >
                    {boxList[z][k]}
                </div>
            )))}

            </div>
         
        
    )

}
    

 

export default Board





    
         
        // let eachBox = [...boxList];
        // eachBox[z][k] = 'X';
        // setBoxList(eachBox);
    //     // const eachBox = [...arrayList]
    //     // eachBox[z] = 'X'
    //     // setArrayList(eachBox)