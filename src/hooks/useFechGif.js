import { useState, useEffect} from "react"
import {getGif} from '../helpers/GetGifs'
export const useFechGifs = (categoria) => {
    
    const [State, setState] = useState({
        data: [],
        loading: true
    });
    
    useEffect( () => {
        getGif(categoria)
             .then( imgs => {
                    setState({
                        data: imgs,
                        loading: false
                    })
             })
//                setImages(imgs))
    }, [ categoria ])    
    return State;



}