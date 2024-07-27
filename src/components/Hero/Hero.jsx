import HeroImg from "../../assets/don.jpg";

const bgStyle = {
  backgroundImage: `url(${HeroImg})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",

  width: "100%",
};
const Hero = () => {
  return (
    <div style={bgStyle}>
      <div className="min-h-[650px] md:min-h-[750px] bg-gradient-to-r from-black/80 to-primary/60 pt-3 pb-10 md:pt-48">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white">
            {/* hero text section */}
            <div className="flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px]">
              <h1 className="text-5xl lg:text-7xl font-bold">
                Join Us Changing Lives
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus laudantium consequuntur neque vitae quo iusto ipsum
                nemo illum facilis odit.
              </p>

              <div className="space-x-4">
                
                <button className="btn-primary">Get Started</button>
                <button className="btn-outline">Login</button>
              </div>
            </div>

            {/* form section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
