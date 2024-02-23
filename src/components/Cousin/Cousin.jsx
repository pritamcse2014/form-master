import Friend from '../Friend/Friend';
import Special from '../Special/Special';
import './Cousin.css'

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section className='flex'>
                <Special asset={asset} />
                {/* {asset && <Special asset={asset} />} */}
                {name === 'Abonti' && <Friend />}
            </section>
        </div>
    );
};

export default Cousin;