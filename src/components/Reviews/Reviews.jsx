import Review from "../Review/Review"

const Reviews = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20 my-32">
      <div className="text-3xl text-center lg:text-start">
        LISTEN TO OUR HAPPY CUSTOMERS
      </div>
      <div>
        <Review></Review>
      </div>
    </div>
  )
}
export default Reviews