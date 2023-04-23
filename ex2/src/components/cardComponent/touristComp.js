import React from 'react';
import getData from '../../services/service';
import { useState,useEffect } from 'react';

const TouristClass=()=>{
    return(
        <>
            <TouristcardClass />
        </>
    )

}
let TouristcardClass =()=> {
        const [data, setPlaces] = useState([]);
        useEffect(() => {
            const callFetch = async () => {
                setPlaces(await getData());
            }
            callFetch();
        }, []);
        return (
            <>
                <div className='touristsection'>
                    {
                        data.map((element,index)=>{
                            return (
                                <div className='touristcard' key={index}>
                                    <img src= {`assests/${element.city}.png`} ></img>
                                    <div className='shortdescription'>{element.place}</div>
                                    <div className='cardcityname'>{element.city}</div>
                                    <div className='description'>{element.shortDescription}</div>
                                    <button className='button'>"READ MORE"</button>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
}

export default TouristClass;