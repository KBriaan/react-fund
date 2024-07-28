import Image1 from "../../assets/don2.jpg"
const Banner = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <div className="container md:h-[500px] flex items-center justify-center py-10">
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
                {/* img container */}
            <div>
                {/* <img src={Image1} alt="" /> */}
                <img className="max-w-full h-auto" src={Image1} alt="" />

            </div>

                {/* text container */}

            </div>
        </div>
    </div>
  )
}

export default Banner