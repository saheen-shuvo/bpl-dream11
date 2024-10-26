
const Newsletter = () => {
    return (
        <div className="border-2 h-80 mt-32 rounded-3xl bg-slate-200 absolute -top-72 w-[89.5%] mx-20 hidden lg:block">
            <div className="border-2 m-4 h-72 rounded-[15px] bg-gradient-to-r from-gray-600 to-gray-900">
                <div className="h-full">
                    <h2 className="text-center font-bold text-white text-3xl pt-11">Subscribe To Our NewsLetter</h2>
                    <h2 className="text-center font-medium text-slate-300 py-4 text-xl">Get the latest updates and news right in your inbox!</h2>
                    <fieldset className="form-control w-80 mx-auto pt-5">
            <div className="join">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered join-item"
              />
              <button className="btn bg-green-900 text-white font-semibold join-ite">
                Subscribe
              </button>
            </div>
          </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;