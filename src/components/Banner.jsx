import PropTypes from 'prop-types';
const Banner = ({price, handleClaimCredits}) => {
    return (
        <div className='mx-2 lg:mx-20 mt-9 relative'>
            <img className='w-full h-[500px] lg:h-[590px] rounded-3xl bg-[#131313]' src="./images/bg-shadow.png" alt="" />
            <div className='absolute left-1/2 transform -translate-x-1/2 top-20'>
            <img src="./images/banner-main.png" alt="" />
            </div>
            <div className='absolute left-1/2 transform -translate-x-1/2 bottom-20 flex flex-col items-center w-full'>
            <h3 className='text-lg lg:text-4xl font-bold text-white text-center w-[80%] '>Assemble Your Ultimate Dream 11 Cricket Team</h3>
            <h5 className='text-base lg:text-2xl font-normal text-gray-400 text-center pt-4'>Beyond Boundaries Beyond Limits</h5>
            <button onClick={() => handleClaimCredits(price)} className='bg-green-900 mt-10 py-3 px-4 rounded-xl text-white outline outline-2 outline-green-900 outline-offset-4 font-semibold'>Claim Free Credit</button>
            </div>
        </div>
    );
};

Banner.propTypes ={
    price: PropTypes.func,
    handleClaimCredits: PropTypes.func
  }
export default Banner;