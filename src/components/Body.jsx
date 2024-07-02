import React from "react";

function Body() {
  return (
    <div>
      <section className="container mx-auto">
        <div className="flex justify-center items-center space-x-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 ">
              <h1 className="font-quicksand font-bold leading-tight text-5xl">
                Best way to revise for your next coding interview
              </h1>
              <p className="font-roboto tracking-wider text-gray-600 text-xl">
                Get everything in a single guide: Data structures, algorithms,
                patterns, visualizers, questions, examples, solutions,
                explanations, and much more!
              </p>
              <button className="bg-gray-200 hover:bg-pink-400 hover:-translate-x-1 hover:-translate-y-1 shadow-xl rounded-xl px-6 py-3 font-roboto font-bold">
                Buy <span className="uppercase">Free</span> through
              </button>
            </div>
            <div className="mt-5 px-10 py-6 bg-sky-50 border-l-8 border-orange-400">
              <p>
                <i>
                  "Highly recommended if you're interviewing or preparing these
                  days - this guide will help you revise concepts and practice
                  things before the interview."
                </i>
              </p>
            </div>
          </div>
          <div className="justify-end">
            <img src="./assets/images/dsa-main.png" alt="DSA Book Cover" />
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-20">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-quicksand font-bold text-3xl">
            What's included?
          </h2>
          <div className="flex gap-8 mt-8">
            <div>
              <img
                src="./assets/images/dsa-2.png"
                alt="Book Table Contents"
                className="w-80"
              />
            </div>
            <div>
              <div className="flex space-x-2">
                <img
                  src="./assets/images/checkmark.png"
                  alt="checkmark"
                  className="w-5"
                />
                <p>15+ algo patterns discussed</p>
              </div>
              <div className="flex space-x-2">
                <img
                  src="./assets/images/checkmark.png"
                  alt="checkmark"
                  className="w-5"
                />
                <p>Detailed solutions and explanations</p>
              </div>
              <div className="flex space-x-2">
                <img
                  src="./assets/images/checkmark.png"
                  alt="checkmark"
                  className="w-5"
                />
                <p>Awesome resources, articles, blogs</p>
              </div>
              <div className="flex space-x-2">
                <img
                  src="./assets/images/checkmark.png"
                  alt="checkmark"
                  className="w-5"
                />
                <p>Visualizers and animations included</p>
              </div>
              <div className="flex space-x-2">
                <img
                  src="./assets/images/checkmark.png"
                  alt="checkmark"
                  className="w-5"
                />
                <p>100 pages of quality content</p>
              </div>
              <div className="flex space-x-2">
                <img
                  src="./assets/images/checkmark.png"
                  alt="checkmark"
                  className="w-5"
                />
                <p>Concepts explained for beginners</p>
              </div>
              <div className="flex space-x-2">
                <img
                  src="./assets/images/checkmark.png"
                  alt="checkmark"
                  className="w-5"
                />
                <p>All in one revision guide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
