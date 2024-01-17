
import bg from '../../../assets/Home/feature_bg.png';
import VP from'../../../assets/Home/gentlemen-new.png'
const Featured = () => {
    return (
        <>
            <div className="hero"   style={{ 
      backgroundImage:`url(${bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition:"right", }}>
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img src={VP}className="min-w-sm " />
    <div className="font-[georgia]">
      <h1 className="text-5xl font-bold text-[#1B6B93]">Meet NEUB 30th President</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-accent text-white font-semibold">Read More</button>
    </div>
  </div>
</div>
        </>
    );
};

export default Featured;