import logo from './images/logo.png'

export default function Footer() {
    return (
        <div className='bg-sky-50 flex flex-col items-center '>
            <div className='flex gap-12 justify-center pt-16'>
                <div className='w-96'>
                    <img src={logo} alt="" width={"50%"} />
                    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, reiciendis. Non quod quisquam ex. Nemo corrupti </h2>
                </div>
                <div>
                    <ul className='list-none flex flex-col gap-4'>
                        <li className='text-sky-500'>Support</li>
                        <li>Getting Started</li>
                        <li>FAQS</li>
                        <li>Help Articles</li>
                        <li>Report an issue</li>
                        <li>Contact Help Desk</li>
                    </ul>
                </div>
                <div>
                    <ul className='list-none flex flex-col gap-4'>
                        <li className='text-sky-500'>Support</li>
                        <li>Getting Started</li>
                        <li>FAQS</li>
                        <li>Help Articles</li>
                        <li>Report an issue</li>
                        <li>Contact Help Desk</li>
                    </ul>
                </div>
                <div>
                    <ul className='list-none flex flex-col gap-4'>
                        <li className='text-sky-500'>Support</li>
                        <li>Getting Started</li>
                        <li>FAQS</li>
                        <li>Help Articles</li>
                        <li>Report an issue</li>
                        <li>Contact Help Desk</li>
                    </ul>
                </div>
            </div>
            <div className='w-3/4 bg-blue-400 h-[0.1rem] m-8'></div>
        </div>
    )
}
