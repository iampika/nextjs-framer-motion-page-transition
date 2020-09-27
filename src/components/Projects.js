import Link from 'next/link'

export const Projects = () => {
  return (
    <section>
      <h3 className="mt-8 mb-8 text-xl text-gray-600 md:mt-10 md:text-2xl">
        Projects that I've worked on
      </h3>
      <div className="mb-8 md:mb-10">
        <Link href="/projects/awesome">
          <a className="block p-8 border-2 border-solid border-transparent rounded bg-white shadow-xl transition-all duration-300 ease-in-out hover:border-purple-400 transform hover:translate-x-0 hover:-translate-y-1">
            <img
              className="w-full rounded shadow-inner"
              src="https://ph-files.imgix.net/e4873aed-76ce-4c13-90af-1c6a40f83098.png?auto=format&auto=compress&codec=mozjpeg&cs=strip"
            />
            <h2 className="text-base text-gray-600 mt-5 md:text-xl">
              My awesome project
            </h2>
          </a>
        </Link>
      </div>
    </section>
  )
}
