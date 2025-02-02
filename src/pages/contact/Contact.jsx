import React from 'react';

export default function Contact() {

    return (
        <>
            <h4 className="px-36 my-8 hidden lg:block"><span className="opacity-50" >Home /</span><span> Contact</span></h4>
            <main className="flex justify-center items-center lg:flex-row sm:mt-0 mt-16">
                <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-8 justify-center
                    items-center">
                    <section className="flex flex-col w-[100%] h-[auto] lg:w-[50%] lg:h-[457px] 
                        sm:py-10 sm:px-9 py-8 px-9 rounded sm:shadow-lg mb-0 justify-center
                        border-gray-300 border-solid sm:border-2 sm:mb-0 text-xl sm:text-base">
                        <div className="flex items-center space-x-2
                            mb-4">
                            <div className="bg-[#db4444] w-10 h-10 
                                rounded-full flex justify-center items-center">
                                <img src="/phone-icon.png" alt="phone-icon"/></div>
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
                                <img src="/email-icon.png" alt="email-icon"/>
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
                            opacity-50 mt-8 sm:hidden"></div>
                        
                    </section>
                    <section className="w-[100%] h-[auto] sm:h-[457px] sm:py-14 sm:px-9 
                        pb-4 px-3 rounded sm:shadow-lg overflow-hidden
                        border-gray-300 border-solid sm:border-2 text-xl sm:text-base">
                        <h1 className="font-semibold text-2xl text-center mb-8
                            sm:hidden">
                            Send Us a Message
                        </h1>
                        <form>
                            <div className="grid grid-cols-3 grid-rows-5 gap-x-4 gap-y-6">
                                <input className="sm:col-span-1 sm:row-span-1 col-span-3 
                                    bg-gray-200 py-3 px-6 sm:px-4 opacity-50 sm:outline-none
                                    cursor-pointer outline-black" 
                                    placeholder="Your Name" 
                                    id="name" name="name" type="text" required
                                />
                                <input className="sm:col-span-1 sm:row-span-1 col-span-3 
                                    bg-gray-200 py-3 px-6 sm:px-4 opacity-50 sm:outline-none
                                    cursor-pointer outline-black" 
                                    placeholder="Your Email" 
                                    id="name" name="name" type="text" required
                                />
                                <input className="sm:col-span-1 sm:row-span-1 col-span-3 
                                    bg-gray-200 py-3 px-6 sm:px-4 opacity-50 sm:outline-none
                                    cursor-pointer outline-black" 
                                    placeholder="Your Password" 
                                    id="name" name="name" type="text" required
                                />
                                <textarea className="col-span-3 row-span-3 bg-gray-200 
                                    py-3 px-6 resize-none sm:px-4 opacity-50 sm:outline-none
                                    cursor-pointer outline-black" 
                                    placeholder="Your Message"
                                    id="text" name="message" maxLength={750}>
                                </textarea>
                                <button className="sm:col-start-3 sm:col-end-4 col-span-3 
                                    bg-[#db4444] text-[#fafafa] rounded py-3 px-6
                                    sm:justify-self-end cursor-pointer sm:w-[215px]" 
                                    type="submit">Send Message
                                </button>
                                
                            </div>
                        </form>
                    </section>
                </div>
            </main>
        </>
    )
}