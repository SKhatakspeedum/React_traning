import React from 'react'

export default function MyStyle() {

    const [mystyle,setmystyle]=useState({
        color:'black',
         backgroundColor:'white'
    })    

    const [btntext, setBtnText]=useState("Enable Dark Mode")
     
    const toggleStyle=()=>{
        if(mystyle.color==='white'){
            setmystyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode")
        }
        else{
            setmystyle({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("Enable Light Mode")
        }
    }


  return (
    <div>
        
      
    </div>
  )
}
