import React from "react";

function Body() {
  return (
    <div className="mt-10">
      <section className="container mx-auto">
        <div className="flex justify-center items-center space-x-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 order-1">
              <h1 className="text-5xl font-quicksand font-bold leading-tight">
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
            <div className="mt-5 px-10 py-6 bg-sky-50 border-l-8 border-orange-400 order-2">
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
      <section className="container mx-auto mt-32">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-quicksand font-bold text-4xl">
            What's Included?
          </h2>
          <div className="flex gap-8 mt-10">
            <div>
              <img
                src="./assets/images/dsa-2.png"
                alt="Book Table Contents"
                className="w-96"
              />
            </div>
            <div className="flex flex-col items-center">
              <ul className="list-none space-y-3">
                <li className="flex space-x-2">
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Checkmark"
                    className="h-6 w-auto"
                  />
                  <p className="text-gray-500 text-xl">
                    15+ algo patterns discussed
                  </p>
                </li>
                <li className="flex space-x-2">
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Checkmark"
                    className="h-6 w-auto"
                  />
                  <p className="text-gray-500 text-xl">
                    Detailed solutions and explanations
                  </p>
                </li>
                <li className="flex space-x-2">
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Checkmark"
                    className="h-6 w-auto"
                  />
                  <p className="text-gray-500 text-xl">
                    Awesome resources, articles, blogs
                  </p>
                </li>
                <li className="flex space-x-2">
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Checkmark"
                    className="h-6 w-auto"
                  />
                  <p className="text-gray-500 text-xl">
                    Visualizers and animations included
                  </p>
                </li>
                <li className="flex space-x-2">
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Checkmark"
                    className="h-6 w-auto"
                  />
                  <p className="text-gray-500 text-xl">
                    100 pages of quality content
                  </p>
                </li>
                <li className="flex space-x-2">
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Checkmark"
                    className="h-6 w-auto"
                  />
                  <p className="text-gray-500 text-xl">
                    Concepts explained for beginners
                  </p>
                </li>
                <li className="flex space-x-2">
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Checkmark"
                    className="h-6 w-auto"
                  />
                  <p className="text-gray-500 text-xl">
                    All in one revision guide
                  </p>
                </li>
              </ul>
              <button className="bg-orange-500 px-6 py-3 rounded-3xl text-white font-bold w-2/3 mt-10 ">
                Download for Free
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-20">
        <div className="grid grid-rows-2 grid-cols-2 gap-5">
          <div className="flex flex-col gap-4 border border-gray-200 rounded-xl px-7 py-10">
            <q>
              Walling helps us visually organise ideas and tasks, work
              collaboratively and efficiently within our team. The visual
              experience makes it so easy to plan content and stay on track with
              our projects and campaigns.
            </q>
            <div className="flex gap-4 items-center">
              <img
                src="./assets/images/profiles/profile-1.png"
                alt="Author Image"
                className="h-20"
              />
              <div className="flex flex-col">
                <p>Mathew Andres</p>
                <p>Head of Designing</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border border-gray-200 rounded-xl px-7 py-10">
            <q>
              Walling helps us visually organise ideas and tasks, work
              collaboratively and efficiently within our team. The visual
              experience makes it so easy to plan content and stay on track with
              our projects and campaigns.
            </q>
            <div className="flex gap-4 items-center">
              <img
                src="./assets/images/profiles/profile-1.png"
                alt="Author Image"
                className="h-20"
              />
              <div className="flex flex-col">
                <p>Mathew Andres</p>
                <p>Head of Designing</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border border-gray-200 rounded-xl px-7 py-10">
            <q>
              Walling helps us visually organise ideas and tasks, work
              collaboratively and efficiently within our team. The visual
              experience makes it so easy to plan content and stay on track with
              our projects and campaigns.
            </q>
            <div className="flex gap-4 items-center">
              <img
                src="./assets/images/profiles/profile-1.png"
                alt="Author Image"
                className="h-20"
              />
              <div className="flex flex-col">
                <p>Mathew Andres</p>
                <p>Head of Designing</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border border-gray-200 rounded-xl px-7 py-10">
            <q>
              Walling helps us visually organise ideas and tasks, work
              collaboratively and efficiently within our team. The visual
              experience makes it so easy to plan content and stay on track with
              our projects and campaigns.
            </q>
            <div className="flex gap-4 items-center">
              <img
                src="./assets/images/profiles/profile-1.png"
                alt="Author Image"
                className="h-20"
              />
              <div className="flex flex-col">
                <p>Mathew Andres</p>
                <p>Head of Designing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
