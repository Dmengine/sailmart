import closeIcon from "../../assets/modal-close.png"
import checkIcon from "../../assets/modal-check.png"
import errorIcon from "../../assets/modal-error.png"

export default function ContactModal({ modal, message, onClose}) {
    
    return (
        <>
            <main className={`fixed inset-0 flex justify-center items-center 
                w-full h-full z-10 ${modal ? "visible bg-black/40" : "invisible"}`}>
                <div className="p-8 w-11/12 h-[auto] bg-gray-50 rounded-xl
                    shadow-lg flex flex-col items-center">
                    <button onClick={onClose} className="self-end w-10 font-bold mb-4
                        hover: hover:opacity-80">
                        <img src={closeIcon} alt="close" 
                        className=""/>
                    </button>
                    <div className="flex flex-col items-center mb-4 text-center">
                        <h4 className="text-4xl text-[#555] font-medium mb-4">
                            {message ? "Message Sent!" 
                                : "Failed. Please try again later."}
                        </h4>
                        <img src={message ? checkIcon : errorIcon} alt="" className="mb-2 w-24"/>
                    </div>
                    {/* <button onClick={onClose} className="bg-[#fafafa] text-[#db4444] w-40 sm:w-32 h-14
                        text-2xl rounded-xl font-medium justify-self-end hover:bg-[#db4444] 
                        hover:text-[#fafafa] border-[#db4444] border-solid border-3
                        ">
                        Close
                    </button> */}
                </div>
            </main>
        </>
    )
}