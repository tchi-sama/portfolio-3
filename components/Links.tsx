
export default function Links({section}:{section:number}) {
    const links = [
        "home",
        "about",
        "work",
        "hontact"
    ]
  return (
    <div className=' hidden md:flex opacity-80 backdrop-blur-sm bg-[#fff4] w-fit rounded-full p-2 bottom-4 '>
        {
            links.map((link,i)=>(
                <a href={"#"+link} key={i}  className={`px-4 duration-200 py-3 ${section==i && "bg-black text-white"} rounded-full`}>{link}</a>
            ))
        }
    </div>
  )
}
