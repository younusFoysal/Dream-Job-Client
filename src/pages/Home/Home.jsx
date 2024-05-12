import Banner from "./Banner.jsx";
import JobsCategory from "../Jobs/JobsCategory.jsx";
import Features from "./Features.jsx";
import BlogCard from "./BlogCard.jsx";
import MeetCall from "./MeetCall.jsx";
import Testimonial from "./Testimonial.jsx";
import Devider from "./Devider.jsx";
import Contact from "./Contact.jsx";
import BackToTop from "./BackToTop.jsx";


const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <JobsCategory></JobsCategory>
            <Features></Features>
            <Devider></Devider>
            <BlogCard></BlogCard>
            <MeetCall></MeetCall>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <BackToTop></BackToTop>
        </div>
    );
};

export default Home;