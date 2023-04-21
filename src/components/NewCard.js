import React from 'react';
import Card from './Card';


const NewCard = ({robots}) => {
    return (
        <div> 
            {
                robots.map((User, i) =>{

                    return ( 

                        <Card
                        key= {i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}

                    />);
                })          
            } 
        </div>
    );
}
export default NewCard;