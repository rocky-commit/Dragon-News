import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center bg-gray-200 p-2">
            <p className="p-2 px-4 bg-red-600 w-fit text-white">
                Latest
            </p>
            <Marquee pauseOnHover={true}>
                <Link>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, quasi.</Link>
                <Link>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, quasi.</Link>
                <Link>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, quasi.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;