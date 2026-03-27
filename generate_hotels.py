import json
import random

locations = ['Jaipur', 'Kerala', 'Bangalore', 'Manali', 'TamilNadu', 'Pune', 'Goa', 'Mumbai', 'Hydrabadh', 'Ooty', 'Shimla', 'Shrinagar', 'Dehli', 'Belgao', 'Kasauli']
images = ['/assets/hotels/hotel_image_one.jpg', '/assets/hotels/hotel_image_two.jpg', '/assets/hotels/hotel_image_three.jpg', '/assets/hotels/hotel_image_four.jpg', '/assets/hotels/hotel_image_1.jpg', '/assets/hotels/hotel_image_2.jpg', '/assets/hotels/hotel_image_7.jpg', '/assets/hotels/hotel_image_8.jpg', '/assets/hotels/hotel_image_9.jpg', '/assets/hotels/hotel_image_10.jpg', '/assets/hotels/hotel_image_11.jpg', '/assets/hotels/hotel_image_12.jpg']
adjectives = ['The Grand', 'Royal', 'Majestic', 'Serene', 'Crystal', 'Golden', 'Seaside', 'Mountain', 'Emerald', 'Sunset', 'Oasis', 'Luxury', 'Paradise', 'Horizon']
types = ['Resort', 'Hotel', 'Villa', 'Suites', 'Palace', 'Retreat', 'Inn', 'Lodge']
features = ['Free Cancellation', 'Breakfast Included', 'Pool', 'Instant Confirmation', 'Wi-Fi', 'Parking', 'Gym', 'Family Hotel', 'Private villa', 'Restaurant', 'Bar', 'Spa']

hotels = []
for i in range(60):
    title = f"{random.choice(adjectives)} {random.choice(types)}"
    location = f"{random.choice(locations)},india"
    image = random.choice(images)
    price = f"{random.randint(4000, 95000)}.00"
    rating = round(random.uniform(3.5, 5.0), 1)
    
    # Description incorporating random features
    selected_features = random.sample(features, k=random.randint(3, 6))
    desc = f"Experience ultimate comfort and luxury at {title}. Enjoy world-class amenities including {', '.join(selected_features)}."
    
    hotels.append({
        'title': title,
        'image': image,
        'location': location,
        'description': desc,
        'price': price,
        'rating': rating
    })

# Format to JS string
js_str = "    " + ",\n    ".join([
    "{\n" +
    f"      title: '{h['title']}',\n" +
    f"      image: '{h['image']}',\n" +
    f"      location: '{h['location']}',\n" +
    f"      description: '{h['description']}',\n" +
    f"      price: '{h['price']}',\n" +
    f"      rating: {h['rating']}\n" +
    "    }" for h in hotels])

# Read original file
file_path = r"d:\Hotel-App\hotel-website\src\Hotels.jsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace between "const hotelsData = [" and "  ];\n\n  const [filteredHotels"
start_idx = content.find("const hotelsData = [\n") + len("const hotelsData = [\n")
end_idx = content.find("  ];\n\n  const [filteredHotels")

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + js_str + "\n" + content[end_idx:]
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully updated Hotels.jsx with 60 hotels")
else:
    print("Could not find the target indices")
