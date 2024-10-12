import { useEffect, useState } from "react"

const API_BASE_URL = 'https://swapi.dev/api';

export const useSWData = (dataType) => {

    const [dataSW, setDataSW] = useState([]);
    
    const getDataSW = async () => {
        try{
            let response = await fetch(`${API_BASE_URL}/${dataType}`);
            let result = await response.json();
            console.log(result);
            
            setDataSW(result.results);
        }
        catch (error){
            console.error('Error en la petición:', error);
        }
    }   
    
    useEffect( () => { 
        //console.log("Holis");
        getDataSW();
        console.log(dataSW);
    },[dataType]
    )

    return dataSW;

}