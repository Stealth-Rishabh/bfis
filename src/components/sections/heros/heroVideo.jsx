const HeroVideo = () => {
  return (
    <section className="relative w-full">
      {/* Video for mobile */}
      <div className="block md:hidden h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://www.bfis.in/wp-content/themes/bfis-theme/js/video2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video for desktop */}
      <div className="hidden md:block h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source
            src="https://www.bfis.in/wp-content/themes/bfis-theme/js/video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroVideo;
