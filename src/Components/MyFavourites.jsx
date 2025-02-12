// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import plus from '../assets/images/Plus.svg'
// import excel from '../assets/images/excel.svg'
// import businessman from '../assets/images/businessman.svg'
// import page from '../assets/images/page.svg'
// import folder from '../assets/images/folder.svg'
// import salary from '../assets/images/salary.svg'
// import form from '../assets/images/form.svg'
// import mail from '../assets/images/mail.svg'
// import holiday from '../assets/images/holiday.svg'
// import leave from '../assets/images/leave.svg'
// import wfh from '../assets/images/work-from-home.svg'
// import birthday from '../assets/images/birthday.svg'
// import anniversary from '../assets/images/anniversary.svg'
// import new_joinee from '../assets/images/new-joinee.svg'
// import eleanor from '../assets/images/eleanor-pena.png'
// import arlene from '../assets/images/arlene-mcCoy.png'
// import guy_hawkins from '../assets/images/guy-hawkins.png'
// import devon_lane from '../assets/images/devon-lane.png'
// import bessie from '../assets/images/bessie-cooper.png'
// import post from '../assets/images/post.svg'
// import polling from '../assets/images/polling.svg'

// const MyFavourites = () => {
//     const settings = {
//         dots: false, // Hide dots
//         infinite: false, // Disable infinite loop
//         speed: 500, // Transition speed
//         slidesToShow: 4, // Number of slides to show at once
//         slidesToScroll: 1, // Number of slides to scroll
//         responsive: [
//             {
//                 breakpoint: 1024, // For screens smaller than 1024px
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 600, // For screens smaller than 600px
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 480, // For screens smaller than 480px
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <div className="contentBox">
//             <h3>My Favourites</h3>
//             <div className="myFavouriteBox">
//                 <div className="favouriteAddAction">
//                     <a href="">
//                         <div className="myFavIcon">
//                             <img src={plus} alt="Add" />
//                         </div>
//                     </a>
//                 </div>
//                 <Slider {...settings}>
//                     <div className="item">
//                         <a href="">
//                             <div className="myFavIcon">
//                                 <img src={excel} alt="Excel" />
//                             </div>
//                             <span>Import Data From Excel</span>
//                         </a>
//                     </div>
//                     <div className="item">
//                         <a href="">
//                             <div className="myFavIcon">
//                                 <img src={businessman} alt="Add Employee" />
//                             </div>
//                             <span>Add Employee</span>
//                         </a>
//                     </div>
//                     <div className="item">
//                         <a href="">
//                             <div className="myFavIcon">
//                                 <img src={page} alt="Employee Separation" />
//                             </div>
//                             <span>Employee Separation</span>
//                         </a>
//                     </div>
//                     <div className="item">
//                         <a href="">
//                             <div className="myFavIcon">
//                                 <img src={folder} alt="Bulk Data Upload" />
//                             </div>
//                             <span>Bulk Data Upload</span>
//                         </a>
//                     </div>
//                     <div className="item">
//                         <a href="">
//                             <div className="myFavIcon">
//                                 <img src={salary} alt="Process Payroll" />
//                             </div>
//                             <span>Process Payroll</span>
//                         </a>
//                     </div>
//                     <div className="item">
//                         <a href="">
//                             <div className="myFavIcon">
//                                 <img src={form} alt="Grant Leave" />
//                             </div>
//                             <span>Grant Leave</span>
//                         </a>
//                     </div>
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default MyFavourites;

import React from 'react';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import plus from '../assets/images/Plus.svg';
import excel from '../assets/images/excel.svg';
import businessman from '../assets/images/businessman.svg';
import page from '../assets/images/page.svg';
import folder from '../assets/images/folder.svg';
import salary from '../assets/images/salary.svg';
import form from '../assets/images/form.svg';
import prevArrow from '../assets/images/prev.svg';
import nextArrow from '../assets/images/next.svg';

const favourites = [
    { img: excel, alt: 'Excel', label: 'Import Data From Excel' },
    { img: businessman, alt: 'Add Employee', label: 'Add Employee' },
    { img: page, alt: 'Employee Separation', label: 'Employee Separation' },
    { img: folder, alt: 'Bulk Data Upload', label: 'Bulk Data Upload' },
    { img: salary, alt: 'Process Payroll', label: 'Process Payroll' },
    { img: form, alt: 'Grant Leave', label: 'Grant Leave' },
];

const CustomPrevArrow = () => (
    <button className="custom-arrow prev-arrow" onClick={() => sliderRef.current?.slickPrev()}>
        <img src={prevArrow} alt="Previous" />
    </button>
);

const CustomNextArrow = () => (
    <button className="custom-arrow next-arrow" onClick={() => sliderRef.current?.slickNext()}>
        <img src={nextArrow} alt="Next" />
    </button>
);

const MyFavourites = () => {
    const sliderRef = useRef(null); // Create a ref for Slider

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        draggable: true,
        touchMove: true,  
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    return (
        <div className="contentBox">
            <div className="header-container">
                <h3>My Favourites</h3>
                <div className="arrow-container">
                    <button className="custom-arrow prev-arrow" onClick={() => sliderRef.current.slickPrev()}>
                        <img src={prevArrow} alt="Previous" />
                    </button>
                    <button className="custom-arrow next-arrow" onClick={() => sliderRef.current.slickNext()}>
                        <img src={nextArrow} alt="Next" />
                    </button>
                </div>
            </div>
            <div className="myFavouriteBox">
                <div className="favouriteAddAction">
                    <a href="#">
                        <div className="myFavIcon">
                            <img src={plus} alt="Add" />
                        </div>
                    </a>
                </div>
                <div className="myFavSlider owl-carousel" style={{ overflow: 'hidden', position: 'relative' }}>
                    <Slider ref={sliderRef} {...settings}>
                        {favourites.map((fav, index) => (
                            <div className="item" key={index}>
                                <a href="#">
                                    <div className="myFavIcon">
                                        <img src={fav.img} alt={fav.alt} />
                                    </div>
                                    <span>{fav.label}</span>
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default MyFavourites;
