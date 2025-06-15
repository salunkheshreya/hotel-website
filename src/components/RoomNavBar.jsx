import React from "react";


import { Link,Outlet, useNavigate } from "react-router-dom"; 

const RoomNavBar = ()=>{

    const navigate = useNavigate();

//    event handler
    const handleClick = ()=>{
        console.log("button Clicked")
        navigate('/Deluxeroom')
    }

    return (
        <div className="bg-light">
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="light">
                <ul className="navbar nav" >
                    <li className="nav-item"><Link className="nav-link" to='/'> Rooms</Link></li>
                    <li className="nav-item"><Link className="nav-link" to='/Deluxeroom'> Deluxe rooms</Link></li>
                    <li className="nav-item"><Link className="nav-link" to='/SemiDeluxeroom'> Semi-Deluxe rooms</Link></li>
                    <li className="nav-item"><Link className="nav-link" to='/Location'>standard rooms</Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/Familyroom"> Family Suite</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/KidsRoom">Kids rooms</Link> </li>
                </ul>
            </nav>
            <img className="w-100" height={300} src="/assets/mainroom.jpg" alt="main room"/>
            <div className="shadow-lg border border-light bg-white" style={{margin:150,marginTop:80,height:300}}>
                <img className="image p-4 d-block" src="/assets/deroom2.jpg" alt="deluxe room" height={300} width={430}/>
                <h1 style={{position:"relative",bottom:600,left:150,fontSize:70,color:"white"}}>Rooms</h1>
                <div style={{height:10}}>
                    <h2 className="d-flex justify-content-evenly" style={{position:"relative", bottom:370, right:75}}>Deluxe Room</h2>
                    <section className="shadow-sm border border-light text-center float-end bg-light" style={{width:200,height:250,position:"relative",bottom:415,right:50}}>
                        <button onClick={handleClick}  className="btn btn-success rounded-0" style={{marginTop:100,marginBottom:20,zIndex:10 }}>View Details</button>
                    </section>
                    <p className="pe-3" style={{position:"relative",bottom:360,marginLeft:440}}>Our deluxe rooms offer you the best stay to fit in your budget with all <br></br> basic amenities, an ensuite bathroom. The bright and decent room ambiance,classy interior and our professional hospitality shall surely make <br></br>  your stay a good one.<br></br><br></br> <b>Room Facility</b><br></br><i  className="text-success">Complimentary WIFI, LED TV, Air Conditioning,
                    24X7 Hot Water, 2 person,<br></br> Toiletries</i></p>
                </div>
            </div>

            <div className="shadow-lg border border-light bg-white" style={{margin:150,marginTop:80,height:300,position:"relative",bottom:50}}>
                <img className="p-4 d-block" src="/assets/preroom2.jpg" alt="deluxe room" height={300} width={430}/>
                <div style={{height:10,position:"relative",top:95}}>
                    <h2 className="d-flex justify-content-evenly" style={{position:"relative", bottom:370, right:30}}>Semi Deluxe Room</h2>
                    <div className="shadow-sm border border-light text-center float-end bg-light" style={{width:200,height:250,position:"relative",bottom:415,right:50}}>
                        <button onClick={handleClick}  className="btn btn-success rounded-0" style={{marginTop:100,marginBottom:20 }}>View Details</button>
                    </div>
                    <p className="pe-3" style={{position:"relative",bottom:360,marginLeft:440}}>Our Semi-deluxe rooms offer you the best stay to fit in your budget with all <br></br> basic amenities, an ensuite bathroom. The bright and decent room ambiance,classy interior and our professional hospitality shall surely make <br></br>  your stay a good one.<br></br><br></br> <b>Room Facility</b><br></br><i  className="text-success">Complimentary WIFI, LED TV, Air Conditioning,
                    24X7 Hot Water, 2 person,<br></br> Toiletries</i></p>
                </div>
            </div>

            <div className="shadow-lg border border-light bg-white" style={{margin:150,marginTop:80,height:300,position:"relative",bottom:100}}>
                <img className="p-4 d-block" src="/assets/standardroom.jpg" alt="deluxe room" height={300} width={430}/>
                <div style={{height:10,position:"relative",top:95}}>
                    <h2 className="d-flex justify-content-evenly" style={{position:"relative", bottom:370, right:55}}>Standard Room</h2>
                    <section className="shadow-sm border border-light text-center float-end bg-light" style={{width:200,height:250,position:"relative",bottom:415,right:50}}>
                        <button onClick={handleClick}  className="btn btn-success rounded-0" style={{marginTop:100,marginBottom:20,zIndex:10 }}>View Details</button>
                    </section>
                    <p className="pe-3" style={{position:"relative",bottom:360,marginLeft:440}}>Our standard rooms offer you the best stay to fit in your budget with all <br></br> basic amenities, an ensuite bathroom. The bright and decent room ambiance,classy interior and our professional hospitality shall surely make <br></br>  your stay a good one.<br></br><br></br> <b>Room Facility</b><br></br><i  className="text-success">Complimentary WIFI, LED TV, Air Conditioning,
                    24X7 Hot Water, 2 person,<br></br> Toiletries</i></p>
                </div>
            </div>

            <div className="shadow-lg border border-light bg-white" style={{margin:150,marginTop:80,height:300,position:"relative",bottom:150}}>
                <img className="p-4 d-block" src="/assets/famroom.jpg" alt="deluxe room" height={300} width={430}/>
                <div style={{height:10,position:"relative",top:95}}>
                    <h2 className="d-flex justify-content-evenly" style={{position:"relative", bottom:370, right:80}}>Family Suite</h2>
                    <section className="shadow-sm border border-light text-center float-end bg-light" style={{width:200,height:250,position:"relative",bottom:415,right:50}}>
                        <button onClick={handleClick}  className="btn btn-success rounded-0" style={{marginTop:100,marginBottom:20,zIndex:10 }}>View Details</button>    
                    </section>
                    <p className="pe-3" style={{position:"relative",bottom:360,marginLeft:440}}>Our Family  rooms offer you the best stay to fit in your budget with all <br></br> basic amenities, an ensuite bathroom. The bright and decent room ambiance,classy interior and our professional hospitality shall surely make <br></br>  your stay a good one.<br></br><br></br> <b>Room Facility</b><br></br><i  className="text-success">Complimentary WIFI, LED TV, Air Conditioning,
                    24X7 Hot Water, 2 person,<br></br> Toiletries</i></p>
                </div>
            </div>

            <div className="shadow-lg border border-light bg-white" style={{margin:150,marginTop:80,height:300,position:"relative",bottom:200}}>
                <img className="p-4 d-block" src="/assets/kroom.jpg" alt="deluxe room" height={300} width={430}/>
                <div style={{height:10,position:"relative",top:95}}>
                    <h2 className="d-flex justify-content-evenly" style={{position:"relative", bottom:370, right:90}}>Kids Room</h2>
                    <section className="shadow-sm border border-light text-center float-end bg-light" style={{width:200,height:250,position:"relative",bottom:415,right:50}}>
                        <button onClick={handleClick}  className="btn btn-success rounded-0" style={{marginTop:100,marginBottom:20,zIndex:10 }}>View Details</button>    
                    </section>
                    <p className="pe-3" style={{position:"relative",bottom:360,marginLeft:440}}>Our Kids rooms offer you the best stay to fit in your budget with all <br></br> basic amenities, an ensuite bathroom. The bright and decent room ambiance,classy interior and our professional hospitality shall surely make <br></br>  your stay a good one.<br></br><br></br> <b>Room Facility</b><br></br><i  className="text-success">Complimentary WIFI, LED TV, Air Conditioning,
                    24X7 Hot Water, 2 person,<br></br> Toiletries</i></p>
                </div>
            </div>

            <Outlet/>
        </div>
    );
}

export default RoomNavBar;