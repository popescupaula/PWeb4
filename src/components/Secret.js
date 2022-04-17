import React, {useEffect} from "react";
import {useNavigate} from 'react-router-dom';

function Secret(props){
    let Cmp = props.Cmp
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('user-info'))
        {
            navigate("/register")  
        }
    }, []) 
    return(
        <div>
            <Cmp/>
        </div>
    );
}
export default Secret;
