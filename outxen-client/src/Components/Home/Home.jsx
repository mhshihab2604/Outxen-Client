import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import BannerOne from '../BannerOne/BannerOne';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';

const Home = () => {


    return (
        <div>
            <Helmet>
                <title>Outxen||Home</title>
            </Helmet>
            
           <BannerOne></BannerOne>
            <Banner></Banner>
            <FeaturedProduct></FeaturedProduct>
        </div>
    );
};

export default Home;
