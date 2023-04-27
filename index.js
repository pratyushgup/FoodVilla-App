import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      src="https://content.jdmagicbox.com/comp/rayagada/r1/9999p6856.6856.220317231853.s9r1/catalogue/the-food-villa-family-restaurant-gunupur-gunupur-rayagada-restaurants-zu4jzj8a1p.jpg"
      alt="logo"
      className="logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      {Title()}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restrautList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "147619",
      name: "Jai Shree Shankar Punjabi Dhaba",
      uuid: "11c317e4-da0e-48b7-88db-0856a9790f31",
      city: "50",
      area: "Civil Lines",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "slfbprrckr7jk1zm58rd",
      cuisines: ["Indian", "North Indian"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "jai-shree-shankar-punjabi-dhaba-civil-lines-civil-lines",
        city: "allahabad",
      },
      cityState: "50",
      address: "29/61, M.G.Road, Civil Lines, Allahabad",
      locality: "Mahatma Gandhi Marg",
      parentId: 108723,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1700,
        message: "",
        title: "Delivery Charge",
        amount: "1700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6532447~p=1~eid=00000187-c1c5-beae-0782-943300140160",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "147619",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.6",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "253769",
      name: "McDonald's",
      uuid: "ea982dbd-511e-4de2-8b27-31dfde243ad7",
      city: "50",
      area: "Civil Lines",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "1293a58ab5610f4c730c3d8cb6ac1b65",
      cuisines: ["American"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 18,
      minDeliveryTime: 18,
      maxDeliveryTime: 18,
      slaString: "18 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "mcdonalds-up-allahabad-atlantis-civil-lines",
        city: "allahabad",
      },
      cityState: "50",
      address:
        "UP Allahabad Atlantis, UG- 4, 34-B, Atlantis Mall. Mahatma Gandhi Marg  Civil Lines. Allahabad (UP)- 211001",
      locality: "Mahatma Gandhi Marg",
      parentId: 630,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1700,
        message: "",
        title: "Delivery Charge",
        amount: "1700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "253769",
        deliveryTime: 18,
        minDeliveryTime: 18,
        maxDeliveryTime: 18,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "437010",
      name: "Burger King",
      uuid: "e2448928-1521-428e-b25e-bb2e8fc17dd5",
      city: "50",
      area: "Civil Lines",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "28fb13049b4e55297bb3f703cde63c35",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 0.30000001192092896,
      slugs: {
        restaurant: "burger-king-vinayak-citi-center-mall-civil-lines",
        city: "allahabad",
      },
      cityState: "50",
      address:
        "Shop No. 20, 21 & 22, Vinayak City Centre Mall, Ground Floor, Oild katra, Allahabad, Nagar Nigam Food Safety Zone-12, Varanasi, Uttar Pradesh, 211003",
      locality: "Vinayak City Centre Mall",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Get every item under 129",
        shortDescriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1700,
        message: "",
        title: "Delivery Charge",
        amount: "1700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "437010",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 0.30000001192092896,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
];
const RestrauntCard = ({restaurant}) => {
  const {cloudinaryImageId,name,cuisines,lastMileTravelString,avgRating} = restaurant.data
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restraunt-list">
      {/* {restrautList.map((restaurant)=>{
        return <RestrauntCard {...restaurant}/>
      })} */}
      <RestrauntCard restaurant = {restrautList[0]}/>
      <RestrauntCard restaurant = {restrautList[1]}/>
      <RestrauntCard restaurant = {restrautList[2]}/>
      <RestrauntCard restaurant = {restrautList[0]}/>
      <RestrauntCard restaurant = {restrautList[1]}/>
      <RestrauntCard restaurant = {restrautList[2]}/>
      <RestrauntCard restaurant = {restrautList[0]}/>
      <RestrauntCard restaurant = {restrautList[1]}/>
      <RestrauntCard restaurant = {restrautList[2]}/>
      <RestrauntCard restaurant = {restrautList[0]}/>
      
    </div>
  );
};
const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
