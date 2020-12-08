import { Location } from '../types.ts' 
import {v4} from 'https://deno.land/std/uuid/mod.ts'

let locations: Location[]  = [
    {
        id: "1",
        name: "starbucks Coffee",
        address: "Samrat Building, Ground, 100 Feet Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560008",
        rating: "4",
        facilities: ['Hot drinks','Food','Premium wifi'],
    //     openingTimes: [{
    //         days:'Monday-friday',
    //         opening: '7:00am',
    //         closing: '7:00pm',
    //         closed: false
    //     },
    //     {
    //         days:'saturday',
    //         opening: '8:00am',
    //         closing: '5:00pm',
    //         closed: false
    //     },
    //     {
    //         days:'sunday',
    //         closed:true
    //     }
    //    ],
    //     reviews: [
    //         {
    //             author: 'Sam',
    //             reviewText: 'Great location, great staff and great service. Quality of coffee is also really good. Overall, five star experience!',
    //         },
    //         {
    //             author: 'Ram',
    //             reviewText: 'Easy going ambience, decent menu and smart seating design'
    //         }
    //     ]
       

    },
    {
        id: "2",
        name: "Third Wave Coffee Roasters",
        address: "729, Chinmaya Mission Hospital Rd, Indira Nagar 1st Stage, Stage 1, Indiranagar, Bengaluru, Karnataka 560038",
        rating: "4",
        facilities: ['Hot drinks','Food','Premium wifi'],
    //     openingTimes: [{
    //         days:'Monday-friday',
    //         opening: '7:00am',
    //         closing: '7:00pm',
    //         closed: false
    //     },
    //     {
    //         days:'saturday',
    //         opening: '8:00am',
    //         closing: '5:00pm',
    //         closed: false
    //     },
    //     {
    //         days:'sunday',
    //         closed:true
    //     }
    //    ],
    //     reviews: [
    //         {
    //             author: 'Sam',
    //             reviewText: 'Great location, great staff and great service. Quality of coffee is also really good. Overall, five star experience!',
    //         },
    //         {
    //             author: 'Ram',
    //             reviewText: 'Easy going ambience, decent menu and smart seating design'
    //         }
    //     ]
       

    },
    {
        id: "3",
        name: "cafe Max",
        address: "Address: MSK Plaza, 3rd Main Rd, Defence Colony, Indiranagar, Bengaluru, Karnataka 560038",
        rating: "5",
        facilities: ['Hot drinks','Food','European Menu','Weekend Breakfast','wine','Premium wifi'],
    //     openingTimes: [{
    //         days:'Monday-friday',
    //         opening: '7:00am',
    //         closing: '7:00pm',
    //         closed: false
    //     },
    //     {
    //         days:'saturday',
    //         opening: '8:00am',
    //         closing: '5:00pm',
    //         closed: false
    //     },
    //     {
    //         days:'sunday',
    //         closed:true
    //     }
    //    ],
    //     reviews: [
    //         {
    //             author: 'Sam',
    //             reviewText: 'Amazing lighting and decor !! Classy place with continental food menu !!  variety of drinks being served . Place was so calm with less people. Desserts are a must try at this place . Service is little slow but nice place to give a try for sure !'
    //         },
    //         {
    //             author: 'Ram',
    //             reviewText: 'Easy going ambience, decent menu and smart seating design'
    //         }
    //     ]
       

    // },

    }
   
];
// getLocations   /api/v1/locations/:id
const getLocations = ({response}: {response:any}) => {
    response.body = 
    {
        success: true,
        data: locations
    }

}

// getLocation   /api/v1/locations/:id
const getLocation = ({params, response}: {params: { id : string},response:any}) => {
    const location: Location | undefined = locations.find(p => p.id === params.id)
    if(location){
        response.status = 200
        response.body = 
        {
            success: true,
            data: location
        }

    }
    else{
        response.status = 404
        response.body = 
        {
            success: false,
            msg: 'No Location found'
        }
    }
   

}
//Post /api/v1/locations
const addLocation = async({request, response}: {request:any,response:any}) => {
const body = await request.body()
if(!request.hasBody){
    response.status = 404
    response.body = {
        success:false,
        msg: 'No Data'
    }
}
else{
    const location :Location = body.value
    location.id = v4.generate()
    locations.push(location)
    response.status = 201
    response.body = {
        success:true,
        data: location
    }
}

}
//put /api/v1/locations/:id
const updateLocation =async ({params,request,response}: {params :{id :string},request:any,response:any}) => {
    const location: Location | undefined = locations.find(p => p.id === params.id)
    if(location){
        const body = await request.body()
        const updateData: {name?: string;
            address?: string;
            rating?: string;
            facilities?: string[]} = body.value
            locations = locations.map(p=> p.id === params.id ? {...p,...updateData} : p)

        response.status = 200
        response.body = 
        {
            success: true,
            data: location
        }

    }
    else{
        response.status = 404
        response.body = 
        {
            success: false,
            msg: 'No Location found'
        }
    }

}
//delete /api/v1/locations/:id
const deleteLocation = ({ params, response}: {params: { id: string}, response:any }) => {
locations = locations.filter(l => l.id !== params.id)  
response.body = {
    success: true,
    msg: 'location removed'
}

}
export {getLocations, getLocation,addLocation, updateLocation, deleteLocation }