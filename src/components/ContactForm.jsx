const ContactForm = () => {
  return (
    <div id="contact" className="container">
      <div className="flex flex-col lg:flex-row justify-between lg:pl-24 gap-7">
        <form
          className="contact-form  block basis-[40%] md:mb-0 mb-10"
          action=""
        >
          <h2 className="title text-4xl font-bold after-bg">CONTACT US </h2>
          <div className="mt-70">
            <input placeholder="Name" type="text" />
            <input placeholder="Email" type="email" />
            <input placeholder="Phone" type="text" />

            <button className="button">Submit</button>
          </div>
        </form>
        <div className="img relative">
          <div className=""></div>
          <img
            className="relative min-w-full"
            alt="contact form"
            src={'/contact/1.png'}
            width={300}
            height={38}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
