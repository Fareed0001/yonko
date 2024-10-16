// import React from "react";
// import image from "../../assets/businesspeople.jpg";
// import image1 from "../../assets/order.jpg";
// import image2 from "../../assets/network.jpg";
// import image3 from "../../assets/man.jpg";
// import image4 from "../../assets/dogg.jpg";
// import image5 from "../../assets/camera.jpg";

// import { Parallax } from "react-parallax";

// const About = () => {
//   return (
//     <div className="about">
//       <div className="con">
//         <div className="top">
//           <h3>who we are</h3>
//         </div>

//         <div className="minibout">
//           <p>
//             At Yonko, we're more than just an online marketplace — we're your
//             ultimate one-stop-shop for convenience, quality, and community. We
//             were founded with a vision to simplify and enhance daily life, as
//             well as empower both general merchants and community services. With
//             our platform, you can easily access a wide variety of products and
//             services, all carefully curated to meet your high standards. From
//             grocery and household essentials to electronics and personal care
//             items, we've got you covered. Our team is dedicated to ensuring that
//             every interaction you have with us is seamless and enjoyable. But
//             we're not just about commerce. At Yonko, we believe in the power of
//             community. That's why we're committed to supporting local businesses
//             and service providers, and to creating meaningful connections
//             between our users. We're constantly innovating and expanding our
//             offerings to meet the evolving needs of our community. In short,
//             Yonko is more than a marketplace — it's a trusted partner, a vibrant
//             community, and a solution to your everyday needs.
//           </p>
//         </div>

//         <div className="conwordstop">
//           <div className="conwords">
//             <div className="words">
//               <h2>Your One-Stop Marketplace for Daily Essentials</h2>
//               <div className="rowone">
//                 <p>
//                   In today's fast-paced world, convenience is key. Yonko, a
//                   cutting-edge online marketplace, is revolutionizing the way we
//                   fulfill our daily needs. Whether you're craving your favorite
//                   snack, need to restock your medicine cabinet, or want to
//                   pamper yourself with some self-care products, Yonko has you
//                   covered.
//                 </p>

//                 <div className="img">
//                   <img src={image1} />
//                 </div>
//               </div>

//               <div className="rowone">
//                 <div className="img">
//                   <img src={image2} />
//                 </div>
//                 <p>
//                   At Yonko, we believe in creating opportunities for everyone.
//                   That's why we welcome both online and physical vendors to our
//                   platform. Whether you're a small business owner looking to
//                   expand your reach or an entrepreneur with a unique product,
//                   Yonko provides the perfect platform to showcase your offerings
//                   to a wide audience.
//                 </p>
//               </div>

//               <div className="rowone">
//                 <p>
//                   But Yonko doesn't stop there. We understand that logistics
//                   play a crucial role in ensuring smooth transactions. That's
//                   why we've invested heavily in our logistics department,
//                   streamlining the delivery process to ensure your orders reach
//                   you in a timely manner, no matter where you are.
//                 </p>

//                 <div className="img">
//                   <img src={image3} />
//                 </div>
//               </div>

//               <div className="rowone">
//                 <div className="img">
//                   <img src={image} />
//                 </div>
//                 <p>
//                   Our marketplace focuses on a variety of niches to cater to all
//                   your needs. From food and medicine to household supplies
//                   beauty products, tech accessories and clothing. Yonko offers a
//                   diverse range of products to make your everyday life easier.
//                   Need to stock up on groceries? Yonko's supermarket section has
//                   everything you need, from fresh produce to pantry staples.
//                   Looking to indulge in some self-care? Explore our beauty and
//                   spa section for a wide selection of skincare, haircare, and
//                   wellness products.
//                 </p>
//               </div>

//               <div className="rowone">
//                 <p>
//                   We haven't forgotten about our furry friends either. Yonko's
//                   pet supplies section offers everything you need to keep your
//                   beloved pets happy and healthy, from food and treats to toys
//                   and grooming essentials. And for all the plant lovers out
//                   there, our plant essentials section has a variety of plants,
//                   pots, and gardening tools to help you cultivate your indoor
//                   oasis.
//                 </p>

//                 <div className="img">
//                   <img src={image4} />
//                 </div>
//               </div>

//               <div className="rowone">
//                 <div className="img">
//                   <img src={image5} />
//                 </div>
//                 <p className="lastfont">
//                   At Yonko, we're committed to making everyday life easier for
//                   our customers. With our user-friendly platform, seamless
//                   transactions, and wide range of products, we're here to be
//                   your trusted partner in meeting your daily needs. Experience
//                   the convenience of Yonko today and make shopping a breeze.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="con3">
//         <div className="top"></div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React from "react";
import image from "../../assets/businesspeople.jpg";
import image1 from "../../assets/order.jpg";
import image2 from "../../assets/network.jpg";
import image3 from "../../assets/man.jpg";
import image4 from "../../assets/dogg.jpg";
import image5 from "../../assets/camera.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <section className="intro">
          <h3>Who We Are</h3>
          <p>
            At Yonko, we’re more than just an online marketplace — we’re your
            ultimate one-stop-shop for convenience, quality, and community. Our
            platform connects you with a wide variety of products and services,
            carefully curated to meet your high standards. From groceries to
            electronics, and personal care to local services, Yonko is here to
            simplify your daily life.
          </p>
        </section>

        <section className="features">
          <h2>Your One-Stop Marketplace for Daily Essentials</h2>

          <div className="feature">
            <p>
              Whether you need groceries, personal care items, or electronics,
              Yonko offers a seamless shopping experience for all your daily
              needs.
            </p>
            <img src={image1} alt="Convenience" />
          </div>

          <div className="feature">
            <img src={image2} alt="Community" />
            <p>
              We welcome small businesses and independent vendors to showcase
              their unique products, creating opportunities for everyone.
            </p>
          </div>

          <div className="feature">
            <p>
              With a strong logistics backbone, we ensure timely deliveries
              across the country. Wherever you are, Yonko makes shopping
              easier.
            </p>
            <img src={image3} alt="Logistics" />
          </div>

          <div className="feature">
            <img src={image} alt="Diverse Products" />
            <p>
              Explore a variety of niches, from food and medicine to tech
              accessories and beauty products, all available on our platform.
            </p>
          </div>

          <div className="feature">
            <p>
              Pet lovers can also find everything their pets need in our pet
              section, while plant enthusiasts can find a range of gardening
              essentials.
            </p>
            <img src={image4} alt="Pet Supplies" />
          </div>

          <div className="feature">
            <img src={image5} alt="Shopping Experience" />
            <p>
              Experience seamless transactions and find everything you need in
              one place. Yonko is here to simplify your daily life.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
