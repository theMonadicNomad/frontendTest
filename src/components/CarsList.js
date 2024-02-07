import cars from '../../public/api/cars.json';
import React, { useRef, useState, useEffect } from 'react';
import { Block, Button, Link, SelectInput } from 'vcc-ui';
import Car from './Car';


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
            <div style={{ maxWidth: '200px', margin: 'auto' }}>
                {/* Filter Bar */}
                <SelectInput style={{ width: '100%', fontSize: '14px', height: '30px', padding: '0 5px' }} value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    {/* Generate unique bodyType options from cars data */}
                    {[...new Set(cars.map(car => car.bodyType))].map(bodyType => (
                        <option key={bodyType} value={bodyType}>{bodyType}</option>
                    ))}
                </SelectInput>
            </div>
            <div
                ref={scrollContainerRef}
                style={{
                    display: 'flex',
                    overflowX: 'scroll',
                    scrollbarWidth: 'none', /* For Firefox */
                    msOverflowStyle: 'none', /* For Internet Explorer and Edge */
                    '&::-webkit-scrollbar': {
                        display: 'none' /* For Chrome, Safari, and Opera */
                    }
                }}
            >
                {filteredCars.map(car => (
                    <Car key={car.id} car={car} />
                ))}
            </div>
            <div 
                className="chevron-buttons"

            style={{
                position: 'absolute',
                right: 0,
                top: '65%',
                //display: 'block',
                width: '40px',
                transform: 'translateY(-50%)',
                zIndex: '10',

            }}>
                {/*  <button onClick={() => scroll(-200)} style={{ marginRight: '10px' }}>
                    &#10094;
                </button>
                <button onClick={() => scroll(200)} style={{ marginLeft: '10px' }}>
                    &#10095;
                </button>
 */}
                <a href="#" onClick={() => scroll(-200)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/images/chevron-circled.svg" alt="Scroll Left" style={{ transform: 'rotate(180deg)' }} />
                </a>

                <a href="#" onClick={() => scroll(200)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/images/chevron-circled.svg" alt="Scroll Right" />
                </a>

            </div>

            {/* Navigation dots container, shown only on mobile screens */}
            <div className="navigation-dots" style={{ textAlign: 'center', padding: '10px 0' }}>
                {filteredCars.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => handleDotClick(index)}
                        style={{
                            height: '10px',
                            width: '10px',
                            margin: '0 5px',
                            backgroundColor: activeIndex === index ? 'black' : 'lightgray',
                            display: 'inline-block',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            alignItems: 'left',
                            alignContent: 'left',
                        }}
                    ></span>
                ))}
            </div>

            <style jsx>{`
            @media (max-width: 599px) {
                // Hide chevrons on mobile
                .chevron-buttons {
                    display: none;
                }
            }
                @media (min-width: 600px) {
                    .navigation-dots {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}


export default CarsList;