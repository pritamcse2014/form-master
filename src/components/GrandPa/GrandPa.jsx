import { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css'

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const GrandPa = () => {
    const asset = 'Diamond Ring';
    const [money, setMoney] = useState(1000);
    return (
        <div className='grandPa'>
            <h2>GrandPa</h2>
            <p>{money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value='gold'>
                    <section className='flex'>
                        <Dad asset={asset} />
                        <Uncle asset={asset} />
                        <Aunty />
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default GrandPa;