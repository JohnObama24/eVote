
import Penus from '../assets/penus.png';
import Instagram from '../assets/instagram.png';
import Youtube from '../assets/youtube.png';
import Facebook from '../assets/facebook.png';
import Website from '../assets/web.png';
import Tiktok from '../assets/tiktok.png'

function Footer () {

    return (
        <footer className='bg-gradient-to-t from-[#a61603] from-10% to-[#1F2937] mt-5 flex flex-col items-center justify-between text-[#d9d9d9] p-4 h-56' >
            <div className='flex'>
                <img src={Penus} alt="Penus" className='w-16'/>
                <p className='align-bottom self-center text-lg text-[#d9d9d9] font-semibold'>SMK PLUS PELITA NUSANTARA</p>
            </div>
            <div className=''>
                <ul className='flex gap-8 mt-5'>
                    <li>
                        <img src={Instagram} className='rounded-full w-9'/>
                    </li>
                    <li>
                        <img src={Youtube} className='rounded-full w-9'/>
                    </li>
                    <li>
                        <img src={Facebook} className='rounded-full w-9'/>
                    </li>
                    <li>
                        <img src={Website} className='rounded-full w-9'/>
                    </li>
                    <li>
                        <img src={Tiktok} className='rounded-full w-9'/>
                    </li>
                </ul>
            </div>
            <h5 className='text-xs '>© 2024 SMK PLUS PELITA NUSANTARA™. All Rights Reserved.</h5>
        </footer>
    )
}

export default Footer;