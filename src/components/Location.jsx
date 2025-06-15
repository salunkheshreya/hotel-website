import { useNavigate } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Location = ()=>{
        const navigate = useNavigate();
         
           // event handler
           const handleClick = ()=>{
            navigate("/Details")

        }
        const handleBackClick = ()=>{
            navigate(-1)
        }
        function selectBreakfast(){
            alert("You selected a room with breakfast!");
        }
        function selectLunch(){
            alert("You selected a room with Breakfast & Lunch/Dinner");
        }
      
        return (
            <div style={{marginBottom:300,margin:0,padding:0,boxSizing:"border-box",height:1150,position:"relative",overflow:"hidden"}}>
                <div className="mx-5">
                   <h1 style={{fontFamily:"Times New Roman",fontWeight:"bold"}}>Standard Room</h1>
                   <div style={{position:"relative",bottom:9,fontSize:25}}>
                   <IoStarSharp />
                   <IoStarSharp />
                   <IoStarSharp />
                   <IoStarSharp />
                  
                   </div>
                   <button  className="btn btn-outline-success float-end " style={{position:'relative',bottom:80,right:90,width:70}} onClick={handleBackClick}>Back</button>
                   <hr></hr>
                 
                     <div className="border rounded w-50 p-3" style={{height:950}}>
                        <div>
                           <img className="p-3 rounded-5" style={{position:"relative",bottom:20}} 
                            src={'/assets/rooms/room1.jpeg'}
                            alt="room1" height={355} width={290} />
                           <img className=" rounded-5 d-inline" style={{position:"relative",bottom:-60,left:10}} height={150} width={250} src={'/assets/rooms/room2.jpeg'} alt="room2"/>
                           <img className="rounded-5" style={{position:"relative",left:200,bottom:360,left:300}} height={150} width={250} src={'/assets/rooms/room3.jpeg'} alt="room3"/>
                           <text className="float-start p-3" style={{position:"relative",bottom:150}}>"Unwind in luxury with plush beds, marble bathrooms, and spectacular city views that will leave you feeling pampered."
                           </text>
                           <h3 className="ms-3" style={{position:"relative",bottom:70}}>Amenities:</h3> 
                </div>
                <div className="d-flex gap-2 ms-3" style={{position:"relative",bottom:200}}>
                    <button className="btn btn-warning" onClick={handleClick} style={{fontSize:14}}>Location & Surroundings</button><br></br>
                    <button className="btn btn-warning" onClick={handleClick}>Food & Dining</button><br></br>
                </div> 
                <ul className="d-flex justify-content-evenly" style={{position:"relative",bottom:110}}>
                    <li>Free Wifi</li>
                    <li>Television</li>
                    <li>Swimming Pool</li>
                    <li>On-Site Parking</li>
                    <li>Gym</li>
                </ul>
                <ul className="d-flex justify-content-evenly" style={{position:"relative",bottom:80,right:30}}>
                    <li>Sofa</li>
                    <li>Restaurant</li>
                    <li>Large Balcony</li>
                    <li>A/C</li>
                </ul>
                <div className="border rounded-3 p-3"style={{position:"relative",bottom:30,backgroundColor:"lightyellow"}}>
                    <h4>Login to unlock new Deals & manage your Booking!</h4>
                    <form className="form-group d-flex justify-content-evenly">
                        <label style={{position:'relative',bottom:20}} htmlFor="ph">Mobile No.</label>
                        <input type="text" className="form-control w-50 h-25" id="ph" placeholder="+91"/>
                        <button style={{position:'relative',bottom:9}} className="btn btn-warning mt-2"><Link to="/login">Login</Link></button>
                    </form>
                </div>
                </div>
                </div>
    
                <div className="border float-end me-4 rounded p-3" style={{position:"relative",bottom:950,right:28,width:550,fontFamily:"sans-serif,georgia"}} >
                    <h1 style={{fontFamily:'Sans-Serif Verdana',fontWeight:'bold'}}>1 Standard Bed</h1>
                    <h3 className="p-2">Fits 2 Adults</h3>
                    <ul className="p-2 ms-5">
                        <li className="p-2">Complimentary Breakfast</li>
                        <li className="p-2">15% Discount on Food & Beverages</li>
                        <li className="p-2">Child 8 years & below stay for free</li>
                        <li className="p-2">Non-Refundable</li>
                    </ul>
                    <text className="d-block p-1" style={{fontSize:20}}>Price per night:</text>
                    <h1 className=" d-inline-block text-primary ms-4 p-2">&#8377;3200</h1><text className="d-inline">+760 taxes & Fees</text>
                    <a href="/booking"><button className="d-block btn btn-warning mx-auto w-50 p-2">Book this now</button></a>
                </div>
                <div className="border rounded ms-2" style={{position:"relative",left:650,bottom:420,width:550,height:430}}>
                    <h3 className="ms-3">2 Room Types:</h3>
                    <div>
                       <div className="card ms-3 d-inline-block" style={{width: 250,height:380}}>
                          <img style={{height:200}} src="/assets/rooms/room1.jpeg" class="card-img-top" alt="..."/>
                            <div className="card-body">
                             <h5 className="card-title">Standard Room</h5>
                             <p className="card-text">Unwind in luxury with plush beds, marble bathrooms, and spectacular city views.</p>
                             <a href="#" className="btn btn-warning">Select Room </a>
                           </div>
                       </div>
                    </div>
                    <div className="" style={{position:"relative",bottom:380,left:280}}>
                        <h4>Room with Breakfast</h4><br/>
                           <ul  className="d-block" style={{position:"relative",bottom:20}}>
                             <li>Complimentary Breakfast</li>
                             <li>Non-Refundable</li>
                           </ul>
                           <h3 className="ms-3 d-inline text-success " style={{position:"relative", bottom:30}}>&#8377;3200</h3>
                           <button onClick={selectBreakfast} style={{position:"relative",bottom:35,left:20}} className="btn btn-outline-warning ms-3">Add Room</button>
                           <hr className="mx-2" style={{width:250, position:"relative",bottom:30}}></hr>
                           <h4 style={{position:"relative",bottom:30}}>Room with Breakfast + <br></br> lunch/Dinner</h4>
                           <ul  className="d-block" style={{position:"relative",bottom:30}}>
                             <li>Complimentary Breakfast</li>
                             <li>Complimentary lunch/Dinner</li>
                             <li>Non-Refundable</li>
                           </ul>
                           <h3 className="ms-3 d-inline text-success" style={{position:"relative", bottom:30}}>&#8377;4500</h3>
                           <button onClick={selectLunch} style={{position:"relative",bottom:33,left:20}} className="btn btn-outline-warning ms-3">Add Room</button>
                    </div>
                </div>
            </div>
        );
    }
    
export default Location;