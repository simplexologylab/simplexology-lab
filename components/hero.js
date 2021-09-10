export default function Hero() {
  return (
    <div className="container min-h-screen flex flex-col place-content-center">
      <div className="text-4xl m-4 md:text-6xl text-center">Simplexology Lab</div>
      <div className="text-xl md:text-3xl text-center mt-3">
        we make it simple
      </div>
      <div className="text-center mt-3 flex flex-col items-center space-y-10">
        <p className="text-xl md:text-2xl px-20">
          Stop struggling with making the best choices for your business,
          classroom, or even personal hobbies. Leverage our years of experience
          implementing technology solutions to amplify your ideas into reality.
        </p>
        <div className="p-10">
          <svg
            className="animate-bounce w-6 h-6 ..."
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
