const Hero = () => {
  return (
    <section className="hero ">
      <video muted autoPlay loop className="hero-video ">
        <source src={'/hero/video.mp4'} type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
