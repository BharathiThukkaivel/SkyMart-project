import React from 'react';
import './carosel.css';

function Carosel() {
  return (
    <section>
      <div className="row">
        <h2 className="section-heading">Our Services</h2>
      </div>
      <div className="row">
        <ServiceCard iconClass="fas fa-hammer" heading="Product Variety" description="Explore a vast array of products ranging from electronics to fashion, ensuring there's something for everyone's needs and preferences." />
        <ServiceCard iconClass="fas fa-wrench" heading="Fast Delivery" description="Experience swift and reliable delivery services, ensuring your orders reach your doorstep in no time, enhancing convenience." />
        <ServiceCard iconClass="fas fa-truck-pickup" heading="Customer Support" description="Our dedicated customer support team is always ready to assist you, offering prompt solutions to any queries or concerns you may have." />
        <ServiceCard iconClass="fas fa-broom" heading="Easy Returns" description="Enjoy hassle-free returns and exchanges, making it simple to exchange or return products that don't meet your expectations." />
        <ServiceCard iconClass="fas fa-plug" heading="Personalized Shopping Experience" description="Our friendly and knowledgeable staff are here to assist you every step of the way. Whether you need help finding a specific item or want personalized recommendations, we're dedicated to making your shopping experience enjoyable and stress-free." />
        <ServiceCard iconClass="fas fa-brush" heading="Weekly Specials and Promotions" description="Take advantage of our weekly specials and promotions to enjoy fantastic savings on your favorite products. Keep an eye out for exclusive deals, discounts, and loyalty rewards as our way of saying thank you for choosing Skymart." />
      </div>
    </section>
  );
}

function ServiceCard({ iconClass, heading, description }) {
  return (
    <div className="column">
      <div className="card">
        <div className="icon-wrapper">
          <i className={iconClass}></i>
        </div>
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Carosel;
