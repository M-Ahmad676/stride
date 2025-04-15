import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetchProduct() {

    const[products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(() => {
    const fetchProducts = async() =>{
        const options = {
            method: 'GET',
            url: 'https://shoes-collections.p.rapidapi.com/shoes',
            headers: {
              'x-rapidapi-key': '79e7bd031bmshc3a2b592d2a59d4p137124jsn39431854cdf3',
              'x-rapidapi-host': 'shoes-collections.p.rapidapi.com'
            }
          };

     try{
         const response = await axios.request(options)
         console.log("response data :", response.data)
          setProducts(response.data.slice(0,4))
       }
       catch(error){
        console.log("Error While fetching products". error)
       }
       finally{
        setLoading(false)
       } 
    }
    fetchProducts()
    },[])
     
  return {products, loading}
}
