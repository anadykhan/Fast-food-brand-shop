const Banner = () => {
  return (
      <div
          className="bg-[url('https://i.ibb.co/BrbQk3t/jonathan-borba-8l8-Yl2ru-Usg-unsplash.jpg')] h-[35rem] bg-cover lg:p-10 flex flex-col gap-10 items-center justify-center"
      >
          <div className="flex flex-col justify-center items-center text-white gap-5">
              <div className="bg-[#ab1d2c] p-1 px-3 rounded-lg">
                  PRECIOUS FOODS
              </div>
              <div className="text-7xl text-center">
                  GET FAST FOOD FAST FOR YOUR EATING
              </div>
              <div className="text-center font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, beatae commodi a corrupti, quos neque quia atque nesciunt facilis vero hic provident quod.
              </div>
          </div>
          <div className="flex items-center border rounded p-2 bg-white w-[40rem] hidden">
              <input
                  type="text"
                  className="flex-1 rounded-l outline-none bg-whtie"
                  placeholder="Enter text..."
                  
              />
              <button className="bg-[#f2a22a] rounded p-2 hover:bg-yellow-500 cursor-pointer text-black px-20">
                  Pickup
              </button>
          </div>
      </div>
  )
}
export default Banner