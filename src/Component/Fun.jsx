// import React, { Component } from 'react'

// export default class Fun extends Component {

// state = {
//     hero:"ironman"
// }
//   render() {
//     return (
//       <div>Fun</div>
//     )
//   }
// }


import React from "react";
// import { useState } from "react";
import { useState } from "react";



function Fun(){
    const [hero,setHero]= useState("Ironman")
    const [count, setcount]=useState(0)
    const [review,setrevie]=useState([ {
        id: 1,
        name: 'Bertie Yates',
        age: 29,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
      },
      {
        id: 2,
        name: 'Hester Hogan',
        age: 32,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
      },
      {
        id: 3,
        name: 'Larry Little',
        age: 36,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      },
      {
        id: 4,
        name: 'Sean Walsh',
        age: 34,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      },
      {
        id: 5,
        name: 'Lola Gardner',
        age: 29,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      },
    ])




    const increment = ()=>{

        setcount(count+1)

    }
    return(
<div>
        
        
        <h1>Arun likes {hero}</h1>

        <h2>Score:{count}</h2>



<button className="btn btn-danger" onClick={increment}>add</button>

{review.map(a=><div>

    {a.name}
    <img src={a.image}></img>
    
    
    
    </div>)}

        </div>
    )
}

export default Fun