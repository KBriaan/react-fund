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
            <div className="w-[90% md:w-[400px] mx-auto p-4 bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md">
                <div>
                    <h1 className="text-lg text-center font-semibold">Quick Donation Form </h1>
                    <div className="flex items-center justify-center gap-8 py-4">
                        <button className="button-square"> $01</button>
                        <button className="button-square"> $05</button>
                        <button className="button-square" > $10</button>
                        <button className="button-square"> $99</button>

                    </div>
                {/* input section here */}
                <div className="space-y-4">
                    <input type="number"
                    name="amount"
                    id="amount"
                    placeholder="Amount"
                    defaultValue={1}
                    min={1}
                    max={99}
                    className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
                    
                    />
                    <input type="text" 
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
                    
                    />
                    <input type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
                     />
                     </div>


                </div>
                 </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
