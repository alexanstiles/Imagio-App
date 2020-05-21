import React from "react";
import Post from './components/Post'; 
import { Box } from '@material-ui/core'; 


export default function Home(){ 
    return(
        <>
        <Box display="flex" justifyContent="center">
            <Post /> 
        </Box>
        </>
    ); 

}