import Head from "next/head";
import Image from "node_modules/next/image";

const Departments = () => {
  return (
    <div id="departments">
      <Head>
        <title>Departments</title>
      </Head>
      <div className="relative min-h-screen">
        <div className="absolute left-0 w-full h-full flex justify-center items-center flex-col bg-white bg-opacity-30 p-8">
          <div className="grid grid-cols-2 gap-24 mx-auto mt-[-8rem] px-28">
            <div className="bg-white p-10 shadow-md flex flex-col items-center">
              <div className="avatar">
                <Image
                    src="/images/ppl.png"
                    alt="trainees"
                    width={60}
                    height={60}
                  />
              </div>
              <h2 className="text-2xl text-center font-semibold text-darkBlue mb-4">
                Operation Team
              </h2>
              <p className="text-darkBlue mb-4">
              The operation team consists of experienced people who
              will take over projects. For each project there is a smaller
              team of developers but also content creators.
              </p>
            </div>
            <div className="bg-white p-10 shadow-md flex flex-col items-center">
            <div className="avatar ">
                <Image
                    src="/images/train.png"
                    alt="trainees"
                    width={60}
                    height={60}
                  />
              </div>
              <h2 className="text-2xl text-center font-semibold text-darkBlue mb-4">
                Trainees
              </h2>
              <p className="text-darkBlue mb-4">
              Our trainees team is made from freshies or unexperienced
              people who will attend a training program for a semester.
              After the training, each trainee has the chance to take part
              in projects in the developer side or the content creation side.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
