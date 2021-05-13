import React from 'react'
import Templates from '../components/Templates';

function Home(props) {
    
    return (
        <div>
            <h1 style={{marginLeft:"35%", marginTop:"10%", paddingBottom:"2%", marginBottom:"20px"}}>List of articles</h1>
            <Templates history ={props.history} />
        </div>
    )
}

export default Home;
