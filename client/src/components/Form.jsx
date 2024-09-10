
export default function Form() {
    return (
        <div className="w-10/12 m-auto rounded-3xl border-2 border-solid border-sky-500 tracking-[0.5] shadow-lg">
            <div className="m-12">
                <h1 className="text-3xl">Easily book an appointment in just 3 easy steps.</h1>
                <form action="" className="flex justify-between font-semibold text-gray-600">
                    <div className="flex flex-col justify-end m-8 ml-0 text-xl">
                        <label htmlFor="email address">email address</label>
                        <input type="email" required placeholder="enter your email address" className="border-2 border-solid border-sky-400 focus:border-sky-600 focus:shadow-md focus:shadow-sky-200 outline-none w-72 rounded-xl h-12 px-2"/>
                    </div>
                    <div className="flex flex-col justify-end m-8 text-xl">
                        <label htmlFor="contact">contact no.</label>
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="enter your contact Number" className="border-2 border-solid border-sky-400 focus:border-sky-600 focus:shadow-md focus:shadow-sky-200 outline-none w-72 rounded-xl h-12"/>
                    </div>
                    <div className="flex flex-col justify-end m-8 text-xl">
                        <label htmlFor="email address">email address</label>
                        <input type="date" required placeholder="select date of appointment" className="border-2 border-solid border-sky-400 focus:border-sky-600 focus:shadow-md focus:shadow-sky-200 outline-none w-72 rounded-xl h-12 px-2"/>
                    </div>
                    <div className="flex items-end m-8">
                        <button className="bg-blue-800 hover:bg-blue-900 hover:text-gray-300 hover:border-2 border-blue-800  text-white text-xs rounded-lg font-semibold cursor-pointer p-3 border-2 border-solid border-transparent tracking-[0.5px] w-28 h-12">Book now</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
