import React,{useState, useEffect} from 'react';
import '../styles/Templates.css';
import axios from 'axios';



function Templates(props) {
    console.log(props);
    const [infos, setInfos] = useState([]);
    
    const handleClick = (e)=>{
        const id = e.currentTarget.getAttribute('data-id');
        // console.log("Work!");
        props.history.push(`/details/${id}`)
        
    }

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res =>{
                console.log(res);
                setInfos(res.data);
            })
            .catch(err =>{
                console.log(err);
            })
    },[])   

    return (
        <React.Fragment>
            {
                infos.map(el =>{
                    return(
                        <p className="articles"
                        key ={el.id} data-id ={el.id} onClick={handleClick}>{el.title}
                        </p>
                    )
                })
            }
            
        </React.Fragment>
    )
}

export default Templates;