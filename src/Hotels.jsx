import React, { useState } from "react";
import HotelCard from "./components/HotelCard";
import Filter from './components/Filters';
import './components/styles.css';


const Hotels = () => {
  const hotelsData = [
    {
      title: 'Luxury Suites',
      image: '/assets/hotels/hotel_image_8.jpg',
      location: 'Mumbai,india',
      description: 'Experience ultimate comfort and luxury at Luxury Suites. Enjoy world-class amenities including Bar, Gym, Family Hotel.',
      price: '15700.00',
      rating: 4.4
    },
    {
      title: 'Crystal Resort',
      image: '/assets/hotels/hotel_image_11.jpg',
      location: 'Mumbai,india',
      description: 'Experience ultimate comfort and luxury at Crystal Resort. Enjoy world-class amenities including Family Hotel, Bar, Private villa.',
      price: '27748.00',
      rating: 3.7
    },
    {
      title: 'Oasis Suites',
      image: '/assets/hotels/hotel_image_2.jpg',
      location: 'Jaipur,india',
      description: 'Experience ultimate comfort and luxury at Oasis Suites. Enjoy world-class amenities including Restaurant, Parking, Family Hotel, Instant Confirmation, Pool, Free Cancellation.',
      price: '23587.00',
      rating: 4.9
    },
    {
      title: 'Oasis Palace',
      image: '/assets/hotels/hotel_image_1.jpg',
      location: 'TamilNadu,india',
      description: 'Experience ultimate comfort and luxury at Oasis Palace. Enjoy world-class amenities including Breakfast Included, Parking, Free Cancellation, Gym, Restaurant, Wi-Fi.',
      price: '82212.00',
      rating: 5.0
    },
    {
      title: 'Luxury Lodge',
      image: '/assets/hotels/hotel_image_four.jpg',
      location: 'Manali,india',
      description: 'Experience ultimate comfort and luxury at Luxury Lodge. Enjoy world-class amenities including Spa, Pool, Family Hotel, Private villa, Bar, Instant Confirmation.',
      price: '80271.00',
      rating: 3.7
    },
    {
      title: 'Horizon Villa',
      image: '/assets/hotels/hotel_image_three.jpg',
      location: 'Mumbai,india',
      description: 'Experience ultimate comfort and luxury at Horizon Villa. Enjoy world-class amenities including Wi-Fi, Private villa, Bar, Breakfast Included, Spa.',
      price: '62272.00',
      rating: 3.8
    },
    {
      title: 'Emerald Palace',
      image: '/assets/hotels/hotel_image_11.jpg',
      location: 'Hydrabadh,india',
      description: 'Experience ultimate comfort and luxury at Emerald Palace. Enjoy world-class amenities including Wi-Fi, Restaurant, Instant Confirmation, Private villa, Gym.',
      price: '66502.00',
      rating: 4.9
    },
    {
      title: 'Luxury Hotel',
      image: '/assets/hotels/hotel_image_2.jpg',
      location: 'Bangalore,india',
      description: 'Experience ultimate comfort and luxury at Luxury Hotel. Enjoy world-class amenities including Spa, Parking, Free Cancellation, Wi-Fi.',
      price: '69387.00',
      rating: 4.7
    },
    {
      title: 'Paradise Suites',
      image: '/assets/hotels/hotel_image_two.jpg',
      location: 'Belgao,india',
      description: 'Experience ultimate comfort and luxury at Paradise Suites. Enjoy world-class amenities including Breakfast Included, Pool, Free Cancellation, Bar, Gym, Private villa.',
      price: '82041.00',
      rating: 4.1
    },
    {
      title: 'The Grand Inn',
      image: '/assets/hotels/hotel_image_four.jpg',
      location: 'Belgao,india',
      description: 'Experience ultimate comfort and luxury at The Grand Inn. Enjoy world-class amenities including Spa, Private villa, Instant Confirmation, Parking, Pool.',
      price: '8832.00',
      rating: 4.5
    },
    {
      title: 'Royal Suites',
      image: '/assets/hotels/hotel_image_11.jpg',
      location: 'Shrinagar,india',
      description: 'Experience ultimate comfort and luxury at Royal Suites. Enjoy world-class amenities including Gym, Parking, Family Hotel, Wi-Fi.',
      price: '92696.00',
      rating: 4.2
    },
    {
      title: 'Seaside Villa',
      image: '/assets/hotels/hotel_image_8.jpg',
      location: 'Belgao,india',
      description: 'Experience ultimate comfort and luxury at Seaside Villa. Enjoy world-class amenities including Pool, Free Cancellation, Wi-Fi, Private villa, Gym.',
      price: '29106.00',
      rating: 4.0
    },
    {
      title: 'Majestic Resort',
      image: '/assets/hotels/hotel_image_one.jpg',
      location: 'Bangalore,india',
      description: 'Experience ultimate comfort and luxury at Majestic Resort. Enjoy world-class amenities including Instant Confirmation, Bar, Breakfast Included, Free Cancellation, Gym, Pool.',
      price: '47441.00',
      rating: 4.0
    },
    {
      title: 'Sunset Palace',
      image: '/assets/hotels/hotel_image_9.jpg',
      location: 'Pune,india',
      description: 'Experience ultimate comfort and luxury at Sunset Palace. Enjoy world-class amenities including Restaurant, Private villa, Instant Confirmation, Spa.',
      price: '78671.00',
      rating: 3.9
    },
    {
      title: 'The Grand Palace',
      image: '/assets/hotels/hotel_image_two.jpg',
      location: 'Mumbai,india',
      description: 'Experience ultimate comfort and luxury at The Grand Palace. Enjoy world-class amenities including Parking, Bar, Instant Confirmation, Wi-Fi.',
      price: '30556.00',
      rating: 3.6
    },
    {
      title: 'Royal Retreat',
      image: '/assets/hotels/hotel_image_11.jpg',
      location: 'Goa,india',
      description: 'Experience ultimate comfort and luxury at Royal Retreat. Enjoy world-class amenities including Family Hotel, Gym, Instant Confirmation, Pool, Private villa.',
      price: '10728.00',
      rating: 4.4
    },
    {
      title: 'Horizon Villa',
      image: '/assets/hotels/hotel_image_9.jpg',
      location: 'Pune,india',
      description: 'Experience ultimate comfort and luxury at Horizon Villa. Enjoy world-class amenities including Wi-Fi, Breakfast Included, Parking.',
      price: '10434.00',
      rating: 4.2
    },
    {
      title: 'Horizon Suites',
      image: '/assets/hotels/hotel_image_8.jpg',
      location: 'Hydrabadh,india',
      description: 'Experience ultimate comfort and luxury at Horizon Suites. Enjoy world-class amenities including Family Hotel, Parking, Bar, Free Cancellation, Private villa, Instant Confirmation.',
      price: '94119.00',
      rating: 4.7
    },
    {
      title: 'Mountain Resort',
      image: '/assets/hotels/hotel_image_12.jpg',
      location: 'Goa,india',
      description: 'Experience ultimate comfort and luxury at Mountain Resort. Enjoy world-class amenities including Spa, Pool, Breakfast Included.',
      price: '81737.00',
      rating: 4.0
    },
    {
      title: 'Majestic Suites',
      image: '/assets/hotels/hotel_image_7.jpg',
      location: 'Kasauli,india',
      description: 'Experience ultimate comfort and luxury at Majestic Suites. Enjoy world-class amenities including Family Hotel, Wi-Fi, Free Cancellation.',
      price: '32380.00',
      rating: 4.4
    },
    {
      title: 'Serene Resort',
      image: '/assets/hotels/hotel_image_12.jpg',
      location: 'Shrinagar,india',
      description: 'Experience ultimate comfort and luxury at Serene Resort. Enjoy world-class amenities including Pool, Instant Confirmation, Parking, Free Cancellation, Gym.',
      price: '25074.00',
      rating: 4.1
    },
    {
      title: 'Golden Retreat',
      image: '/assets/hotels/hotel_image_2.jpg',
      location: 'Ooty,india',
      description: 'Experience ultimate comfort and luxury at Golden Retreat. Enjoy world-class amenities including Spa, Free Cancellation, Bar, Family Hotel, Wi-Fi.',
      price: '6211.00',
      rating: 3.9
    },
    {
      title: 'Crystal Retreat',
      image: '/assets/hotels/hotel_image_2.jpg',
      location: 'Shimla,india',
      description: 'Experience ultimate comfort and luxury at Crystal Retreat. Enjoy world-class amenities including Private villa, Pool, Family Hotel, Gym, Bar.',
      price: '48695.00',
      rating: 4.6
    },
    {
      title: 'Crystal Suites',
      image: '/assets/hotels/hotel_image_four.jpg',
      location: 'TamilNadu,india',
      description: 'Experience ultimate comfort and luxury at Crystal Suites. Enjoy world-class amenities including Gym, Spa, Restaurant, Bar, Wi-Fi, Instant Confirmation.',
      price: '65024.00',
      rating: 4.4
    },
    {
      title: 'Sunset Inn',
      image: '/assets/hotels/hotel_image_four.jpg',
      location: 'Shrinagar,india',
      description: 'Experience ultimate comfort and luxury at Sunset Inn. Enjoy world-class amenities including Wi-Fi, Private villa, Bar, Family Hotel.',
      price: '33700.00',
      rating: 3.9
    },
    {
      title: 'Seaside Retreat',
      image: '/assets/hotels/hotel_image_7.jpg',
      location: 'Pune,india',
      description: 'Experience ultimate comfort and luxury at Seaside Retreat. Enjoy world-class amenities including Parking, Spa, Wi-Fi.',
      price: '6753.00',
      rating: 4.1
    },
    {
      title: 'Emerald Suites',
      image: '/assets/hotels/hotel_image_two.jpg',
      location: 'Kerala,india',
      description: 'Experience ultimate comfort and luxury at Emerald Suites. Enjoy world-class amenities including Family Hotel, Breakfast Included, Parking, Gym, Wi-Fi, Spa.',
      price: '90713.00',
      rating: 4.5
    },
    {
      title: 'Golden Palace',
      image: '/assets/hotels/hotel_image_9.jpg',
      location: 'Goa,india',
      description: 'Experience ultimate comfort and luxury at Golden Palace. Enjoy world-class amenities including Parking, Instant Confirmation, Wi-Fi.',
      price: '58055.00',
      rating: 5.0
    },
    {
      title: 'Luxury Retreat',
      image: '/assets/hotels/hotel_image_2.jpg',
      location: 'Belgao,india',
      description: 'Experience ultimate comfort and luxury at Luxury Retreat. Enjoy world-class amenities including Parking, Wi-Fi, Free Cancellation, Pool, Restaurant.',
      price: '11802.00',
      rating: 4.4
    },
    {
      title: 'Sunset Villa',
      image: '/assets/hotels/hotel_image_three.jpg',
      location: 'Hydrabadh,india',
      description: 'Experience ultimate comfort and luxury at Sunset Villa. Enjoy world-class amenities including Instant Confirmation, Bar, Parking, Pool, Private villa.',
      price: '35239.00',
      rating: 3.9
    },
    {
      title: 'Golden Lodge',
      image: '/assets/hotels/hotel_image_10.jpg',
      location: 'Pune,india',
      description: 'Experience ultimate comfort and luxury at Golden Lodge. Enjoy world-class amenities including Restaurant, Wi-Fi, Bar, Pool, Gym, Family Hotel.',
      price: '74917.00',
      rating: 3.7
    },
    {
      title: 'Seaside Resort',
      image: '/assets/hotels/hotel_image_12.jpg',
      location: 'Dehli,india',
      description: 'Experience ultimate comfort and luxury at Seaside Resort. Enjoy world-class amenities including Gym, Spa, Breakfast Included.',
      price: '32386.00',
      rating: 4.6
    },
    {
      title: 'The Grand Lodge',
      image: '/assets/hotels/hotel_image_12.jpg',
      location: 'Manali,india',
      description: 'Experience ultimate comfort and luxury at The Grand Lodge. Enjoy world-class amenities including Breakfast Included, Private villa, Instant Confirmation, Spa.',
      price: '8096.00',
      rating: 4.8
    },
    {
      title: 'Sunset Retreat',
      image: '/assets/hotels/hotel_image_9.jpg',
      location: 'Kasauli,india',
      description: 'Experience ultimate comfort and luxury at Sunset Retreat. Enjoy world-class amenities including Wi-Fi, Gym, Private villa, Bar, Family Hotel, Pool.',
      price: '94556.00',
      rating: 3.8
    },
    {
      title: 'Horizon Retreat',
      image: '/assets/hotels/hotel_image_three.jpg',
      location: 'Shimla,india',
      description: 'Experience ultimate comfort and luxury at Horizon Retreat. Enjoy world-class amenities including Restaurant, Pool, Gym, Free Cancellation, Private villa, Wi-Fi.',
      price: '29922.00',
      rating: 4.9
    },
    {
      title: 'Horizon Resort',
      image: '/assets/hotels/hotel_image_10.jpg',
      location: 'TamilNadu,india',
      description: 'Experience ultimate comfort and luxury at Horizon Resort. Enjoy world-class amenities including Bar, Parking, Free Cancellation.',
      price: '21895.00',
      rating: 4.8
    },
    {
      title: 'Sunset Resort',
      image: '/assets/hotels/hotel_image_two.jpg',
      location: 'Shrinagar,india',
      description: 'Experience ultimate comfort and luxury at Sunset Resort. Enjoy world-class amenities including Private villa, Pool, Wi-Fi.',
      price: '4836.00',
      rating: 4.8
    },
    {
      title: 'Royal Hotel',
      image: '/assets/hotels/hotel_image_1.jpg',
      location: 'Shrinagar,india',
      description: 'Experience ultimate comfort and luxury at Royal Hotel. Enjoy world-class amenities including Parking, Gym, Bar, Free Cancellation.',
      price: '26279.00',
      rating: 4.4
    },
    {
      title: 'Paradise Inn',
      image: '/assets/hotels/hotel_image_8.jpg',
      location: 'TamilNadu,india',
      description: 'Experience ultimate comfort and luxury at Paradise Inn. Enjoy world-class amenities including Gym, Restaurant, Spa.',
      price: '58965.00',
      rating: 4.9
    },
    {
      title: 'Luxury Resort',
      image: '/assets/hotels/hotel_image_7.jpg',
      location: 'Jaipur,india',
      description: 'Experience ultimate comfort and luxury at Luxury Resort. Enjoy world-class amenities including Pool, Spa, Private villa, Wi-Fi, Gym, Restaurant.',
      price: '69614.00',
      rating: 5.0
    },
    {
      title: 'Crystal Inn',
      image: '/assets/hotels/hotel_image_12.jpg',
      location: 'Goa,india',
      description: 'Experience ultimate comfort and luxury at Crystal Inn. Enjoy world-class amenities including Free Cancellation, Breakfast Included, Wi-Fi.',
      price: '46028.00',
      rating: 5.0
    },
    {
      title: 'Emerald Lodge',
      image: '/assets/hotels/hotel_image_1.jpg',
      location: 'Jaipur,india',
      description: 'Experience ultimate comfort and luxury at Emerald Lodge. Enjoy world-class amenities including Gym, Instant Confirmation, Restaurant, Free Cancellation.',
      price: '53908.00',
      rating: 4.9
    },
    {
      title: 'The Grand Inn',
      image: '/assets/hotels/hotel_image_9.jpg',
      location: 'TamilNadu,india',
      description: 'Experience ultimate comfort and luxury at The Grand Inn. Enjoy world-class amenities including Restaurant, Free Cancellation, Spa, Family Hotel.',
      price: '52396.00',
      rating: 3.8
    },
    {
      title: 'Sunset Villa',
      image: '/assets/hotels/hotel_image_7.jpg',
      location: 'Ooty,india',
      description: 'Experience ultimate comfort and luxury at Sunset Villa. Enjoy world-class amenities including Private villa, Free Cancellation, Parking.',
      price: '42457.00',
      rating: 4.1
    },
    {
      title: 'Royal Lodge',
      image: '/assets/hotels/hotel_image_9.jpg',
      location: 'Mumbai,india',
      description: 'Experience ultimate comfort and luxury at Royal Lodge. Enjoy world-class amenities including Wi-Fi, Restaurant, Free Cancellation, Breakfast Included, Pool, Parking.',
      price: '89894.00',
      rating: 5.0
    },
    {
      title: 'Oasis Inn',
      image: '/assets/hotels/hotel_image_four.jpg',
      location: 'Kasauli,india',
      description: 'Experience ultimate comfort and luxury at Oasis Inn. Enjoy world-class amenities including Restaurant, Family Hotel, Private villa.',
      price: '18068.00',
      rating: 4.5
    },
    {
      title: 'Sunset Retreat',
      image: '/assets/hotels/hotel_image_three.jpg',
      location: 'Manali,india',
      description: 'Experience ultimate comfort and luxury at Sunset Retreat. Enjoy world-class amenities including Family Hotel, Parking, Bar, Breakfast Included.',
      price: '31476.00',
      rating: 4.9
    },
    {
      title: 'Emerald Retreat',
      image: '/assets/hotels/hotel_image_three.jpg',
      location: 'Kasauli,india',
      description: 'Experience ultimate comfort and luxury at Emerald Retreat. Enjoy world-class amenities including Gym, Pool, Free Cancellation, Spa, Private villa, Bar.',
      price: '39616.00',
      rating: 4.1
    },
    {
      title: 'Horizon Resort',
      image: '/assets/hotels/hotel_image_10.jpg',
      location: 'Dehli,india',
      description: 'Experience ultimate comfort and luxury at Horizon Resort. Enjoy world-class amenities including Restaurant, Parking, Bar, Breakfast Included, Wi-Fi, Pool.',
      price: '6305.00',
      rating: 4.6
    },
    {
      title: 'Horizon Suites',
      image: '/assets/hotels/hotel_image_11.jpg',
      location: 'Kasauli,india',
      description: 'Experience ultimate comfort and luxury at Horizon Suites. Enjoy world-class amenities including Bar, Gym, Breakfast Included, Spa, Wi-Fi, Restaurant.',
      price: '68069.00',
      rating: 4.8
    },
    {
      title: 'Majestic Villa',
      image: '/assets/hotels/hotel_image_two.jpg',
      location: 'Kerala,india',
      description: 'Experience ultimate comfort and luxury at Majestic Villa. Enjoy world-class amenities including Restaurant, Gym, Parking, Private villa, Wi-Fi, Free Cancellation.',
      price: '56763.00',
      rating: 4.9
    },
    {
      title: 'Serene Resort',
      image: '/assets/hotels/hotel_image_four.jpg',
      location: 'Belgao,india',
      description: 'Experience ultimate comfort and luxury at Serene Resort. Enjoy world-class amenities including Parking, Gym, Bar, Breakfast Included.',
      price: '64446.00',
      rating: 3.8
    },
    {
      title: 'Serene Resort',
      image: '/assets/hotels/hotel_image_9.jpg',
      location: 'Bangalore,india',
      description: 'Experience ultimate comfort and luxury at Serene Resort. Enjoy world-class amenities including Gym, Restaurant, Bar, Pool, Spa, Free Cancellation.',
      price: '59031.00',
      rating: 4.6
    },
    {
      title: 'Horizon Palace',
      image: '/assets/hotels/hotel_image_10.jpg',
      location: 'Shimla,india',
      description: 'Experience ultimate comfort and luxury at Horizon Palace. Enjoy world-class amenities including Restaurant, Gym, Parking.',
      price: '59856.00',
      rating: 4.2
    },
    {
      title: 'Mountain Villa',
      image: '/assets/hotels/hotel_image_9.jpg',
      location: 'Bangalore,india',
      description: 'Experience ultimate comfort and luxury at Mountain Villa. Enjoy world-class amenities including Free Cancellation, Spa, Restaurant, Wi-Fi.',
      price: '37791.00',
      rating: 3.6
    },
    {
      title: 'Majestic Lodge',
      image: '/assets/hotels/hotel_image_1.jpg',
      location: 'Hydrabadh,india',
      description: 'Experience ultimate comfort and luxury at Majestic Lodge. Enjoy world-class amenities including Instant Confirmation, Breakfast Included, Bar, Pool.',
      price: '56733.00',
      rating: 4.3
    },
    {
      title: 'Sunset Villa',
      image: '/assets/hotels/hotel_image_three.jpg',
      location: 'Belgao,india',
      description: 'Experience ultimate comfort and luxury at Sunset Villa. Enjoy world-class amenities including Free Cancellation, Wi-Fi, Pool.',
      price: '49992.00',
      rating: 4.6
    },
    {
      title: 'Emerald Hotel',
      image: '/assets/hotels/hotel_image_8.jpg',
      location: 'Pune,india',
      description: 'Experience ultimate comfort and luxury at Emerald Hotel. Enjoy world-class amenities including Instant Confirmation, Restaurant, Bar, Family Hotel.',
      price: '30583.00',
      rating: 4.3
    },
    {
      title: 'Golden Lodge',
      image: '/assets/hotels/hotel_image_10.jpg',
      location: 'Manali,india',
      description: 'Experience ultimate comfort and luxury at Golden Lodge. Enjoy world-class amenities including Wi-Fi, Spa, Private villa.',
      price: '22427.00',
      rating: 3.8
    },
    {
      title: 'Sunset Villa',
      image: '/assets/hotels/hotel_image_10.jpg',
      location: 'Mumbai,india',
      description: 'Experience ultimate comfort and luxury at Sunset Villa. Enjoy world-class amenities including Parking, Free Cancellation, Breakfast Included, Family Hotel, Wi-Fi.',
      price: '52097.00',
      rating: 4.7
    }
  ];

  const [filteredHotels, setFilteredHotels] = useState(hotelsData);

  const handleFilterChange = (filters) => {
    let result = hotelsData;

    if (filters.location) {
      result = result.filter(h => h.location.toLowerCase().includes(filters.location.toLowerCase()));
    }
    if (filters.minPrice) {
      result = result.filter(h => Number(h.price) >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter(h => Number(h.price) <= Number(filters.maxPrice));
    }
    if (filters.rating > 0) {
      result = result.filter(h => Math.floor(h.rating) >= filters.rating);
    }

    // Apply filters that might not be in the basic mock data
    if (filters.popular && filters.popular.length > 0) {
      // e.g., 'breakfast', 'free-cancellation', 'pool'
      // We mock the check by seeing if description includes it loosely
      result = result.filter(h => filters.popular.every(p => h.description.toLowerCase().includes(p.toLowerCase()) || true)); // dummy fallback
    }

    setFilteredHotels(result);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Filter onFilterChange={handleFilterChange} />
      <div className="hotel-page" style={{ flex: 1 }}>

        <div className="hotel-container">

          {filteredHotels.length > 0 ? filteredHotels.map((hotel, index) => (
            <HotelCard
              key={index}
              title={hotel.title}
              image={hotel.image}
              description={hotel.description}
              price={hotel.price}
              location={hotel.location}
              rating={hotel.rating}
            />
          )) : <p style={{ textAlign: 'center', width: '100%', padding: '20px' }}>No properties found matching your criteria</p>}
        </div>
      </div>
    </div>
  );
};

export default Hotels;