import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Card from 'react-bootstrap/Card';
//import tab from "../tab";
const Players=({name,team, nationality,jerseyNumber,age,urlImg})=>{
    return(
        <div>
           
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={urlImg} onClick={()=>alert("player:"+name)} />
      <Card.Body>
        <Card.Title>
        {name}
        </Card.Title>
        <Card.Text>
        
            
            team:{team}<br/>
            nationality:{nationality}<br/>
            jerseyNumber:{jerseyNumber}<br/>
            age:{age}<br/>
            </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
       
    );
};
export default Players;