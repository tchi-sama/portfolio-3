
export default function Links() {
    const links = [
        "home",
        "about",
        "work",
        "hontact"
    ]
  return (
    <div className=' opacity-80 backdrop-blur-sm bg-[#fff4] w-fit rounded-full p-2 bottom-4 flex'>
        {
            links.map((link,i)=>(
                <a href={"#"+link} key={i}  className={`px-4 duration-200 py-3 ${0==i && "bg-black text-white"} rounded-full`}>{link}</a>
            ))
        }
    </div>
  )
}
