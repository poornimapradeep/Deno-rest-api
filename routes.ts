import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getLocations, getLocation,addLocation,updateLocation,deleteLocation } from './controllers/locations.ts'

const router = new Router()

// router.get('/api/v1/products',({response}:{response:any})=>{
//     response.body = 'Hello'
// })

router.get('/api/v1/locations',getLocations)
      .get('/api/v1/locations/:id',getLocation)
      .post('/api/v1/locations',addLocation)
      .put('/api/v1/locations/:id',updateLocation)
      .delete('/api/v1/locations/:id',deleteLocation)

export default router