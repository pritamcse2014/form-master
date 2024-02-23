import Special from '../Special/Special';
import './MySelf.css'

const MySelf = ({asset}) => {
    return (
        <div>
            <h2>MySelf</h2>
            <section className='flex'>
                <Special asset={asset} />
            </section>
        </div>
    );
};

export default MySelf;