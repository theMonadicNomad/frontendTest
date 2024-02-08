import {  Link, Text } from 'vcc-ui';
function Car({ car }) {

    const learnUrl = `/learn/${car.id}`;
    const shopUrl = `/shop/${car.id}`;

    return (
        <div className="car-container">
            <Text variant="hillary" as="h3" style={{ color: 'grey', textTransform: 'uppercase', }}> {car.bodyType}</Text>
            <div className="model-info" style={{ display: 'flex', alignItems: 'baseline' }}>
                <Text variant="hillary" style={{ fontWeight: 'bold' }}>{car.modelName}</Text> {/* Example color for modelName */}
                <Text variant="hillary" style={{ color: 'grey', marginLeft: '10px' }}>{car.modelType}</Text> {/* Example color for modelType */}
            </div>
            <img src={car.imageUrl} alt={car.modelName} className="car-image" /* style={{ width: '350px', height: 'auto', marginTop: '20px' }} */ />
            <div className='link-container'>
                <Link href={learnUrl} style={{ marginRight: '15px', }} arrow="right">LEARN </Link>
                <Link href={shopUrl} arrow="right">SHOP </Link>
            </div>
        </div>
    );
}

export default Car;