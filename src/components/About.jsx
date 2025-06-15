        import React from 'react';
        import { motion } from 'framer-motion';
       import './About.css';
        const About = () => {
          return (
            <div className="about-us-container">
            
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }} >
              <h1 style={{marginLeft:'540px'}} className='about'>About Us</h1>
              <hr></hr>
              <section className="about-section">
                <h2 className='story'>Our Story</h2>
                <p>Welcome to Luxury Inn, where comfort meets elegance. Our hotel was established in 2005 with the goal of providing
                  a luxurious and unforgettable experience for our guests. Located in the heart of New York City, we offer an oasis
                  of tranquility amidst the bustling city life.</p>
              </section>
              <section className="about-section">
                <h2 className='story'>Our Mission</h2>
                <p>Our mission is to create an exceptional guest experience by offering personalized services, elegant accommodations, 
                  and world-class amenities. We strive to make every stay memorable and delightful, ensuring that our guests feel like
                  they are at home away from home.</p>
              </section>
              <section className="about-section">
                  <h2 className='story'>Our Values</h2>
                    <ul>
                        <li><strong>Customer Satisfaction:</strong> Our guests are at the heart of everything we do.</li>
                        <li><strong>Excellence:</strong> We are committed to maintaining the highest standards in all aspects of our service.</li>
                        <li><strong>Integrity:</strong> We act with honesty and transparency in all our interactions.</li>
                        <li><strong>Innovation:</strong> We continually seek new ways to enhance our guests' experience.</li>
                  </ul>
              </section>
                <section className="about-section">
                <h2 className='story'>Our Team</h2>
                <p>
                  Our dedicated team of professionals is passionate about hospitality and committed to providing the best experience
                  for our guests. From our front desk staff to our housekeeping team, everyone plays a vital role in ensuring your
                  stay is perfect.
                </p>
                </section>
              </motion.div>
            </div>
          );
        };
     export default About;
