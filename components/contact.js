export default function Contact() {
  return (
    <div className="container px-5 py-12 mx-auto">
      <div className="flex flex-wrap w-full mb-6">
        <div className="w-full mb-10 lg:mb-0">
          <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">
            Contact Us
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
      </div>
      <div className="absolute inset-6 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-10 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 shadow-lg sm:rounded-3xl sm:p-10">
        <p className="text-xl md:text-2xl px-5 py-5">
          {`If you think we can help or even if you're not sure, by all means let
          us know and we'll be in touch. We offer free sessions to explore your
          needs to see if we're a match.`}
        </p>
        <ul className="md:px-20 md:text-xl">
          <li>
            By Email:{" "}
            <a href="mailto: contact@simplexologylab.com" target="_blank" rel="noreferrer">
              contact@simplexologylab.com
            </a>
          </li>
          <li>
            On Twitter:{" "}
            <a href="https://www.twitter.com/simplexology" target="_blank" rel="noreferrer">
              @Simplexology
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
