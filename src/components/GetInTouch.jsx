const GetInTouch = () => {
  return (
    <div id="contact" className="get-in-touch py-12">
      <div className="container">
        <div className="md:flex items-center justify-between">
          <div>
            <h2 className="title after-bg text-3xl font-bold uppercase">
              Lets get in touch
            </h2>
            <div className="mt-70">
              <input placeholder="Name" type="text" />
              <input placeholder="Email" type="email" />
              <input placeholder="Phone" type="text" />

              <button className="button">Submit</button>
            </div>
          </div>
          <div>
            <h2 className="title text-3xl font-bold uppercase flex flex-col">
              <span>CONTACT</span>
              <span className="flex items-center gap-2">
                <span className="border-after"></span>us
              </span>
            </h2>
            <p>
              Want to know more information? Submit your information and we’ll
              be in touch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
