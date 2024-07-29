import Image1 from "../../assets/don2.jpg";

const Banner = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="container md:h-[500px] flex items-center justify-center py-10">
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
          {/* img container */}
          <div>
            {/* <img src={Image1} alt="" /> */}
            <img
              className="max-w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl"
              src={Image1}
              alt=""
            />
          </div>
          <div className="lg:max-w-[400px] space-y-6">
            <h1 className="text-2xl font-semibold md:text-4xl mb-4">
            
              Help the Needy People
            </h1>
            <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
              <li className="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo qui perferendis nulla, ipsa rem.
              </li>
              <li className="font-medium">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas dolore hic neque nostrum repellat corrupti quod quisquam, culpa in nulla!
              </li>
              <li className="font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quod earum aspernatur impedit aut esse non corporis vero qui quo.
              </li>
            </ul>
            <div className="btn-primary w-32 cursor-pointer">Get Started</div>
          </div>
          {/* text container */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
