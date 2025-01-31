import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import phoneImgUrl from "../../assets/phone-icon.png"
import emailImgUrl from "../../assets/email-icon.png"
import loadingUrl from "../../assets/dual-loading-balls.gif"
import ContactModal from "./ContactModal"

export default function Contact() {
    const [status, setStatus] = useState({
        message: false,
        modal: false,
        loading: false
    })

    const formElement = useRef()

    function SendEmail (e) {
        e.preventDefault()
        setStatus({...status, loading: true})

        emailjs.sendForm('service_mey8v6n', 'template_yie6xer', 
            formElement.current, {
            publicKey: 'nCehppSGIIFcj-4Iq',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            setStatus({...status, modal: true, message: true})
            // formElement.current.reset()
            },
        )
        .catch((error) => {
            console.log('FAILED...');
            setStatus({...status, modal: true, message:false})
            // formElement.current.reset()
            })
    }

    function handleClose () {
        setStatus({...status, modal: false, loading: false})
    }

    const { message, modal, loading } = status

    return (
        <>
            {modal && <ContactModal modal={modal} message={message} onClose={handleClose}/>}
            <h4 className="px-24 my-8 hidden sm:block"><span className="opacity-50" >Home /</span><span> Contact</span></h4>
            <main className="flex justify-center items-center xl:flex-row xl:mt-0 mt-16 px-2 lg:px-12 xl:px-24">
                <div className="flex flex-col gap-y-4 xl:flex-row xl:gap-8 justify-center
                    items-center">
                    <section className="flex flex-col w-[100%] h-[auto] xl:w-[50%] xl:h-[457px] 
                        xl:py-10 xl:px-9 py-8 px-9 rounded xl:shadow-xl mb-0 justify-center
                        border-gray-300 border-solid xl:border-2 xl:mb-0 text-xl xl:text-base">
                        <div className="flex items-center space-x-2
                            mb-4">
                            <div className="bg-[#db4444] w-10 h-10 
                                rounded-full flex justify-center items-center">
                                <img src={phoneImgUrl} alt="phone-icon"/></div>
                            <p className="font-semibold">Call Us</p>
                        </div>
                        <p className="mb-4" >We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>
                        <div className="max-w-full md:max-w-full h-[1px] bg-gray-500
                            opacity-50 my-8"></div>
                        <div className="flex items-center space-x-2
                            mb-6">
                            <div className="bg-[#db4444] w-10 h-10 
                                rounded-full flex justify-center items-center">
                                <img src={emailImgUrl} alt="email-icon"/>
                                </div>
                            <p className="font-semibold">Write To Us</p>
                        </div>
                        <p className="mb-4">Fill out our form and we will contact
                            you within 24 hours.
                        </p>
                        <p>Emails: customer@exclusive.com 
                            <br />  support@exclusive.com
                        </p>
                        <div className="max-w-full md:max-w-full h-[1px] bg-gray-400
                            opacity-50 mt-8 xl:hidden"></div>
                    </section>
                    <section className="w-[100%] h-[auto] xl:h-[457px] xl:py-14 xl:px-9 
                        pb-4 px-3 rounded xl:shadow-xl overflow-hidden
                        border-gray-300 border-solid xl:border-2 text-xl xl:text-base">
                        <h1 className="font-semibold text-2xl text-center mb-8
                            xl:hidden">
                            Send Us a Message
                        </h1>
                        <form onSubmit={SendEmail} ref={formElement} >
                            <div className="grid grid-cols-3 grid-rows-5 gap-x-4 gap-y-6 relative">
                                <input className="xl:col-span-1 xl:row-span-1 col-span-3 
                                    bg-gray-200 py-3 px-6 xl:px-4 opacity-50 xl:outline-none
                                    cursor-pointer outline-black" 
                                    placeholder="Your Name" 
                                    id="name" name="name" type="text" required
                                />
                                <input className="xl:col-span-1 xl:row-span-1 col-span-3 
                                    bg-gray-200 py-3 px-6 xl:px-4 opacity-50 xl:outline-none
                                    cursor-pointer outline-black" 
                                    placeholder="Your Email" 
                                    id="email" name="email" type="email" required 
                                />
                                <input className="xl:col-span-1 xl:row-span-1 col-span-3 
                                    bg-gray-200 py-3 px-6 xl:px-4 opacity-50 xl:outline-none
                                    cursor-pointer outline-black" 
                                    placeholder="Your Phone Number"
                                    id="phone" name="phone" type="number" required
                                />
                                <textarea className="col-span-3 row-span-3 bg-gray-200 
                                    py-3 px-6 resize-none xl:px-4 opacity-50 xl:outline-none
                                    cursor-pointer outline-black" 
                                    placeholder="Your Message"
                                    id="text" name="message" maxLength={750}>
                                </textarea>
                                <button className="xl:col-start-3 xl:col-end-4 col-span-3 
                                    bg-[#db4444] text-[#fafafa] rounded py-3 px-6
                                    xl:justify-self-end cursor-pointer xl:w-[215px]
                                    " 
                                    type="submit">{loading ? "Sending..." : "Send Message"}
                                </button> 
                            </div>
                        </form>
                    </section>
                </div>
            </main>
        </>
    )
}