import React from 'react';
import './Facilities.css';
const facilitiesList = [
    { id: 1, name: 'Free Wi-Fi', description: 'Enjoy complimentary high-speed internet access throughout the hotel.' },
    { id: 2, name: 'Swimming Pool', description: 'Relax and unwind in our outdoor swimming pool.' },
    { id: 3, name: 'Fitness Center', description: 'Stay fit with our state-of-the-art fitness center.' },
    { id: 4, name: 'Spa Services', description: 'Pamper yourself with our luxurious spa services.' },
    { id: 5, name: 'Restaurant', description: 'Dine in our world-class restaurant offering a variety of cuisines.' },
    { id: 6, name: 'Conference Rooms', description: 'Host your meetings and events in our well-equipped conference rooms.' }
];
const Facilities = () => {
    return ( 
        <div className="facilities-container ">
            <header className="facilities-header">
                <h1 className='f1'>Our Facilities</h1>
            </header>
            <div className="facilities-list">
                {facilitiesList.map(facility => (
                    <div className="facility" key={facility.id}>
                        <h2>{facility.name}</h2>
                        <p>{facility.description}</p>
                    </div>       
                ))}
            </div>
           
        </div>
    );
};
export default Facilities;
