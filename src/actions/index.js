import axios from 'axios';
export const getQuotations=()=>{
    //return response from server
    return axios.get('https://type.fit/api/quotes')
        .then(response=>response.data)
            .catch(error=>{throw error})        
}

export const getQuotation=(quotations)=>{
    const randomNumber=Math.floor(Math.random()*50);
    return quotations[randomNumber].text;
}