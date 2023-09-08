export default function Home() {
  return (
    <section id="home" className="flex h-screen container pt-12 mx-auto drop-shadow-xl flex-col  opacity-80 flex-1 justify-center">
    <div className="flex flex-col flex-1 justify-center gap-8 ">
        <h1 className="text-8xl font-bold">Hey , I’m Tchisama</h1>
        <h2 className="text-6xl max-w-7xl">Elevating digital experiences with precision and style.</h2>
    </div>
    <div className="flex justify-end pb-8">
      <button className="bg-[#000e] group gap-2 flex text-white text-3xl hover:scale-[1.02] shadow-xl duration-300 px-12 hover:bg-black py-6 rounded-full">
        Let's talk
      </button>
    </div>
    </section>
  )
}
