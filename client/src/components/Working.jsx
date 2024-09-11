import image from './images/3rd.png'

export default function working() {
    return (
        <div className="flex flex-col">
            <h1 className='text-3xl font-bold text-center m-2'>How our platform works</h1>
            <p className="self-center w-[53%] text-center">
                Navigating your healthcare journey with HealNet is seamless. Just follow these steps mentioned
                below to proceed with your selected services. You can also see our FAQ section for more guidance:
            </p>
            <div className='flex justify-center'>
            <img src={image} alt="" width={"80%"}/>
            </div>
        </div>
    )
}
