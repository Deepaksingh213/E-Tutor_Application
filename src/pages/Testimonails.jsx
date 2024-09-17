import React from 'react';
import Slider from "react-slick";

const cardData = [
    {
      id: 1,
      name: "Jone Doe",
      title: "Jone Doe",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Jane Smith",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Robert Brown",
      title: "Robert Brown",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Emily Clark",
      title: "Emily Clark",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 5,
      name: "John Appleseed",
      title: "John Appleseed",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 6,
      name: "Alice Johnson",
      title: "Alice Johnson",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 7,
      name: "Tom Davis",
      title: "Tom Davis",
      desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 8,
      name: "Sarah Wilson",
      title: "Sarah Wilson",
      desc: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      image: "https://via.placeholder.com/150"
    }
];

const Testimonails = () => {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
    <div className="md:py-16 py-14">
        <div className="container mx-auto">
          <div className="max-w-[600px] p-6 text-center mx-auto mb-5 space-y-4">
            <p className="font-semibold text-2xl text-orange-700 uppercase">OUR TESTIMONIALS</p>
            <h1 className="text-2xl font-semibold leading-tight">What Our Students Say About Us</h1>
          </div>

          <Slider {...settings}>
             {
                cardData.map((item) => {
                    return (
                        <div key={item.id} className="p-4">
                            <div className="flex flex-col gap-4 p-6 shadow-lg mx-auto rounded-xl bg-fourth/10 max-w-[380px] h-[230px]">
                                <div className="flex justify-start items-center gap-4">
                                    <img src={item.image} alt="image" className="w-16 h-16 rounded-full" />
                                    <div>
                                        <p className="text-xl font-bold text-black/80">{item.name}</p>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                                <div className="py-4 space-y-4">
                                    <h6 className="text-sm text-gray-500 line-clamp-3">{item.desc}</h6>
                                </div>
                            </div>
                        </div>
                    );
                })
             }
          </Slider>
        </div>
    </div>
    </>
  );
};

export default Testimonails;
