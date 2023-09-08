import { useState } from "react";
export default function About() {
  const [aors, setAors] = useState(0);
  return (
    <div
      id="about"
      className="flex h-screen container py-12 mx-auto drop-shadow-xl items-center opacity-80 flex-1 justify-center"
    >
      <div className="flex flex-col gap-2 mr-12">
        <button onClick={()=>setAors(0)} className="p-2 text-xl">
          <div className="h-text">
            <span className={`${aors==1?"text-[#0008]":"text-black"}`}>About me</span>
          </div>
        </button>
        <button onClick={()=>setAors(1)} className="p-2 text-xl">
          <div className="h-text">
            <span className={`${aors==0?"text-[#0008]":"text-black"}`}>Skills</span>
          </div>
        </button>
      </div>
      <div className="flex flex-col flex-1 justify-center gap-8 ">
        {
            aors == 0 ?
            <>
                <h1 className="text-8xl font-bold">Salutations!</h1>
                <p className="text-3xl max-w-7xl">
                I'm Abdessamad, also known as Tchisama. I'm a JavaScript Developer and
                Designer from Morocco. With a passion for blending technical expertise
                and aesthetics, I create captivating web experiences. Let's
                collaborate and build something extraordinary!
                </p>
            </>:
            <>
                <h1 className="text-8xl font-bold">Skills</h1>
            </>
        }
      </div>
    </div>
  );
}
