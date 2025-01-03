const Hero = ({ children, bg }) => {
  return (
    <section
      className={
        bg
          ? " bg-fixed object-left bg-no-repeat bg-cover xl:h-auto w-full flex items-center justify-center " +
            bg.toString()
          : "bg-[url('/hero-image.jpg')] bg-no-repeat bg-cover h-auto xl:h-[45rem] w-full flex items-center justify-center"
      }
    >
      <div className="backdrop-blur-[2px] h-full w-full flex items-center justify-center bg-[#161616]/50">
        <div className=" mx-auto max-w-full md:max-w-screen-lg lg:py-16 ">
          {children}
        </div>
      </div>
    </section>
  );
};
export default Hero;
