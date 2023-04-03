
 
export const toggleStyle=(mystyle,setmystyle,setBtnText)=>{
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
