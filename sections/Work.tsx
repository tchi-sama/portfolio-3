import WorkSlider from "../components/WorkSlider";


export default function Work() {
  return (
    <section
      id="work"
      className=" flex pt-8 flex-col justify-center overflow-hidden h-screen container  mx-auto drop-shadow-xl   opacity-80 flex-1 "
    >
      <h1 className="text-4xl md:text-8xl p-4 py-8  font-bold">My Work</h1>
      <WorkSlider/>
    </section>
  );
}

