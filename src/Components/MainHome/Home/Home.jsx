import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Location from "./Location/LocationBox";
import image from "../../../assets/merchant.jpg";
import imagee from "../../../assets/merchantt.jpg";
import images from "../../../assets/friedrice.jpg";
import images1 from "../../../assets/platter.jpg";
import images2 from "../../../assets/sandwich.jpg";
import images3 from "../../../assets/cheese.jpg";
import image1 from "../../../assets/man.jpg";
import images4 from "../../../assets/alcohol.jpg";
import images5 from "../../../assets/modern.jpg";
import images6 from "../../../assets/gel.jpg";
import images7 from "../../../assets/stethoscope.jpg";
import images8 from "../../../assets/medical.jpg";
import images9 from "../../../assets/basil.jpg";
import images10 from "../../../assets/aisle.jpg";
import images11 from "../../../assets/makeup.jpg";
import images12 from "../../../assets/succulents.jpg";
import images13 from "../../../assets/flower.jpg";
import images14 from "../../../assets/gardening.jpg";
import images15 from "../../../assets/flowers.jpg";
import images16 from "../../../assets/shopping.jpg";
import images17 from "../../../assets/ecommerce.jpg";
import images18 from "../../../assets/petss.jpeg";
import image19 from "/public/groceries 0.jpg";
import image20 from "/public/groceries 1.jpg";
import image21 from "/public/groceries 2.jpg";
import image22 from "/public/groceries 3.jpg";
import image23 from "/public/cusmetics 3.jpg";
import image24 from "/public/cusmetics 1.jpg";
import image25 from "/public/cusmetics 2.jpg";
import image26 from "/public/cusmetics 0.jpg";
import image27 from "/public/health 0.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Parallax } from "react-parallax";
import { IoIosPaw } from "react-icons/io";
import { RiPlantFill } from "react-icons/ri";
import { BiSolidDrink } from "react-icons/bi";
import { GiClothes } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { LiaBroomSolid } from "react-icons/lia";
import Map from "../../Maps/Map";
import SearchBar from "./SearchBar";
import {
  onlineRestaurants,
  localRestaurants,
} from "../../../assets/data/restaurantsdata.json";
import {
  onlinePharmacies,
  localPharmacies,
} from "../../../assets/data/drugsdata.json";
import {
  onlineGroceries,
  localGroceries,
} from "../../../assets/data/grocerydata.json";

import { onlineSpas, localSpas } from "../../../assets/data/beautydata.json";

import {
  onlineClothingItems,
  localClothingItems,
} from "../../../assets/data/clothingdata.json";

import {
  onlineHouseholdSupplies,
  localHouseholdSupplies,
} from "../../../assets/data/householddata.json";

import {
  onlinePetSupplies,
  localPetSupplies,
} from "../../../assets/data/petdata.json";

import { onlinePlants, localPlants } from "../../../assets/data/plantdata.json";

import {
  onlineTechSupplies,
  localTechSupplies,
} from "../../../assets/data/techdata.json";
import ViewAllPredictions from "./ViewAllPredictions";

// MATERIAL UI 
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// REACT ICONS
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";







const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const [searchResults, setSearchResults] = useState([]);
  const [predictions, setPredictions] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
    setPredictions(results); // Update predictions state
  };

  const handleViewAll = () => {
    // Update predictions state when user clicks on "View All" button
    setPredictions(searchResults);
  };

  const dataArrays = [
    onlineRestaurants,
    localRestaurants,

    onlinePharmacies,
    localPharmacies,
    onlineGroceries,
    localGroceries,
    onlineSpas,
    localSpas,
    onlineClothingItems,
    localClothingItems,
    onlineHouseholdSupplies,
    localHouseholdSupplies,
    onlinePetSupplies,
    localPetSupplies,
    onlinePlants,
    localPlants,
    onlineTechSupplies,
    localTechSupplies,
  ];

  return (
    <div className="home">
      <div className="con">
        <div className="imgcon">
          <div className="headall">
            <div className="headcon">
              <div
                className="head"
                data-aos="slide-right"
                data-aos-duration="1000"
              >
                <h2>Shop Smart. <span>Live Better.</span></h2>
                <p>Discover your one-stop marketplace for everyday essentials and support <strong>local businesses</strong> — all at your fingertips.</p>
              </div>

              <div
                className="search"
                data-aos="slide-right"
                data-aos-duration="3000">
                <SearchBar dataArrays={dataArrays} onSearch={handleSearch} />
              </div>

              <Stack direction="row" spacing={2} className="appDownloadDiv">
                <Button variant="contained" startIcon={<FaApple />} size="large"
                  sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#333' } }}>
                  Apple
                </Button>
                <Button variant="contained" startIcon={<IoLogoGooglePlaystore />} size="large">
                  Andriod
                </Button>
              </Stack>

            </div>
          </div>
        </div>

        <div className="miniad">
          <div className="adcon">
            {/* <div className="ad1">
              <div className="center">
                <div className="topp">
                  <h3>Welcome</h3>
                </div>

                <div className="words">
                  <p>
                    At Yonko, we're more than just an online marketplace — we're
                    your ultimate one-stop-shop for convenience, quality, and
                    community. We were founded with a vision to simplify and
                    enhance daily life, as well as empower both general
                    merchants and community services. With our platform, you can
                    easily access a wide variety of products and services, all
                    carefully curated to meet your high standards. From grocery
                    and household essentials to electronics and personal care
                    items, we've got you covered. Our team is dedicated to
                    ensuring that every interaction you have with us is seamless
                    and enjoyable. But we're not just about commerce. At Yonko,
                    we believe in the power of community. That's why we're
                    committed to supporting local businesses and service
                    providers, and to creating meaningful connections between
                    our users. We're constantly innovating and expanding our
                    offerings to meet the evolving needs of our community. In
                    short, Yonko is more than a marketplace — it's a trusted
                    partner, a vibrant community, and a solution to your
                    everyday needs.
                  </p>
                </div>
              </div>
            </div> */}

            <div className="ad1">
              <div className="left">
                <div className="top">
                  <h3>Satisfy Every Craving, Anytime, Anywhere.</h3>
                </div>

                <div className="words">
                  <p>
                    From special celebrations like birthdays, anniversaries, and weddings to
                    the busiest work and school days, Yonko is here to satisfy your cravings.
                    Explore a world of local and international cuisines, all delivered swiftly
                    and conveniently to your doorstep. We prioritize your convenience with every order.
                  </p>
                </div>

                <div className="btn">
                  <Button href="/restaurants/*" variant="contained" size="large">
                    Find Your Craving
                  </Button>
                </div>
              </div>

              <div className="right">
                <div className="imgconn">
                  <img src={images} />
                  <img src={images2} />

                  <img src={images1} />
                  <img src={images3} />
                </div>
              </div>
            </div>

            <div className="ad2">
              <div className="left">
                <div className="imgconn">
                  <img src={images6} />
                  <img src={images7} />
                  <img src={image27} />
                  <img src={images8} />
                </div>
              </div>

              <div className="right">
                <div className="top">
                  <h3>Fast & Reliable Health Deliveries</h3>
                </div>

                <div className="words">
                  <p>
                    Whether it's prescription refills or essential health products, we ensure quick and
                    dependable delivery straight to your door. Prioritize your well-being with our
                    seamless service, designed for your convenience. Health made easier, just a few clicks away.
                  </p>
                </div>

                <div className="btn">
                  <Button href="/pharmacies/*" variant="contained" size="large">
                    Shop Health Essentials
                  </Button>
                </div>
              </div>
            </div>

            <div className="spacer"></div>

            <div className="ad1">
              <div className="left">
                <div className="top">
                  <h3>Fresh Groceries, Fast Deliveries.</h3>
                </div>

                <div className="words">
                  <p>
                    Experience the convenience of having groceries and home essentials delivered right to your doorstep.
                    From fresh produce to everyday necessities, our curated selection is tailored to enhance your lifestyle.
                    Enjoy seamless ordering and delivery at your fingertips.
                  </p>
                </div>

                <div className="btn">
                  <Button href="/restaurants/*" variant="contained" size="large">
                    Shop Groceries
                  </Button>
                </div>
              </div>

              <div className="right">
                <div className="imgconn">
                  <img src={image19} />
                  <img src={image20} />

                  <img src={image21} />
                  <img src={image22} />
                </div>
              </div>
            </div>

            {/* <div className="ad8">
              <div className="right">
                <div className="imgconn">
                  <Parallax
                    strength={-200}
                    blur={{ min: 0.5, max: 0.5 }}
                    bgImage={images10}
                    className="pa1"
                  >
                    <div className="conwordss">
                      <div className="top">
                        <h3>Your Favorite Cosmetics and accessories</h3>
                      </div>

                      <div className="words">
                        <p>
                          Indulge in the art of beauty without leaving your
                          comfort zone. Our cosmetics Partners brings your
                          favorite makeup essentials and we come straight to
                          your doorstep.
                        </p>
                        <div className="btn">
                          <a href="/beautyproducts/*">Beauty Stores</a>
                        </div>
                      </div>
                    </div>
                  </Parallax>
                </div>
              </div>

              <div className="left">
                <div className="top">
                  <h3>Bringing the Market to You</h3>
                </div>

                <div className="words">
                  <p>
                    Discover the joy of effortless living with our all-in-one
                    grocery and home essentials delivery. From fresh produce to
                    everyday necessities, curated to fit seamlessly into your
                    lifestyle. Order with ease.
                  </p>
                </div>

                <div className="btn">
                  <a href="/groceries/*">
                    Grocery Stores <GiClothes />
                  </a>
                </div>
              </div>
            </div> */}


            <div className="ad2">
              <div className="left">
                <div className="imgconn">
                  <img src={image25} />
                  <img src={image24} />
                  <img src={image26} />
                  <img src={image23} />
                </div>
              </div>

              <div className="right">
                <div className="top">
                  <h3>Your Favorite Glam, Right at Your Door.</h3>
                </div>

                <div className="words">
                  <p>
                    Discover the convenience of having your favorite cosmetics and accessories delivered straight to your
                    home. From top makeup brands to everyday beauty essentials, we bring the best right to your doorstep.
                    Elevate your beauty routine without stepping out.
                  </p>
                </div>

                <div className="btn">
                  <Button href="/pharmacies/*" variant="contained" size="large">
                    Shop Beauty Now
                  </Button>
                </div>
              </div>
            </div>


            {/* <div className="ad8">
              <div className="left">
                <div className="top">
                  <h3>Your Favorite Cosmetics and accessories</h3>
                </div>

                <div className="words">
                  <p>
                    Indulge in the art of beauty without leaving your comfort
                    zone. Our cosmetics Partners brings your favorite makeup
                    essentials and we come straight to your doorstep.
                  </p>
                </div>

                <div className="btn">
                  <a href="/beautyproducts/*">Beauty Stores</a>
                </div>
              </div>

              <div className="right">
                <div className="imgconn">
                  <Parallax
                    strength={-200}
                    blur={{ min: 0.5, max: 0.5 }}
                    bgImage={images11}
                    className="pa1"
                  >
                    <div className="conwordss">
                      <div className="top">
                        <h3>Your Favorite Cosmetics and accessories</h3>
                      </div>

                      <div className="words">
                        <p>
                          Indulge in the art of beauty without leaving your
                          comfort zone. Our cosmetics Partners brings your
                          favorite makeup essentials and we come straight to
                          your doorstep.
                        </p>
                        <div className="btn">
                          <a href="/beautyproducts/*">Beauty Stores</a>
                        </div>
                      </div>
                    </div>
                  </Parallax>
                </div>
              </div>
            </div> */}

            <div className="spacer"></div>

            <div className="cardDiv">

              <Card className='cardDivCard'>
                <CardMedia
                  component="img"
                  alt="Pet"
                  height="200"
                  src={images18}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Pawsome Deliveries
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Treat your furry friends to the best! From gourmet pet meals to cozy beds, playful toys,
                    and trendy gear, we've got everything you need to keep them happy. Delivered right to your
                    doorstep, making every day a tail-wagging delight.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href="/pets/*">Shop Pet Perks</Button>
                </CardActions>
              </Card>


              <Card className='cardDivCard'>
                <CardMedia
                  component="img"
                  alt="Plant"
                  height="200"
                  src={images15} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Nature's Touch
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Transform your space with our lush greens and vibrant blooms. We've got everything you need to
                    enhance your indoor oasis. Elevate your plant game and bring nature's beauty right to your home
                    with ease.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href="/pets/*">Explore the Greenery</Button>
                </CardActions>
              </Card>


              <Card className='cardDivCard'>
                <CardMedia
                  component="img"
                  alt="fashion"
                  height="200"
                  src={images16} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Elevate Your Wardrobe
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Discover unique styles and confidence-boosting fashion from our curated collection of clothing,
                    accessories, and footwear.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href="/clothings/*">Shop Now</Button>
                </CardActions>
              </Card>


              <Card className='cardDivCard'>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  src={images5}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tech & Home Essentials
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Explore a world of cutting-edge gadgets and thoughtfully curated household essentials.
                    From the latest tech innovations to elegant home goods, enhance productivity, entertainment,
                    and your living space all in one place.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href="/techs/*">Gadgets</Button>
                  <Button size="small" href="/households/*">Home Appliances</Button>
                </CardActions>
              </Card>

            </div>

            {/* <div className="ad9">
              <div className="right">
                <div className="imgconn">
                  <img src={images18} alt="" />
                </div>
              </div>

              <div className="left">
                <div className="top">
                  <h3>Pet Perks Delivered</h3>
                </div>

                <div className="words">
                  <p>
                    From gourmet meals to trendy gear to cozy beds and playful
                    toys, Enjoy hassle-free deliveries and make every day a
                    tail-wagging delight!
                  </p>
                </div>

                <div className="btn">
                  <a href="/pets/*">
                    Pet Stores <IoIosPaw />
                  </a>
                </div>
              </div>
            </div>

            <div className="ad6">
              <div className="left">
                <div className="imgconn">
                  <img src={images12} />
                  <img src={images13} />
                  <img src={images14} />
                  <img src={images15} />
                </div>
              </div>

              <div className="right">
                <div className="top">
                  <h3>Nature's Touch.</h3>
                </div>

                <div className="words">
                  <p>
                    Transform Your Space From lush greens to vibrant blooms,
                    we've got everything to enhance your indoor oasis, Elevate
                    your plant game by bringing nature's beauty right to your
                    home.
                  </p>
                </div>

                <div className="btn">
                  <a href="/plants/*">
                    Greenry Collection <RiPlantFill />
                  </a>
                </div>
              </div>
            </div>

            <div className="ad8">
              <div className="right">
                <div className="imgconn">
                  <img src={images16} alt="" />
                </div>
              </div>

              <div className="left">
                <div className="top">
                  <h3>Curating Fashion for the Modern Wardrobe</h3>
                </div>

                <div className="words">
                  <p>
                    Discover the world of fashion that expresses your unique
                    style, enhances your confidence, and transforms your
                    wardrobe. Explore a diverse collection of clothing,
                    accessories, and footwear designed to elevate your look and
                    reflect your personality.
                  </p>
                </div>

                <div className="btn">
                  <a href="/clothings/*">
                    Clothing Stores <GiClothes />
                  </a>
                </div>
              </div>
            </div>

            <div className="ad9">
              <div className="left">
                <div className="top">
                  <h3>
                    Tech Emporium: Unleashing Innovation for a Connected World
                  </h3>
                </div>

                <div className="words">
                  <p>
                    Dive into a vast array of gadgets, devices, and tools
                    designed to enhance productivity, entertainment, and
                    communication. Discover cutting-edge innovations that shape
                    the future and experience the power of tech at your
                    fingertips.
                  </p>
                </div>

                <div className="btn">
                  <a href="/techs/*">
                    Tech & Gadgets <GrTechnology />
                  </a>
                </div>
              </div>

              <div className="right">
                <div className="imgconn">
                  <img src={images17} alt="" />
                </div>
              </div>
            </div>

            <div className="ad7">
              <div className="left">
                <div className="top">
                  <h3>Appliances & Household Goods</h3>
                </div>

                <div className="words">
                  <p>
                    Immerse yourself in a world of curated elegance, where every
                    piece tells a story and contributes to a harmonious living
                    space. Explore a diverse collection of home essentials,
                    thoughtfully designed to elevate your surroundings and
                    create a warm, inviting atmosphere.
                  </p>
                </div>

                <div className="btn">
                  <a href="/households/*">
                    Household Supplies <LiaBroomSolid />
                  </a>
                </div>
              </div>

              <div className="right">
                <div className="imgconn">
                  <Parallax
                    strength={-200}
                    blur={{ min: 0.1, max: 0.5 }}
                    bgImage={images5}
                    className="pa3"
                  >
                    <h1>Hello</h1>
                  </Parallax>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="rowcon">
          <div className="topof">
            <h2>Explore Yonko</h2>
          </div>
          <div className="allrow">
            <div className="merchant">
              <a href="/merchant">
                <img src={imagee} />
              </a>
              <div className="caption">
                <a href="/merchant">
                  <h4>Become a Merchant</h4>
                  <FaArrowRightLong className="icon" />
                </a>
              </div>
            </div>

            <div className="merchant">
              <a href="/rider">
                <img src={image1} />
              </a>
              <div className="caption">
                <a href="/rider">
                  <h4>Join Logistics team</h4>
                  <FaArrowRightLong className="icon" />
                </a>
              </div>
            </div>

            <div className="merchant">
              <a href="">
                <img src={image} />
              </a>
              <div className="caption">
                <a href="">
                  <h4>Get the Full Experience</h4>
                  <FaArrowRightLong className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mapping"></div>
    </div>
  ); 
};

export default Home;
