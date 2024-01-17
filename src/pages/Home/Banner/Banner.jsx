
import { Link } from 'react-router-dom';
import banner from '../../../assets/Home/banner.jpeg';
const Banner = () => {
    return (
        <>
            <div className="hero heroSection min-h-[600px]" style={{backgroundImage:`url(${banner})`}}>
			<div className="hero-overlay"></div>
			<div className="hero-content text-center  text-white font-[georgia]">
				<div className="min-w-md">
				<h1 className="mb-5 text-3xl  text-white uppercase">Neub Alumni</h1>
					<h1 className="mb-5 text-5xl font-bold text-white">Welcome Home</h1>
					<p className="mb-5 text-3xl w-full">NEUB Alumni Association helps you keep NEUB close wherever you are.</p>
					<Link to="event"><button className="btn btn-lg btn-primary uppercase text-white font-semibold">Join our upcoming event</button></Link>
				</div>
			</div>
		</div>
        </>
    );
};

export default Banner;