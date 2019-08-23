import React, { useContext,useState } from "react"
import List from "./test.json"
import { IdContext } from "./IdContext"

const bodycss = {
    fontSize: "25px",
    paddingLeft:"10px"
    
}

const Introduction={
    fontSize:"20px",
    textAlign:"justify",
    paddingTop:"50px",
    overflowWrap:"break-word",
    paddingLeft:"10px"
}
const ButtonsPrev={
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "10px 25px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",

}
const ButtonsNext={
    ...ButtonsPrev,
    float:"right",
    backgroundColor: "#4CAF50",
}
function BodyMain() {
    const [Id,SetId] = useContext(IdContext);
    var [textColor,setColor]=useState("#4d4d4d")
    const setColorfunction=(e)=>{
        setColor(textColor=e.target.value)
    }
    const  addIdvalue=()=>{
        if(Id<17){
        SetId(Id +1)
        }
    }
    const subtractIdvalue=()=> {
        if(Id>1){
        SetId(Id -1)
        }
    }
    var [BgColor,setBgColor]=useState("#d6d6d6")

    const setBgColorfunction=(e)=>{
        setBgColor(BgColor=e.target.value)
    }

    if (Id === 0) {
        return (  
        <div style={Introduction}>
            
            <h3 style={{textAlign:"center"}}><span>Hello There Programmer </span></h3><br/>
            <p>This is a site that provides solution to lessons of <a href="https://codility.com" target="_blank" rel="noopener noreferrer">codility</a> on python programming language.<br/>
            <br/>
            Haven't heard of it yet? Its a website to level your programming logic skills.The site is good in User Interface,
            and you can code in any of the language you are familiar with.Almost all the top programming knowleges are available.
            You can use this site to refer the solution while I strongly recommend you to try on your own first.Just to make sure 
            you know what you are doing,I made the comments on the solution unavailable(Probably I am lazy to type or copy paste those)
            Have a great time coding and also you can give feedback if something is wrong or just want to say hello!!!
            
            </p>
            <button style={ButtonsNext} onClick={addIdvalue}>Next</button>
    
        </div>)
    }
    if(Id!==0){
        var text = List.map((Postdetail, index) => {
            if (Postdetail.id === Id) {
                return (
                    
                    <div style={bodycss} key={index}>
                        <p><h3>{Postdetail.title}</h3></p>
                        <div style={{overflowWrap:"break-word"}}><p>Question:</p><br/>{Postdetail.question}<br /></div>
                        Question Link:<a href="https://codility.com" target="_blank" rel="noopener noreferrer"> Codility</a>
                        <h3>Solution</h3>
                            Code:<input type="color" value={textColor} name="textColor" onChange={setColorfunction}/> 
                            
                            Background:<input type="color" value={BgColor} name="backgroundColor" onChange={setBgColorfunction}/>
                        
                        <div style={{ backgroundColor: `${BgColor}`, padding: "10px 50px",color:`${textColor}`,overflowWrap:"break-word"}}><pre>{Postdetail.answer}</pre></div>
                    </div>
                    
                )
            }
            
    
        })
        return (
            <>
            <div>{text}</div>
            <div>
                <button style={ButtonsPrev} onClick={subtractIdvalue}>Previous</button>
                <button style={ButtonsNext} onClick={addIdvalue}>Next</button>
            </div>
            </>
        )
    }
}
export default BodyMain
