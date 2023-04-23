import React from 'react';
class TouristClass extends React.Component{
    constructor(props){
        super(props);
        this.place=this.props.data;
    }
    render(){
        return(
            <>
                <TouristcardClass tourist={this.place}/>
            </>
        )
    }
}
class TouristcardClass extends React.Component {
    constructor(props){
        super(props);
        this.data=this.props.tourist;

    }
    render() {
        return (
            <>
                <div className='touristsection'>
                    {
                        this.data.map((element,index)=>{
                            return (
                                <div className='touristcard'>
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
}

export default TouristClass;