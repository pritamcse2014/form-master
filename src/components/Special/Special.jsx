import { useContext } from 'react';
import './Special.css'
import { AssetContext } from '../GrandPa/GrandPa';

const Special = ({asset}) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special</h2>
            <p>{asset}</p>
            <p>{gift}</p>
        </div>
    );
};

export default Special;