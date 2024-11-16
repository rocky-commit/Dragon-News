import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div>
            <p className="p-2 bg-red-400 text-white">
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