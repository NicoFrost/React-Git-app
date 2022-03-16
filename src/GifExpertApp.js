import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

const GifExpertApp = () => {
    
    // a menos que sea fija la lista no se usa esto
    // const categorias = ['OnePuchMan','Samurai X','Dragon Ball']
    
    const [categorias, setCategorias] = useState(['Sword Art Online'])

    // para cuando quieras meter un nuevo objeto al string y que renderice 
    // const HandleAdd = () => {
    //     setCategorias( ['Sword Art Online',...categorias]);
    //     console.log(categorias);
    // };
    
    return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={setCategorias}/>
        <hr/>

        <ol>
            {
                categorias.map( categorias => 
                    <GifGrid 
                        key={categorias} 
                        categoria={categorias}
                    />
                )
            }
        </ol>
      </>
    )
}

export {
    GifExpertApp
};