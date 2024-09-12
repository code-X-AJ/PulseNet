import logo from './images/logo.png'

export default function Footer() {
    return (
        <div className='bg-blue-50 flex flex-col items-center '>
            <div className='flex gap-12 justify-around pt-16'>
                <div className='w-[30%]'>
                    <img src={logo} alt="" width={"50%"} />
                    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, reiciendis. Non quod quisquam ex. Nemo corrupti </h2>
                </div>
                <div className='text-slate-600'>
                    <ul className='list-none flex flex-col gap-4'>
                        <li className='text-sky-500 font-medium text-lg'>Support</li>
                        <li>Getting Started</li>
                        <li>FAQS</li>
                        <li>Help Articles</li>
                        <li>Report an issue</li>
                        <li>Contact Help Desk</li>
                    </ul>
                </div>
                <div className='text-slate-600'>
                    <ul className='list-none flex flex-col gap-4'>
                        <li className='text-sky-500 font-medium text-lg'>Services</li>
                        <li>Booking Appointments</li>
                        <li>Online consultations</li>
                        <li>Prescription</li>
                        <li>Medicine Refills</li>
                        <li>Medical Notes</li>
                    </ul>
                </div>
                <div className='text-slate-600'>
                    <ul className='list-none flex flex-col gap-4'>
                        <li className='text-sky-500 font-medium text-lg'>Legal</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Notice</li>
                        <li>Cookie Preferences</li>
                        <li>Trust Center</li>
                    </ul>
                </div>
            </div>
            <div className='w-[80%] mx-auto bg-blue-400 h-[0.1rem] m-12'></div>
        </div>
    )
}
