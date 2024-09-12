import image from "./images/a-drop-of-pink-and-yellow-paint-in-water.jpg"

export default function card({ Name, address, features }) {
    return (
        <div className="w-64 h-80 border-2 border-solid border-white rounded-3xl m-0 bg-gradient-to-br from-white to-indigo-600">
            <div className="rounded-t-3xl overflow-hidden h-32 w-full">
                <img src={image} alt="" />
            </div>
            <div className="mx-4">
                <div>
                    <div className="flex flex-col text-center">
                        <h1>{Name}</h1>
                        <address>{address}</address>
                    </div>
                    <p>{features}</p>
                </div>
                <div className="flex mt-12 absolute gap-2">
                    <button className="bg-indigo-500 hover:bg-indigo-800 hover:text-black text-white text-[0.6rem] rounded-lg font-semibold uppercase cursor-pointer px-[5px] py-[8px] border-2 border-transparent tracking-[0.5px]">
                        view more
                    </button>
                    <button className="bg-indigo-500 hover:bg-indigo-800 hover:text-black text-white text-[0.6rem] rounded-lg font-semibold uppercase cursor-pointer px-[5px] py-[8px] border-2 border-transparent tracking-[0.5px]">
                        book appointment
                    </button>
                </div>

            </div>
        </div>
    )
}
