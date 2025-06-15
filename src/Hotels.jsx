import React from "react";
import HotelCard from "./components/HotelCard";
import './components/styles.css';


const Hotels = () => {
    const hotelsData = [
      {
        title: 'The Oberoi',
        image:  '/assets/hotels/hotel_image_two.jpg',
        location:'Jaipur,india',
        description: 'A spacious hotel with a king-size bed, en-suite bathhotel, and balcony.',
        price:'85356.00',
        rating: 4.5,
  
        
       },
      {
        title: 'Sky Blue',
        image: '/assets/hotels/hotel_image_three.jpg',
        location:'Bangalore,india',
        description: 'A family-run hotel with a welcoming atmosphere, satellite TV, air conditioning, and a restaurant serving regional cooking. Some say it in a great location close to the beach and other activities.',
        price:'20000.00',
        rating: 4.5,
      },
      {
        title: 'Vythiri Village Resort',
        image: '/assets/hotels/hotel_image_four.jpg',
        location:'Kerala,india',
        description: '5-star luxury, spacious suites with kitchens, private balconies, fitness center, and free breakfast',
        price:'19757.00',
        rating: 5,
        
      },
      {
        title: 'snow villa ',
        image: '/assets/hotels/hotel_image_9.jpg',
        location:'Manali,india',
        description: 'Escape to a winter wonderland at our cozy snow-covered retreat. Nestled amidst serene landscapes, our hotel offers breathtaking views, warm fireplaces, and luxurious comforts',
        price:'23412.00',
        rating: 4,
        
       },
      {
        title: 'Anantya By The Lake',
        image: '/assets/hotels/hotel_image_10.jpg',
        location:'TamilNadu,india',
        description: 'A comfortable hotel with a queen-size bed and modern amenities.',
        price:'9323.00',
        rating: 5,
      },
      {
        title: 'Dynasty Resort',
        image: '/assets/hotels/hotel_image_one.jpg',
        location:'Pune,india',
        description: 'An expansive suite with a separate living area, kitchenette, and luxury bath.',
        price:'84225.00',
        rating: 4.3,
      },
      {
        title: 'Hilton',
        image: '/assets/hotels/hotel_image_1.jpg',
        location:'Goa,india',
        description: 'Relax in luxurious loungers, enjoy refreshing drinks at our beachside bar, and explore thrilling water sports. Perfect for sun-soaked days and magical sunsets, your dream escape awaits',
        price:'12225.00',
        rating: 4.6,
      },
      {
        title: 'Kalpanik Resort',
        image: '/assets/hotels/hotel_image_2.jpg',
        location:'Mumbai,india',
        description: 'An expansive suite with a separate living area, kitchenette, and luxury bath.',
        price:'13425.00',
        rating: 3.9,
      },
      {
        title: 'Ritz-Carlton',
        image: '/assets/hotels/hotel_image_11.jpg',
        location:'Hydrabadh,india',
        description: 'An expansive suite with a separate living area, kitchenette, and luxury bath.',
        price:'13976.00',
        rating: 5,
      },
      {
        title: 'Bolgatty Palace',
        image: '/assets/hotels/hotel_image_21.jpg',
        location:'Ooty,india',
        description: 'An expansive suite with a separate living area, kitchenette, and luxury bath.',
        price:'7225.00',
        rating: 4,
      },
      {
        title: 'The Retreat Mashobra',
        image: '/assets/hotels/hotel_image_8.jpg',
        location:'Shimla,india',
        description: 'Enjoy skiing, snowboarding, or sipping hot cocoa as snowflakes dance around you',
        price:'4215.00',
        rating: 4.5,
      },
      {
        title: 'The Retreat Mashobra',
        image: '/assets/hotels/hotel_image_7.jpg',
        location:'Shrinagar,india',
        description: 'An expansive suite with a separate living area, kitchenette, and luxury bath.',
        price:'8742.00',
        rating: 4.7,
      },
      {
        title: 'Alleppey',
        image: '/assets/hotels/hotel_image_12.jpg',
        location:'Kerala,india',
        description: 'Experience paradise at our beachfront retreat, where golden sands meet crystal-clear waters',
        price:'15324.00',
        rating: 5,
      },
      {
        title: 'PerfectStayz ',
        image: '/assets/hotels/hotel_image_13.jpeg',
        location:'Hydrabadh,india',
        description: 'Experience paradise at our beachfront retreat, where golden sands meet crystal-clear waters',
        price:'9324.00',
        rating: 4.8,
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

      },
      {
        title: 'The Zion',
        image: '/assets/hotels/hotel_image_19.jpg',
        location:'Shimla,india',
        description: 'Experience paradise at our beachfront retreat, where golden sands meet crystal-clear waters',
        price:'6324.00',
        rating: 3.9,
      },
      {
        title: 'The Oberoi Cecil',
        image: '/assets/hotels/hotel_image_20.jpg',
        location:'Manali,india',
        description: 'Experience paradise at our beachfront retreat, where golden sands meet crystal-clear waters',
        price:'6824.00',
        rating: 4.8,
      },
      {
        title: 'The Orchid Hotel ',
        image: '/assets/hotels/hotel_image_17.jpg',
        location:'Pune,india',
        description: 'Experience paradise at our beachfront retreat, where golden sands meet crystal-clear waters',
        price:'7574.00',
        rating: 4.2,
      },
      {
        title: 'The Retreat Mashobra',
        image: '/assets/hotels/hotel_image_18.jpg',
        location:'Kasauli,india',
        description: 'Experience paradise at our beachfront retreat, where golden sands meet crystal-clear waters',
        price:'9586.00',
        rating: 5,
      },
      {
        title: 'Radisson Hotel',
        image: '/assets/hotels/hotel_image_15.jpg',
        location:'Dehli,india',
        description: 'Experience paradise at our beachfront retreat, where golden sands meet crystal-clear waters',
        price:'5324.00',
        rating: 4.5,
      },
      {
        title: 'Alleppey',
        image: '/assets/hotels/hotel_image_16.jpg',
        location:'Belgao,india',
        description: 'Experience paradise at our beachfront retreat, where golden sands meet crystal-clear waters',
        price:'9864.00',
        rating: 5,
      },
  
    ];
  
    return (
      <div className="hotel-page">

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