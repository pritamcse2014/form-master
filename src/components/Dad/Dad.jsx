import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';
import './Dad.css'

const Dad = ({asset}) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className='flex'>
                <MySelf asset={asset} />
                <Brother />
                <Sister />
            </section>
        </div>
    );
};

export default Dad;