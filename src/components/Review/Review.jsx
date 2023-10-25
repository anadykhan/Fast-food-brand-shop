const Review = () => {
    return (
        <div className="flex flex-col lg:w-[45rem] bg-[#070521] text-white gap-7 p-10">
            <div>
                <div className="rating rating-sm">
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" readOnly />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked readOnly />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" readOnly />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" readOnly />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" readOnly />
                </div>
            </div>
            <div>
                This dish was an absolute delight. From the first bite to the last, it was a burst of flavors that left me wanting more. A culinary masterpiece that truly satisfies the taste buds. Ill definitely be back for more!
            </div>

            <div className="flex items-center gap-10">
                <div className="avatar object-cover">
                    <div className="w-24 rounded-full">
                        <img src="https://i.ibb.co/WFY17cv/logan-jeffrey-z-Hve9u-YWNBM-unsplash.jpg" />
                    </div>
                </div>
                <div>
                    <div>ALEX JONES</div>
                    <div>Food Reviewer</div>
                </div>
            </div>
        </div>
    )
}
export default Review