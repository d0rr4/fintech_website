import Head from "next/head";
import Slideshow from "./slideshow";

const About = () => {

  return (
    <div id="about">
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="absolute w-full h-full flex justify-center items-center flex-col bg-white bg-opacity-40 p-8">
          <Head>
            <title>About Us</title>
          </Head>
          <div className="ribbon bg-lightBlue bg-opacity-80 h-40 w-full absolute mt-[-8rem]"></div>
          <div className="flex container mx-auto relative md:px-8 md:py-8 z-10 mt-[-8rem]">
            <div className="md:flex md:justify-start mb-4 absolute">
                  <Slideshow />
            </div>
            <div className="md:flex md:justify-end">
              <div className="bg-white md:p-10 w-1/2 relative border-t-4 border-finRed">
                <div className="custom-border"></div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-darkBlue">
                  About Us
                </h2>
                <p className="md:text-1xl text-darkBlue">
                We are a newly founded project within IB&CM Society. Our aim is to create
                a community of students interested in exploring the intersection between
                finances and technology and also to provide students with a hands-on
                learning experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
