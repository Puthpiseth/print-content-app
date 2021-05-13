import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/Details.css';


function Details(props) {
    // console.log(props);
    const [showDetails, setShowDetails] = useState({});

    const id = props.match.params.id

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res =>{
                console.log(res);
                setShowDetails(res.data);
            })
            .catch(err =>{
                console.log(err);
            })
    },[])   

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${showDetails}`)
            .then(res =>{
                console.log(res);
                setShowDetails(res.data);
            })
            .catch(err =>{
                console.log(err);
            })
    },[showDetails])   

    return (
        <div className="container">
            <p>{showDetails.body}</p>
        </div>
    )
}

export default Details;