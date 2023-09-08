import { useState } from "react";
export default function About() {
  const [aors, setAors] = useState(0);
  return (
    <section
      id="about"
      className="flex h-screen container py-12 mx-auto drop-shadow-xl items-center opacity-80 flex-1 justify-center"
    >
      <div className="flex flex-col gap-2 mr-4 md:mr-12 ">
        <button onClick={()=>setAors(0)} className="p-2 text-md md:text-xl">
          <div className="h-text">
            <span className={`${aors==1?"text-[#0008]":"text-black"}`}>About me</span>
          </div>
        </button>
        <button onClick={()=>setAors(1)} className="p-2 text-md md:text-xl">
          <div className="h-text">
            <span className={`${aors==0?"text-[#0008]":"text-black"}`}>Skills</span>
          </div>
        </button>
      </div>
      <div className="flex flex-col flex-1 justify-center gap-8 ">
        {
            aors == 0 ?
            <div className="px-3">
                <h1 className="text-4xl md:text-8xl  mb-4 md:mb-8 font-bold">Salutations!</h1>
                <p className=" md:text-3xl text-md max-w-7xl">
                I'm Abdessamad, also known as Tchisama. I'm a JavaScript Developer and
                Designer from Morocco. With a passion for blending technical expertise
                and aesthetics, I create captivating web experiences. Let's
                collaborate and build something extraordinary!
                </p>
            </div>:
            <div>
                <h1 className="text-4xl md:text-8xl mb-8 font-bold">Skills</h1>
                <div className="grid md:grid-cols-4 gap-3 grid-cols-2">
                  <div>
                    <h3 className="text-xl md:text-3xl mb-2 md:mb-8">Frontend</h3>
                    <ul className="text-sm md:text-lg">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Vue.js</li>
                      <li>Sass/SCSS</li>
                      <li>tailwindcss</li>
                    </ul>
                  </div>


                  <div>
                    <h3 className="text-xl md:text-3xl mb-2 md:mb-8">Backend</h3>
                    <ul className="text-sm md:text-lg">
                      <li>Node.js</li>
                      <li>Python</li>
                      <li>PHP</li>
                      <li>Express.js</li>
                      <li>Mongodb</li>
                      <li>firebase</li>
                      <li>mysql</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-3xl mb-2 md:mb-8">Design</h3>
                    <ul className="text-sm md:text-lg">
                      <li>Figma</li>
                      <li>Photoshop</li>
                      <li>Illustrator</li>
                      <li>After Effects</li>
                      <li>Premiere Pro</li>
                      <li>Blender</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-3xl mb-2 md:mb-8">Other</h3>
                    <ul className="text-sm md:text-lg">
                      <li>Git / Github</li>
                      <li>Ai / openai apis</li>
                      <li>Blockchain</li>
                      <li>Drawing</li>
                      <li>vfx</li>
                    </ul>
                  </div>


                </div>
            </div>
        }
      </div>
    </section>
  );
}
