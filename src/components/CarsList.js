import cars from '../../public/api/cars.json';
import React, { useRef, useState, useEffect } from 'react';
import { Block,  SelectInput } from 'vcc-ui';
import Car from './Car';
//import "./style.css";


function CarsList() {
    const scrollContainerRef = useRef(null);

    const scroll = (scrollOffset) => {
        scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    };

    const [activeIndex, setActiveIndex] = useState(0);


    const [filter, setFilter] = useState('all');
    // State to track the filtered list of cars
    const [filteredCars, setFilteredCars] = useState(cars);

    // Effect hook to update the filteredCars list when cars or filter changes
    useEffect(() => {
        if (filter === 'all') {
            setFilteredCars(cars);
        } else {
            setFilteredCars(cars.filter(car => car.bodyType === filter));
        }
    }, [cars, filter]);

    // Handle dot click - Update based on your carousel implementation
    const handleDotClick = (index) => {
        setActiveIndex(index);
        // Implement scrolling or updating the visible items based on the index
        const itemWidth = scrollContainerRef.current?.firstChild?.offsetWidth || 0; // Get width of the first item

        // Calculate the scroll position: item width * index of the clicked dot
        const scrollPosition = itemWidth * index;

        // Use scrollLeft property to scroll the container
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollPosition;
        }
    };

    return (
        <>
            <div className="filter-bar-container">
                {/* Filter Bar */}
                <SelectInput /* className="filter-select-input" */ style={{ width: '100%', fontSize: '14px', height: '30px', padding: '0 5px' }} value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    {/* Generate unique bodyType options from cars data */}
                    {[...new Set(cars.map(car => car.bodyType))].map(bodyType => (
                        <option key={bodyType} value={bodyType}>{bodyType}</option>
                    ))}
                </SelectInput>
            </div>
            <div
                ref={scrollContainerRef}
                className="scroll-container"
            >
                {filteredCars.map(car => (
                    <Car key={car.id} car={car} />
                ))}
            </div>
            <div className="chevron-buttons">

                <a href="#" onClick={() => scroll(-200)} >
                    <img src="/images/chevron-circled.svg" alt="Scroll Left" style={{ transform: 'rotate(180deg)' }} />
                </a>
                <a href="#" onClick={() => scroll(200)} >
                    <img src="/images/chevron-circled.svg" alt="Scroll Right" />
                </a>
            </div>

            {/* Navigation dots container, shown only on mobile screens */}
            <div className="navigation-dots" >
                {filteredCars.map((_, index) => (
                    <span
                        key={index}
                        className={`navigation-dot ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </>
    );
}


export default CarsList;