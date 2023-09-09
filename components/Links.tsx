
export default function Links({section}:{section:number}) {
    const links = [
        "home",
        "about",
        "work",
        "contact"
    ]
  return (
    <div className=' hidden md:flex z-50 absolute top-8 left-[50%] translate-x-[-50%] opacity-80 backdrop-blur-sm bg-[#fff4] w-fit rounded-full p-2 '>
        {
            links.map((link,i)=>(
                <a href={"#"+link} key={i}  className={`px-4 uppercase duration-200 py-3 ${section==i && "bg-black text-white"} rounded-full`}>{link}</a>
            ))
        }
    </div>
  )
}
