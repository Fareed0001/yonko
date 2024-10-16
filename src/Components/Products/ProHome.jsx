import React from "react";
import image from "../../assets/fastfood.jpg";
import image1 from "../../assets/health.jpg";
import image2 from "../../assets/grocery.jpg";
import image3 from "../../assets/drink.jpg";
import image4 from "../../assets/beauty.jpg";
import image5 from "../../assets/pet.jpg";
import image6 from "../../assets/plant.jpg";
import image7 from "../../assets/household.jpg";
import image8 from "../../assets/tech.jpg";
import image9 from "../../assets/clothing.jpg";
import Location from "../MainHome/Home/Location/LocationBox";
import Filter from "../Filter/Filter";
import SearchBar from "../MainHome/Home/SearchBar";

const ProHome = () => {
  return (
    <div className="prohome">
      <div className="con">
        <div className="top">
          <h2>What Do You Need?</h2>
        </div>

        <div className="search">
          <div className="locatee"></div>

          <div className="gensearch"></div>
        </div>

        <div className="boxescon">
          <div className="all">
            <div className="box">
              <a href="/restaurants/*">
                <div className="img">
                  <img src={image} />
                </div>

                <p>Food & Beverages</p>
              </a>
            </div>

            <div className="box">
              <a href="/pharmacies/*">
                <div className="img">
                  <img src={image1} />
                </div>

                <p>Medicine & Pharmacy</p>
              </a>
            </div>

            <div className="box">
              <a href="/groceries/*">
                <div className="img">
                  <img src={image2} />
                </div>

                <p>SuperMarket & Grocery</p>
              </a>
            </div>

            <div className="box">
              <a href="/households/*">
                <div className="img">
                  <img src={image7} />
                </div>

                <p>Household Supplies</p>
              </a>
            </div>

            <div className="box">
              <a href="/beautyproducts/*">
                <div className="img">
                  <img src={image4} />
                </div>

                <p>Spa & Beauty Accessories</p>
              </a>
            </div>

            <div className="box">
              <a href="/pets/*">
                <div className="img">
                  <img src={image5} />
                </div>

                <p>Pet Supplies</p>
              </a>
            </div>

            <div className="box">
              <a href="/techs/*">
                <div className="img">
                  <img src={image8} />
                </div>

                <p>Tech Gadgets & Accessories</p>
              </a>
            </div>

            <div className="box">
              <a href="/clothings/*">
                <div className="img">
                  <img src={image9} />
                </div>

                <p>Wardrobe</p>
              </a>
            </div>

            <div className="box">
              <a href="/plants/*">
                <div className="img">
                  <img src={image6} />
                </div>

                <p> Plant Essentials</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProHome;
