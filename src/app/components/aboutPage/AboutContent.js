import Image from 'next/image';

/*
  This is the content found in the About Page
  It has an image of myself and a section of content describing myself and my education
 */
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#222222] text-white">
      <div className="py-14 lg:px-24">
        <h1 className="text-5xl font-bold text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#840808]">
            Hey, I am Tej!
          </span>
        </h1>

        {/* This is the content section which is made up of 2 sections: My Image and the text content */}        
        <div className="flex flex-col lg:flex-row items-center justify-center">

          {/* My Image is on the left of the text content */}  
          <div className="w-2/5">
            <Image
              src="/images/profilePic.jpg"
              alt="A Selfie of me!"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>

          {/* My text content is on the right of the page */}  
          <div className="w-full lg:w-3/5 text-left">
            <h2 className="text-4xl font-bold">Welcome to my Portfolio!</h2>
            <p className="text-lg">
              I am a passionate mobile app developer who enjoys creating intuitive and
              user-friendly apps. With a strong background in full-stack development,
              I enjoy using frameworks like React to create visually appeasing websites!
            </p>
            <h2 className="text-4xl font-bold mt-8">Education</h2>
            <p className="text-lg">
              I am currently pursuing an advanced diploma in Mobile Application Development @ St.
              Clair College. I have learned a lot about full-stack web and mobile development and I can create nice cross-platform apps
            </p>
            <h2 className="text-4xl font-bold mt-8">Learn a bit About Me</h2>
              <ul className='list-disc text-white text-lg ml-10'>
                <li>I enjoy playing and watching soccer, and my favourite club is FC Barcelona!</li>
                <li>I have worked @ Shoppers Drug Mart as a Postal Clerk for over 4 years now</li>
                <li>I took my first programming course in grade 10 and it sparked my interest in the field</li>
                <li>I enjoy trading stocks and engaging in investment endeavours</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage