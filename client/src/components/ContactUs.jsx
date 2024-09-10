
export default function ContactUs() {
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-center m-2">Reach our Help Desk for Support</h1>
            <p className="self-center w-[30%] text-center">
                Questions? Need assistance? Our dedicated support
                team is here to help you every step of the way:
            </p>
            <form action="" className="flex gap-8 justify-center m-16">
            <input type="text" placeholder="Enter your first name" className="border-2 border-solid border-sky-400 focus:border-sky-600 focus:shadow-md focus:shadow-sky-200 outline-none w-72 rounded-xl h-12 px-14"/>
            <input type="email" placeholder="Enter your email address"  className="border-2 border-solid border-sky-400 focus:border-sky-600 focus:shadow-md focus:shadow-sky-200 outline-none w-72 rounded-xl h-12 px-10"/>
            <button className="bg-blue-800 focus:bg-blue-900 hover:text-gray-300 hover:border-2 border-blue-800  text-white text-xs rounded-lg font-semibold cursor-pointer p-3 border-2 border-solid border-transparent tracking-[0.5px] w-28 h-12">Contact us</button>
            </form>
        </div>
    )
}
