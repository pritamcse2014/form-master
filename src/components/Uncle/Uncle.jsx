import Cousin from '../Cousin/Cousin';
import './Uncle.css'

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousin name={'Abrar'} asset={asset} />
                <Cousin name={'Ahona'} asset={asset} />
            </section>
        </div>
    );
};

export default Uncle;