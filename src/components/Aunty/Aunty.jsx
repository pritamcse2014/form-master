import { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import './Aunty.css'
import { MoneyContext } from '../GrandPa/GrandPa';

const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section>
                <Cousin name={'Ahona'} />
                <Cousin name={'Abonti'} />
            </section>
            <p>{money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add Money</button>
        </div>
    );
};

export default Aunty;