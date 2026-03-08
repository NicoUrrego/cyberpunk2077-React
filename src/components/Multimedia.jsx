import { useState } from 'react';
import './Multimedia.css';
import { multimediaData } from '../multimediaData';

function Multimedia(){

    //Estados

    const [selectedFranchise, setSelectedFranchise] = useState("cyberpunk2077")
    const [selectedCategory, setSelectedCategory] = useState("videos")

    //Menu principal (franquicias)

    const franchises = []
    
    for (let item of multimediaData){

        if (!franchises.includes(item.franchise)){
            franchises.push(item.franchise)
        }
    }

    

    //Submenu (categoria segun franquicia)

    const categories = []
    for (let item of multimediaData){

        if (item.franchise === selectedFranchise){

            if(!categories.includes(item.category)){
                categories.push(item.category)
            }

        }
        
    }

    //Filtro de contenido

    const filteredMedia = multimediaData.filter( 
        
        item => 
            
            item.franchise === selectedFranchise &&
            item.category === selectedCategory

    )

    //Funciones render

    function Franchises(){

        return franchises.map(franchise => { //Recorre todas las franquicias

            return(

                //Crea el boton, le da clave unica 
                <button 
                    key={franchise}
                    className={franchise === selectedFranchise ? "active" : ""}
                    onClick={()=>{

                        setSelectedFranchise(franchise)

                        for (let item of multimediaData){

                            if (item.franchise === franchise){

                                setSelectedCategory (item.category)
                                break
                            }
                        }
                    }}
                > 
                    {franchise} 
                </button>
            )

        })

    }

    function Category(){

        return categories.map (category => {

            return(

                <button 
                    key={category}
                    className={category === selectedCategory ? "active" : ""}
                    onClick={ ()=> setSelectedCategory(category)}                    
                
                >
                    {category}
            </button>

            )

        })
    }

    function Media(){

        return filteredMedia.map(item => {

            let content 

           if (item.type === "video"){
                content = (
                    <a href={item.url} target="_blank" rel="noreferrer">
                        <img src={item.thumbnail} alt={item.title}/>
                    </a>
                )
           } 

           if(item.type === "image"){
                content = (
                    <img src={item.src} alt={item.title}/>
                )
           }

           if (item.type === "platform"){
                content = (
                    <a href={item.url} target="_blank" rel="noreferrer">
                        <img src={item.logo} alt={item.title}/>
                    </a>
                )
           }

           return (

            <div key={item.id} className="media-card">
                {content}
            </div>
           )
        })
    }

    //Return

    return(
        <div className="multimedia">

            <h1>CONTENIDO MULTIMEDIA</h1>
            <div className="franchise-menu"> <Franchises/> </div>
            <div className="category-menu"> <Category/> </div>
            <div className="media-grid"> <Media/> </div>

        </div>
    )
}

export default Multimedia