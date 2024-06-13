

export default function Contact() {
  return (
    <div className="bg-primary text-black sm:min-h-[600px] sm:grid sm:place-items-center pt-24 pb-20 sm:pb-0 ">
      <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            {/* contact text left part*/}
              <div className="space-y-5 sm:p-16 pb-6 ">
                <h2 data-aos="fade-up" className="text-2xl sm:text-3xl font-bold "> Best In City </h2>
                <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold "> TRUSTED CAB SERVIES IN NEW YORK </h1>
                <p data-aos="fade-up" className="leading-8 tracking-wide "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, magnam! Tenetur odio quo et maxime? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, magnam! Tenetur odio quo et maxime? </p>
                <button className="bg-dark text-white px-4 py-2 rounded-lg"> Book Now </button>
              </div>
            {/* contact form */}
             <div data-aos="fade-up" >
              <div className="w-full md:max-w-[350px] mx-auto ">
                <h1 className="uppercase text-2xl text-white bg-black px-5 py-2  "> BOOK A CAB </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 bg-white p-5 ">
                  <input type="text" placeholder="Name" className="inputField"/>
                  <input type="text" placeholder="Phone" className="inputField"/>
                  <input type="text" placeholder="Start" className="inputField"/>
                  <input type="text" placeholder="End" className="inputField"/>
                  <input type="text" placeholder="Choose vehicles " className="col-span-2 inputField"/>
                  <button data-aos="fade-up" data-aos-offset="0" className="col-span-2 text-white bg-black w-full mt-6 px-4 py-2 rounded-lg"> Book Now </button>

                </div>
              </div>
             </div>
          </div>
      </div>
    </div>
  )
}










