import React from 'react';
import {Link, useLocation} from 'react-router-dom';
function Rooms(){
    const location = useLocation();
    const { hotelName = 'Luxury Inn', location: hotelLocation = 'Mumbai' } = location.state || {}; // Default if directly accessed

   
    //    event handler
        const handleClick = ()=>{
         // setShowDetails(true);
        }

return (

      <div style={{marginBottom:300,margin:0,padding:0,boxSizing:"border-box",height:2450,position:"relative",overflow:"hidden"}}>
        <nav className="navbar navbar-expand-lg text-bg-info">
        <ul className='bg-secondary navbar nav'>
        <li className='nav-item'>
       
                            <Link className='nav-link' to="/rooms/Location" state={{ hotelName, location: hotelLocation }}>Standard Room</Link>
                        </li>
                        <li className='nav-item'>
                        <Link className='nav-link' to="/rooms/semi-deluxe-room" state={{ hotelName, location: hotelLocation }}>Semi Deluxe Room</Link>
                        </li> 
                       
             
                <li className='nav-item'>
                    <Link className='nav-link' to="/rooms/deluxe-room" state={{ hotelName, location: hotelLocation }}>Deluxe Room</Link>
                    </li> 
                   
                        <li className='nav-item'>
                            <Link className='nav-link' to="/rooms/family-room" state={{ hotelName, location: hotelLocation }}>Family Room</Link>
                            </li> 
                            <li className='nav-item'>
                <Link className='nav-link' to="/rooms/kids-room" state={{ hotelName, location: hotelLocation }}>Kids Room</Link>
                </li>
                            </ul>
                            </nav>

                            <img className="w-100" height={300} src="/assets/rooms/mainroom.jpg" alt="main room"/>
            <div className="shadow-lg border border-light bg-white" style={{margin:150,marginTop:80,height:300}}>
                <img className="image p-4 d-block" src="/assets/rooms/deroom2.jpg" alt="deluxe room" height={300} width={430}/>
                <h1 style={{position:"relative",bottom:600,left:150,fontSize:70,color:"white"}}>Rooms</h1>
                <div style={{height:10}}>
                    <h2 className="d-flex justify-content-evenly" style={{position:"relative", bottom:370, right:-50}}>Deluxe Room</h2>
                    <section className="shadow-sm border border-light text-center float-end bg-light" style={{width:200,height:250,position:"relative",bottom:415,right:50}}>
                     <Link to='/rooms/deluxe-room' state={{ hotelName, location: hotelLocation }}><button style={{width:90}}  onClick={handleClick} className="btn btn-outline-success rounded-5 "> View Details</button></Link>
                    </section>
                    <p className="pe-3" style={{position:"relative",bottom:375,marginLeft:440, fontSize:13}}>Our deluxe rooms offer you the best stay<br></br> to fit in your budget with all basic <br></br> amenities, an ensuite bathroom. The <br></br>bright and decent room ambiance,classy<br></br> interior and our professional hospitality<br></br> shall surely make  your stay a good one.<br></br><br></br> <b>Room Facility</b><br></br><i  className="text-success">Complimentary WIFI, LED TV, Air<br></br> Conditioning,
                    24X7 Hot Water, 2 person,<br></br> Toiletries</i></p>
                </div>
            </div>

            <div className="shadow-lg border border-light bg-white" style={{margin:150,marginTop:80,height:300,position:"relative",bottom:50}}>
                <img className="p-4 d-block" src="/assets/rooms/preroom2.jpg" alt="semi deluxe room" height={300} width={430}/>
                <div style={{height:10,position:"relative",top:95}}>
                    <h2 className="d-flex justify-content-evenly" style={{position:"relative", bottom:370, right:-90}}>Semi Deluxe Room</h2>
                    <div className="shadow-sm border border-light text-center float-end bg-light" style={{width:190,height:250,position:"relative",bottom:415,right:50}}>
                     <Link to='/rooms/semi-deluxe-room' state={{ hotelName, location: hotelLocation }}><button  onClick={handleClick} className="btn btn-outline-success rounded-5 " style={{width:90}}> View Details</button></Link>
                    </div>
                    <p className="pe-3" style={{position:"relative",bottom:370,marginLeft:430, fontSize:13}}>Our Semi-deluxe rooms offer you the best<br></br> stay to fit in your budget with all basic<br></br> amenities, an ensuite bathroom.The bright<br></br> and decent room ambiance,classy interior<br></br>and our professional hospitality shall surely<br></br> make your stay a good one.<br></br><br></br> <b>Room Facility</b><br></br><i  className="text-success">Complimentary WIFI,LED TV,Air Conditioning,<br></br>
                    24X7 Hot Water, 2 person, Toiletries</i></p>
                </div>
            </div>

            <div className="shadow-lg border border-light bg-white" style={{margin:150,marginTop:80,height:300,position:"relative",bottom:100}}>
                <img className="p-4 d-block" src="/assets/rooms/standardroom.jpg" alt="standard room" height={300} width={430}/>
                <div style={{height:10,position:"relative",top:95}}>
                    <h2 className="d-flex justify-content-evenly" style={{position:"relative", bottom:370, right:-68}}>Standard Room</h2>
                    <section className="shadow-sm border border-light text-center float-end bg-light" style={{width:190,height:250,position:"relative",bottom:415,right:50}}>
                     <Link to='/rooms/Location' state={{ hotelName, location: hotelLocation }}><button  onClick={handleClick} className="btn btn-outline-success rounded-5 " style={{width:90}}> View Details</button></Link>
                    </section>
                    <p className="pe-3" style={{position:"relative",bottom:375,marginLeft:430,fontSize:13}}>Our standard rooms offer you the best stay<br></br> to fit in your budget with all basic amenities,<br></br> an ensuite bathroom. The bright and decent<br></br> room ambiance,classy interior and our<br></br> professional hospitality shall surely make<br></br> your stay a good one.<br></br><br></br> <b>Room Facility</b><br></br><i  className="text-success">Complimentary WIFI,LED TV, Air Conditioning,<br></br>
                    24X7 Hot Water, 2 person,Toiletries</i></p>
                </div>
            </div>

            <div className="shadow-lg border border-light bg-white" style={{margin:150,marginTop:80,height:300,position:"relative",bottom:150}}>
                <img className="p-4 d-block" src="/assets/rooms/famroom.jpg" alt="Family room" height={300} width={430}/>
                <div style={{height:10,position:"relative",top:95}}>
                    <h2 className="d-flex justify-content-evenly" style={{position:"relative", bottom:380, right:-45}}>Family Suite</h2>
                    <section className="shadow-sm border border-light text-center float-end bg-light" style={{width:200,height:250,position:"relative",bottom:415,right:50}}>
                     <Link to='/rooms/family-room' state={{ hotelName, location: hotelLocation }}><button  onClick={handleClick} className="btn btn-outline-success rounded-5 " style={{width:90}}> View Details</button></Link>  
                    </section>
                    <p className="pe-3" style={{position:"relative",bottom:380,marginLeft:430,fontSize:13}}>Our Family  rooms offer you the best stay<br></br> to fit in your budget with all basic amenities,<br></br> an ensuite bathroom. The bright and decent<br></br> room ambiance,classy interior and our<br></br> professional hospitality shall surely make<br></br> your stay a good one.<br></br><br></br> <b>Room Facility</b><br></br><i  className="text-success">Complimentary WIFI, LED TV, Air<br></br> Conditioning,
                    24X7 Hot Water, 2 person,<br></br> Toiletries</i></p>
                </div>
            </div>
            <div className="shadow-lg border border-light bg-white" style={{margin:150,marginTop:80,height:300,position:"relative",bottom:200}}>
                <img className="p-4 d-block" src="/assets/rooms/kroom.jpg" alt="kids room" height={300} width={430}/>
                <div style={{height:10,position:"relative",top:95}}>
                    <h2 className="d-flex justify-content-evenly" style={{position:"relative", bottom:370, right:-40}}>Kids Room</h2>
                    <section className="shadow-sm border border-light text-center float-end bg-light" style={{width:200,height:250,position:"relative",bottom:415,right:50}}>
                     <Link to='/rooms/kids-room' state={{ hotelName, location: hotelLocation }}><button onClick={handleClick} className="btn btn-outline-success rounded-5 " style={{width:90}}> View Details</button></Link>   
                    </section>
                    <p className="pe-3" style={{position:"relative",bottom:380,marginLeft:440, fontSize:13}}>Our Kids rooms offer you the best stay to<br></br> fit in your budget with all basic amenities,<br></br> an ensuite bathroom. The bright and<br></br> decent room ambiance,classy interior and<br></br> our professional hospitality shall surely<br></br> make your stay a good one.<br></br><br></br> <b>Room Facility</b><br></br><i  className="text-success">Complimentary WIFI, LED TV, Air<br></br> Conditioning,
                    24X7 Hot Water, 2 person,<br></br>Toiletries</i></p>
                </div>
   
            </div>
      
        </div>
        
)
}
export default Rooms;