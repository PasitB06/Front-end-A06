'use client'
import { useReducer } from "react";
import Card from "./Card";

export default function CardPanel() {
    const compareReducer = (compareList:Map<string, number>, action:{type:string, venueName:string, rating:number}) => {
        switch(action.type) {
            case 'add':
                // return new Set(compareList.add(action.venueName, 0));     
                compareList.set(action.venueName, 0);
                return new Map(compareList);
            case 'remove':
                compareList.delete(action.venueName);
                return new Map(compareList);
            case 'update':
                compareList.set(action.venueName, action.rating);
                return new Map(compareList);
            default:
                return compareList;
        }
    }

    const venueData = [
        {vid:"001",venueName:"The Bloom Pavilion",imgSrc:"/img/bloom.jpg"},
        {vid:"002",venueName:"Spark Space", imgSrc:"/img/sparkspace.jpg"},
        {vid:"003",venueName:"The Grand Table", imgSrc:"/img/grandtable.jpg"}
    ];


    const initialRating = new Map(venueData.map(({ venueName }) => [venueName, 0]));

    const [compareList, dispatchCompare] = useReducer(compareReducer, initialRating);

    return (
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row", alignContent:"space-around",   justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
            <Card 
            venueName="The Bloom Pavilion" 
            imgSrc="/img/bloom.jpg" 
            
            onCompare={(venue:string) => dispatchCompare({type:'add', venueName:venue, rating:0})}
            onRating={(venue:string, rating:number) => dispatchCompare({type:'update', venueName:venue, rating:rating})}
            />
            <Card
            venueName="The Grand Table"
            imgSrc="/img/grandtable.jpg"
            onCompare={(venue:string) => dispatchCompare({type:'add', venueName:venue, rating:0})}
            onRating={(venue:string, rating:number) => dispatchCompare({type:'update', venueName:venue, rating:rating})}
            />
            <Card
            venueName="Spark Space"
            imgSrc="/img/sparkspace.jpg"
            onCompare={(venue:string) => dispatchCompare({type:'add', venueName:venue, rating:0})}
            onRating={(venue:string, rating:number) => dispatchCompare({type:'update', venueName:venue, rating:rating})}
            />  
            </div> 
            <div className="w-fulsdaasddasl text-xl font-medium">Venue List with Ratings : {compareList.size}</div>
            {Array.from(compareList.entries()).map(([venue, rating]) => (
                <div data-testid={venue} key={venue} onClick={() => dispatchCompare({ type: "remove", venueName: venue, rating:rating })}>
                    {venue} : {rating}
                </div>
            ))}
        </div>
    )
    
}