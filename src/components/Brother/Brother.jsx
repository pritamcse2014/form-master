import { useContext } from 'react';
import './Brother.css'
import { MoneyContext } from '../GrandPa/GrandPa';

const Brother = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Brother</h2>
            <p>{money}</p>
        </div>
    );
};

export default Brother;