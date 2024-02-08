import {  Link, Text } from 'vcc-ui';
function Car({ car }) {

    const learnUrl = `/learn/${car.id}`;
    const shopUrl = `/shop/${car.id}`;

    return (
        <div className="car-container">
            <Text variant="hillary" as="h3" style={{ color: 'grey', textTransform: 'uppercase', }}> {car.bodyType}</Text>
            <div className="model-info" style={{ display: 'flex', alignItems: 'baseline' }}>
                <Text variant="hillary" style={{ fontWeight: 'bold' }}>{car.modelName}</Text> 
                <Text variant="hillary" style={{ color: 'grey', marginLeft: '10px' }}>{car.modelType}</Text> 
            </div>
            <img src={car.imageUrl} alt={car.modelName} className="car-image" />
            <div className='link-container'>
                <Link href={learnUrl} style={{ marginRight: '15px', }} arrow="right">LEARN </Link>
                <Link href={shopUrl} arrow="right">SHOP </Link>
            </div>
        </div>
    );
}

export default Car;