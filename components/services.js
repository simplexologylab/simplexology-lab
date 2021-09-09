export default function Services() {
  const services = [
    {
      title: "Business Services",
      description:
        "Our unique industry experience combined with our Simplexology approach allow us to provide valuable consulting services across a broad range to help your business succeed",
      items: [
        "Product Management",
        "Product Development",
        "Operational Effeciency",
        "Team Culture",
      ],
    },
    {
      title: "Education Services",
      description:
        "Our passion is rooted deeply in educating others. By combining our knowledge and experience with our Simplexology approach we can help you and those you are educating.",
      items: ["Conference/Event Talks", "STEM Curriculm", "Teaching Code"],
    },
    {
      title: "Website Development",
      description:
        "We love all things web! We are all over the latest trends in tech and want to help you expand your web presence by picking the right tool for the job.",
      items: [
        "Website/Application Development",
        "Deployment Management",
        "Tech Stack Selection",
      ],
    },
    {
      title: "Ideation Services",
      description:
        "Need help exploring a new idea? We're always open to exploring ideas, even if they seem crazy 🤪. One of our favorite activities is watching something go from Idea > Reality.",
      items: [
        "Brainstomring",
        "Second Opinion (Or Third)",
        "Technology Advisory Services",
      ],
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-8">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">
              Services
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {services.map((service) => (
            <div key={service.title} className="p-4 md:w-1/2">
              <div className="flex rounded-lg h-full bg-indigo-500 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
                    {service.title}{" "}
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-white">
                    {service.description}
                  </p>
                  <ul className="p-6">
                    {service.items.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                  {/* <a
                    href=""
                    className="mt-3 text-indigo-800 hover:text-gray-900 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
