export default function Contact() {
  return (
    <div className="container px-5 mx-auto">
      <div className="flex flex-wrap w-full mb-6">
        <div className="w-full lg:mb-0">
          <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">
            Contact Us
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
      </div>
      <div className="relative">
        <p className="text-xl md:text-2xl">
          {`If you think we can help or even if you're not sure, by all means let
          us know and we'll be in touch. We offer free sessions to explore your
          needs to see if we're a match.`}
        </p>
      </div>
      <div className="flex flex-row space-x-10 p-8 justify-center">
        <a
          href="mailto: contact@simplexologylab.com"
          target="_blank"
          rel="noreferrer"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Email
        </a>
        <a
          href="https://www.twitter.com/simplexology"
          target="_blank"
          rel="noreferrer"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Twitter
        </a>
      </div>
    </div>
  );
}
