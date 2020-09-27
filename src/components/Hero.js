export const Hero = (props) => {
  return (
    <div className={props.className}>
      <h1 className="text-xl text-gray-700 md:text-4xl">
        Hey, I&#x27;m{' '}
        <strong className="bg-gradient-to-tr from-gray-600 via-gray-700 to-gray-700 bg-clip-text text-transparent">
          Mahendra
        </strong>
        . I’m a UI Designer, Front-end Developer, Back-end
        Developer & Side-Project Enthusiast. I&#x27;m currently
        available for{' '}
        <a
          href="mailto:pikaatic@gmail.com"
          className="border-b-4 border-purple-400 hover:text-purple-400 transition-colors duration-200 ease-in-out"
        >
          Work
        </a>
        .
      </h1>
    </div>
  )
}
