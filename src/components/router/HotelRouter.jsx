import {BrowserRouter, Route, Routes} from 'react-router-dom'
import axios from 'axios';

import RoomNavBar from '../RoomNavBar';
import Location from '../Location';
import DeluxeRoom from '../DeluxeRoom';
import SemiDeluxeRoom from '../SemiDeluxeRoom';
import FamilyRoom from '../FamilyRoom';
import KidsRoom from '../KidsRoom';
import Details from '../Details';


const HotelRouter = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/rooms' element={<RoomNavBar/>}></Route>
                <Route path='/Location' element={<Location/>}/>
                <Route path='/Deluxeroom' element={<DeluxeRoom/>}/>
                <Route path='/SemiDeluxeroom' element={<SemiDeluxeRoom/>}/>
                <Route path='/Familyroom' element={<FamilyRoom/>}/>
                <Route path='/Kidsroom' element={<KidsRoom/>}/>
                <Route path='/Details' element={<Details/>}></Route>
            </Routes>
        </BrowserRouter>
);
}

export default HotelRouter;