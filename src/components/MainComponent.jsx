import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const restaurantData = [
  {
    resname: "KFC",
    rating: 3.9,
    time: "35-40 mins",
    category: "Burgers, Fast Food, Rolls & Wraps",
    location: "Jalgaon",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/ca51121e-b178-44a4-a623-3c4f0bc02047_833270.JPG",
  },
  {
    resname: "Domino's Pizza",
    offer: "₹125 OFF ABOVE ₹1199",
    rating: 4.2,
    time: "20-25 mins",
    category: "Pizzas, Italian, Pastas, Desserts",
    location: "Jalgaon Locality",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/13/b1f14a68-fb9f-4048-afd2-1e21415f41f3_137350.JPG",
  },
  {
    resname: "Yadgar Chicken & Biryani Center",
    rating: 4.2,
    time: "35-40 mins",
    category: "Biryani, Punjabi, Chinese",
    location: "Ajantha Chowfuli",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e5fgimwp210i43kznxz6",
  },
  {
    resname: "Hotel Murali Manohar",
    rating: 4.2,
    time: "25-30 mins",
    category: "Punjabi, Chinese, South Indian, Pastas",
    location: "Akashwani",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xyiodbjdrj3bhndsplzh",
  },
  {
    resname: "Madhuram Sweets and Farsan",
    offer: "10% OFF UPTO ₹40",
    rating: 4.6,
    time: "25-30 mins",
    category: "Sweets, Snacks, Desserts",
    location: "Stadium Chowk",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/i6futvbb7gmtytcejvnp",
  },
  {
    resname: "Hotel Veg Aroma",
    rating: 4.3,
    time: "30-35 mins",
    category: "Punjabi, Chinese, Kebabs, Continental, Mexican, Japanese",
    location: "Akashwani",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f34657e4f398eec0e714971b58f8be69",
  },
  {
    resname: "SUKH SAGAR FAST FOOD",
    offer: "₹125 OFF ABOVE ₹249",
    rating: 3.8,
    time: "30-35 mins",
    category: "Chinese, Snacks, Beverages, Desserts",
    location: "Stadium complex",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sesxqsdldmjft1d7dgq6",
  },
  {
    resname: "Mahaveer Mix Ice Cream",
    offer: "₹150 OFF ABOVE ₹599",
    rating: 3.8,
    time: "25-30 mins",
    category: "Ice Cream, Beverages, Desserts",
    location: "Jaikisan Wadi",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/psfk3cs9sbkobfewlu9e",
  },
  {
    resname: "Amar Chat",
    rating: 4.4,
    time: "35-40 mins",
    category: "Chaat, Snacks, Street Food, Fast Food",
    location: "Pratap Nagar",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/is7ivfj8fykdc1qxshaq",
  },
  {
    resname: "Bhau Ragda",
    offer: "20% OFF ABOVE ₹699",
    time: "30-35 mins",
    category: "Snacks, Street Food, Chaat",
    location: "Bus Stand",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pqwr0wui5si3evvbppnv",
  },
];

const MainComponent = () => {
  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold">
        Restaurants with online food delivery
      </h2>
      <div className="filterItems flex gap-4 py-4">
        <h2 className="rounded-full border px-4 py-1 shadow-lg cursor-pointer">
          Filter
        </h2>
        <h2 className="rounded-full border px-4 py-1 shadow-lg cursor-pointer">
          Sort By
        </h2>
        <h2 className="rounded-full border px-4 py-1 shadow-lg cursor-pointer">
          Fast Delivery
        </h2>
      </div>

      {restaurantData && restaurantData.length > 0 ? (
        <div className="restaurants flex gap-6 mx-auto w-[85%]  flex-wrap ">
          {restaurantData.map((item, index) => (
            <div className="resCard py-4  shadow-custom">
              <img
                className="w-72 h-64 object-cover rounded-md "
                src={item.src}
                alt={item.resname}
              />
              <h2 className="resName font-bold">{item.resname}</h2>
              <p className="font-semibold">
                <span>
                  <FontAwesomeIcon icon={faStar} style={{ color: "green" }} className="pr-2" />
                  {item.rating}
                </span>{" "}
                <span>{item.time}</span>
              </p>
              <p className="w-[98%]">
                {item.category.length > 26
                  ? `${item.category.slice(0, 26)}...`
                  : item.category}
              </p>
              <p className="w-[98%]">{item.location}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-left  font-bold">No data to display</p>
      )}
    </div>
  );
};

export default MainComponent;
