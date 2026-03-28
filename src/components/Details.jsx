import { useNavigate } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { MdDining } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import HotelRating from "./HotelRating";

const Details = ()=>{

    const navigate = useNavigate();

    const handleGoBack = ()=>{
        navigate(-1)
    }

    return (
        <div>
            <div className="w-100">
            <div className="border rounded m-3 w-50 mx-auto p-3 gap-3" onClick={handleGoBack}>
                <h1 style={{fontFamily:"Georgia,Serif"}}><b>Room Description</b></h1>
                <text>Our Rooms offers a comfortable and relaxing stay with a plush king-size bed or twin beds, en-suite bathroom, flat-screen TV,and free Wi-Fi.</text> <hr></hr>
                <MdLocationOn className="d-inline" style={{fontSize:30}} /> <h2 className="d-inline" style={{position:"relative",top:6}}>Location & Surrounding</h2>
                <text className="text-wrap d-block pe-5" style={{position:"relative",left:35}}>Discover the vibrant culture and natural beauty of The City with ease.Indulge in the finer things in life from the comfort of our luxurious hotel room, boasting stunning city views, plush amenities, and a prime location, just moments from the city's top attractions.Experience the ultimate urban retreat in our hotel room, perfectly positioned with breathtaking city views and just steps from the city's most vibrant views.</text><br></br>
                <MdDining className="d-inline" style={{fontSize:30}} />  <h2 className="d-inline" style={{position:"relative",top:6, left:2}}>Food & Dining</h2>
                <text className="d-block text-wrap pe-5" style={{position:"relative",left:35}}>Savor the art of fine dining at our signature restaurant, where exquisite cuisine meets exceptional service.
                Indulge in a culinary journey at our upscale eatery, featuring gourmet dishes crafted with fresh, locally-sourced ingredients."</text>
                <CiCircleMore className="d-inline" style={{fontSize:30, position:"relative",top:20}}  /><h2 className="d-inline pb-4 " style={{position:"relative",top:25,left:2}}>Room Highlights</h2>
                <text className="d-block pe-5 " style={{position:"relative",left:35}}><b style={{position:"relative",top:28}}> Comfort and Convenience</b><br></br>
                <p style={{position:"relative",top:25}}>- Plush king-size bed or twin beds for a restful night's sleep<br></br>
                - Spacious work desk with ergonomic chair for productivity<br></br>
                - Complimentary high-speed Wi-Fi for staying connected<br></br>
                - Flat-screen TV with cable channels for entertainment</p>
                <b style={{position:"relative",top:10}}>Luxurious Amenities</b>
                <p style={{position:"relative",top:10}}>- Marble bathroom with separate shower and bathtub<br></br>
                - Luxurious toiletries and plush towels for pampering<br></br>
                - Minibar stocked with premium beverages and snacks<br></br>
                - 24-hour room service for indulging in gourmet delights</p>
                <b>Stunning Views</b>
                <p>- Panoramic views of the city skyline or surrounding landscape<br></br>
                - Floor-to-ceiling windows for taking in the sights<br></br>
                - Private balcony or patio for enjoying fresh air and views</p>
                <b>Technology and Entertainment</b>
                -<p> Smart TV with streaming capabilities for accessing favorite shows<br></br>
                - USB ports and power outlets for keeping devices charged<br></br>
                - Complimentary movies and music for entertainment</p>
                <b>Accessibility and Safety</b>
                <p>- Wheelchair-accessible rooms with adapted bathrooms<br></br>
                - Electronic door locks and in-room safe for secure storage<br></br>
                - Smoke detectors and sprinkler system for fire safety!</p></text>
            </div>
            <div className="m-3 w-50 mx-auto">
                <HotelRating />
            </div>
            </div>
        </div>
    );
}

export default Details;