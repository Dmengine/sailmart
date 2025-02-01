import checkIcon from "../../../public/modal-check.png"
import errorIcon from "../../../public/modal-error.png"

export default function ContactModal({ modal, message, closeModal }) {
    
    return (
        <>
            <main className={`fixed inset-0 flex justify-center items-center 
                w-full h-full z-10 ${modal ? "visible bg-black/50" : "invisible"}`}>
                <div className="p-8 w-11/12 h-[auto] bg-gray-50 rounded-md
                    shadow-lg flex flex-col items-center sm:w-[520px]">
                    <div className="flex flex-col items-center mb-4 text-center">
                        <img src={message ? checkIcon : errorIcon} alt="" className="mb-4 w-24"/>
                        {message ? 
                            (<div className="text-[#555] font-medium">
                                <p className="text-5xl leading-normal mb-2">Message sent!</p>
                                <p className="text-xl">Thank you for reaching out.</p>
                            </div>) :
                            (<div className="text-[#555] font-medium">
                                <p className="text-5xl leading-normal mb-2">Failed!</p>
                                <p className="text-xl">Please check your internet 
                                    connection and try again.
                                </p>
                            </div>)
                        } 
                    </div>
                    <button onClick={closeModal} className="bg-[#db4444] text-[#fafafa] w-40 h-[50px]
                        text-md rounded font-medium justify-self-end hover:bg-[#db0000] 
                        hover:text-[#fafafa] m-4">
                        OK
                    </button>
                </div>
            </main>
        </>
    )
}