import phoneImgUrl from "../../assets/phone-icon.png"
import emailImgUrl from "../../assets/email-icon.png"

export default function Contact() {

    function handleSubmit (e) {
       e.preventDefault()
       const formEl = e.currentTarget
       const formData = new FormData(formEl)
       const name = formData.get("name")
       const email = formData.get("email")
       const phone = formData.get("phone")
       console.log(name, email, phone)
       formEl.reset()
    }

    return (
        <>
            <h4><span>Home</span>/<span>Contact</span></h4>
            <main className="flex justify-center items-center sm:flex-row sm:mt-0 mt-16">
                <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-8 justify-center
                    items-center">
                    <section className="flex flex-col w-[100%] h-[auto] sm:w-[50%] sm:h-[457px] 
                        sm:py-16 sm:px-9 py-8 px-9 rounded sm:shadow-lg mb-4 justify-center
                        border-gray-300 border-solid sm:border-2 sm:mb-0 text-xl sm:text-base">
                        <div className="flex items-center space-x-2
                            mb-4">
                            <div className="bg-[#db4444] w-10 h-10 
                                rounded-full flex justify-center items-center">
                                <img src={phoneImgUrl} alt="phone-icon"/></div>
                            <p className="font-semibold">Call Us</p>
                        </div>
                        <p className="mb-4" >We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p><br />
                        <div className="max-w-full h-[2px] bg-gray-500
                            opacity-50"></div><br />
                        <div className="flex items-center space-x-2
                            mb-4">
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
                        

                    </section>
                    <section className="w-[100%] h-[auto] sm:h-[457px] sm:py-16 sm:px-9 
                        py-8 px-3 rounded sm:shadow-lg overflow-hidden
                        border-gray-300 border-solid sm:border-2">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-3 grid-rows-6 gap-x-4 gap-y-6">
                                <input className="sm:col-span-1 sm:row-span-1 col-span-3 
                                    bg-gray-200 py-3 px-6 sm:px-4 opacity-50 outline-none" 
                                    placeholder="Your Name" 
                                    id="name" name="name" type="text" required
                                />
                                <input className="sm:col-span-1 sm:row-span-1 col-span-3 
                                    bg-gray-200 py-3 px-6 sm:px-4 opacity-50 outline-none"
                                    placeholder="Your Email"
                                    id="email" name="email" type="email" required
                                />
                                <input className="sm:col-span-1 sm:row-span-1 col-span-3 
                                    bg-gray-200 py-3 px-6 sm:px-4 opacity-50 outline-none" 
                                    placeholder="Your Phone"
                                    id="phone" name="phone" type="number" required
                                />
                                <textarea className="col-span-3 row-span-3 bg-gray-200 
                                    py-3 px-6 resize-none sm:px-4 opacity-50 outline-none" 
                                    placeholder="Your Message"
                                    id="text" name="message" maxLength={750}
                                ></textarea>
                                <button className="sm:col-start-3 sm:col-end-4 col-span-3 
                                    bg-[#db4444] text-[#fafafa] rounded py-3 px-6" 
                                    type="submit">Send Message</button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
        </>
    )
}