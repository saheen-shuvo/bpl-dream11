import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="relative mt-12 lg:mt-52">
      <Newsletter></Newsletter>
          <div className="h-[728px] lg:h-[660px] bg-[#06091A] pt-10 lg:pt-48">
      <div className="flex justify-center">
        <img src="./images/logo-footer.png" alt="" />
      </div>
      <footer className="flex flex-col lg:flex-row gap-2 justify-between bg-[#06091A] text-white p-10 px-2 lg:px-20">
        <nav>
          <h6 className="footer-title">About Us</h6>
          <p>
            We are a passionate team dedicated to<br></br> providing the best
            services to our customers.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title ml-0 lg:ml-[-30px]">Quick Links</h6>
          <ul className="list-disc text-white text-base">
            <li>
              <a className="link link-hover">Home</a>
            </li>
            <li>
              <a className="link link-hover">Services</a>
            </li>
            <li>
              <a className="link link-hover">About</a>
            </li>
            <li>
              <a className="link link-hover">Contact</a>
            </li>
          </ul>
        </nav>
        <form>
          <h6 className="footer-title">Subscribe</h6>
          <p>
            Subscribe to our newsletter for the <br></br>latest updates.
          </p>
          <fieldset className="form-control w-80 mt-6">
            <div className="join">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered join-item"
              />
              <button className="btn bg-green-900 text-white font-semibold join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="divider my-4"></div>
      <p className="text-slate-400 text-center">
        @2024 Your Company All Rights Reserved.
      </p>
    </div>
    </div>
  );
};

export default Footer;
