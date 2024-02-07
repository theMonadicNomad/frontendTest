import { Block, Button, Link, Text } from 'vcc-ui';
function Car({ car }) {
    return (
        <div style={{ margin: '10px' }}>
            <Text variant="hillary" as="h3" style={{ color: 'grey', textTransform: 'uppercase', }}> {car.bodyType}</Text>
            <div className="model-info" style={{ display: 'flex', alignItems: 'baseline' }}>
                <Text variant="hillary" style={{ fontWeight: 'bold' }}>{car.modelName}</Text> {/* Example color for modelName */}
                <Text variant="hillary" style={{ color: 'grey', marginLeft: '10px' }}>{car.modelType}</Text> {/* Example color for modelType */}
            </div>
            <img src={car.imageUrl} alt={car.modelName} style={{ width: '350px', height: 'auto' }} />
            {/*         <div style={{ marginTop: '10px',textAlign: 'center', color: 'blue' }}>
        <Link href={car.learnUrl} style={{ marginRight: '15px' }} arrow="right">LEARN </Link>
        <Link href={car.shopUrl} arrow="right">SHOP </Link>
      </div> */}
            <div style={{ marginTop: '10px', textAlign: 'center', color: 'blue' }}>
                <Link href={car.learnUrl} style={{ marginRight: '15px', display: 'inline-block' }} arrow="right">LEARN </Link>
                <Link href={car.shopUrl} style={{ display: 'inline-block' }} arrow="right">SHOP </Link>
            </div>
            <style jsx>{`
        @media (max-width: 600px) {
          .model-info {
            flex-direction: column;
          }
          .model-info span {
            margin-left: 0 !important;
          }
        }
      `}</style>
        </div>
    );
}

export default Car;