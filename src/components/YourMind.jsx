import Slider from "react-slick/lib/slider";

let mindList = [
  {
    id: 1,
    src: "MERCH/2024/10/8/aac2a15e-f379-400c-9473-559ddca1b242_POPULARCURATION4.png",
    category: "Vrat Specials",
  },
  {
    id: 2,
    src: "MERCH/2024/10/8/e32d2c4f-d100-4d90-a1c1-9001f71d5879_Vratspecialspctile.png",
    category: "Indian Sweeets",
  },
  {
    id: 3,
    src: "MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
    category: "Pizzas",
  },
  {
    id: 4,
    src: "MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
    category: "Biryani",
  },
  {
    id: 5,
    src: "MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate%20icecream.png",
    category: "Ice-Cream",
  },
  {
    id: 6,
    src: "MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png",
    category: "Chinese",
  },
  {
    id: 7,
    src: "MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
    category: "Rolls",
  },
  {
    id: 8,
    src: "MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png",
    category: "North-Indians",
  },
  {
    id: 9,
    src: "MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
    category: "Burgers",
  },
  {
    id: 10,
    src: "MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
    category: "Khichdi",
  },
];

const YourMind = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold">What's on your mind? </h2>
      {mindList && mindList.length > 0 ? (
        <Slider {...settings}>
          {mindList.map((item, index) => {
            return (
              <div className="cCard">
                <img
                  className="w-36"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/${item.src}`}
                  alt={item.category}
                />
              </div>
            );
          })}
        </Slider>
      ) : (
        <p> No item Found</p>
      )}
      
    </div>
  );
};

export default YourMind;
