import React from "react";
import HotelCard from "./HotelCard";
import './Hotels.css'


const Hotels = () => {
    const hotelsData = [
      {
        title: 'The Oberoi',
        image:  '/assets/hotels/hotel_image_two.jpg',
        location:'Jaipur,india',
        description: 'A spacious hotel with a king-size bed, en-suite bathhotel, and balcony.',
        price:'85356.00',
        rating: 4.5,
        status: 'Available'
  
        
       },
      {
        title: 'Sky Blue',
        image: '/assets/hotels/hotel_image_three.jpg',
        location:'Bangalore,india',
        description: 'A family-run hotel with a welcoming atmosphere, satellite TV, air conditioning, and a restaurant serving regional cooking. Some say it in a great location close to the beach and other activities.',
        price:'20000.00',
        rating: 4.5,
        status: 'Booked'
      },
      {
        title: 'Vythiri Village Resort',
        image: '/assets/hotels/hotel_image_four.jpg',
        location:'Kerala,india',
        description: '5-star luxury, spacious suites with kitchens, private balconies, fitness center, and free breakfas',
        price:'19757.00',
        rating: 5,
        status: 'Available'

        
      },
      {
        title: 'snow villa ',
        image: '/assets/hotels/hotel_image_9.jpg',
        location:'Manali,india',
        description: 'Escape to a winter wonderland at our cozy snow-covered retreat. Nestled amidst serene landscapes, our hotel offers breathtaking views, warm fireplaces, and luxurious comforts',
        price:'23412.00',
        rating: 4,
        status: 'Available'
        
       },
      {
        title: 'Anantya By The Lake',
        image: '/assets/hotels/hotel_image_10.jpg',
        location:'TamilNadu,india',
        description: 'A comfortable hotel with a queen-size bed and modern amenities.',
        price:'9323.00',
        rating: 5,
        status: 'Booked'
      },
      {
        title: 'Dynasty Resort',
        image: '/assets/hotels/hotel_image_one.jpg',
        location:'Pune,india',
        description: 'An expansive suite with a separate living area, kitchenette, and luxury bath.',
        price:'84225.00',
        rating: 4.3,
        status: 'Available'
      },
      {
        title: 'Hilton',
        image: '/assets/hotels/hotel_image_1.jpg',
        location:'Goa,india',
        description: 'Relax in luxurious loungers, enjoy refreshing drinks at our beachside bar, and explore thrilling water sports. Perfect for sun-soaked days and magical sunsets, your dream escape awaits',
        price:'12225.00',
        rating: 4.6,
        status: 'Available'
      },
      {
        title: 'Kalpanik Resort',
        image: '/assets/hotels/hotel_image_2.jpg',
        location:'Mumbai,india',
        description: 'An expansive suite with a separate living area, kitchenette, and luxury bath.',
        price:'13425.00',
        rating: 3.9,
        status: 'Booked'
      },
      {
        title: 'Ritz-Carlton',
        image: '/assets/hotels/hotel_image_11.jpg',
        location:'Hydrabadh,india',
        description: 'An expansive suite with a separate living area, kitchenette, and luxury bath.',
        price:'13976.00',
        rating: 5,
        status: 'Available'
      },
      {
        title: 'Bolgatty Palace',
        image: '/assets/hotels/hotel_image_21.jpg',
        location:'manali,india',
        description: 'An expansive suite with a separate living area, kitchenette, and luxury bath.',
        price:'7225.00',
        rating: 4,
        status: 'Available'
      },
      {
        title: 'The Retreat Mashobra',
        image: '/assets/hotels/hotel_image_8.jpg',
        location:'Shimla,india',
        description: 'Enjoy skiing, snowboarding, or sipping hot cocoa as snowflakes dance around you',
        price:'4215.00',
        rating: 4.5,
        status: 'Booked'

      },
      {
        title: 'The Retreat Mashobra',
        image: '/assets/hotels/hotel_image_7.jpg',
        location:'Shimla,india',
        description: 'An expansive suite with a separate living area, kitchenette, and luxury bath.',
        price:'8742.00',
        rating: 4.7,
         status: 'Booked'
      },
      {
        title: 'Alleppey',
        image: '/assets/hotels/hotel_image_12.jpg',
        location:'Kerala,india',
        description: 'Experience paradise at our beachfront retreat, where golden sands meet crystal-clear waters',
        price:'15324.00',
        rating: 5,
        status: 'Available'
      },
      {
        title: 'PerfectStayz ',
        image: '/assets/hotels/hotel_image_22.jpg',
        location:'Hydrabadh,india',
        description: 'Experience paradise at our beachfront retreat, where golden sands meet crystal-clear waters',
        price:'9324.00',
        rating: 4.8,
         status: 'Booked'
      },
      {
        title: 'Radisson Kufri',
        image: '/assets/hotels/hotel_image_14.jpg',
        location:'Goa,india',
        description: 'Experience paradise at our beachfront retreat, where golden sands meet crystal-clear waters',
        price:'5324.00',
        rating: 4,
        lat: 31.0833,
        lng: 77.2500,
        status: 'Available'

      },
      {
        title: 'The Zion',
        image: '/assets/hotels/hotel_image_19.jpg',
        location:'Shimla,india',
        description: 'Experience paradise at our beachfront retreat, where golden sands meet crystal-clear waters',
        price:'6324.00',
        rating: 3.9,
         status: 'Booked'
      },
      {
        title: 'The Oberoi Cecil',
        image: '/assets/hotels/hotel_image_20.jpg',
        location:'Manali,india',
        description: 'Experience paradise at our beachfront retreat, where golden sands meet crystal-clear waters',
        price:'6824.00',
        rating: 4.8,
         status: 'Available'
      },
      {
        title: 'The Orchid Hotel ',
        image: '/assets/hotels/hotel_image_17.jpg',
        location:'Pune,india',
        description: 'Experience paradise at our beachfront retreat, where golden sands meet crystal-clear waters',
        price:'7574.00',
        rating: 4.2,
        status: 'Booked'
      },
      {
        title: 'The Retreat Mashobra',
        image: '/assets/hotels/hotel_image_18.jpg',
        location:'pune,india',
        description: 'Experience paradise at our beachfront retreat, where golden sands meet crystal-clear waters',
        price:'9586.00',
        rating: 5,
        status: 'Booked'
      },
      {
        title: 'Radisson Hotel',
        image: '/assets/hotels/hotel_image_15.jpg',
        location:'Dehli,india',
        description: 'Experience paradise at our beachfront retreat, where golden sands meet crystal-clear waters',
        price:'5324.00',
        rating: 4.5,
        status: 'Available'
      },
      {
        title: 'Alleppey',
        image: '/assets/hotels/hotel_image_16.jpg',
        location:'jaipur,india',
        description: 'Experience paradise at our beachfront retreat, where golden sands meet crystal-clear waters',
        price:'9864.00',
        rating: 5,
        status: 'Booked'
      },
  
    ];
  
    return (
      <div className="hotel-page">
        {/* <h1>Hotel  Options</h1> */}
        <div className="hotel-container">
          {hotelsData.map((hotel, index) => (
            <HotelCard 
              key={index} 
              title={hotel.title} 
              image={hotel.image} 
              description={hotel.description} 
              price={hotel.price}
              location={hotel.location}
              rating={hotel.rating}

            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Hotels;