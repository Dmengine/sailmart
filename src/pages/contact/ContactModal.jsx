import closeIcon from "../../assets/modal-close.png"
import checkIcon from "../../assets/modal-check2.png"
import errorIcon from "../../assets/modal-error.png"

export default function ContactModal({ mail }) {
    

    return (
        <>
            <main className="fixed flex justify-center items-center 
                w-full h-full z-10">
                <div className="p-8 w-4/5 h-[auto] bg-gray-100 rounded-xl
                    shadow-lg flex flex-col items-center">
                    <button className="self-end w-10 font-bold mb-4
                        text-red-500">
                        <img src={closeIcon} alt="close" 
                        className=""/>
                    </button>
                    <div className="flex flex-col items-center mb-4 text-center">
                        <h4 className="text-4xl text-[#555] font-medium mb-4">
                            {mail ? "Message Sent!" 
                                : "Failed. Please try again later."}
                        </h4>
                        <img src={mail ? checkIcon : errorIcon} alt="check" className="mb-2"/>
                    </div>
                    <button className="bg-[#db4444] text-[#fafafa] w-32 h-14
                    text-2xl rounded font-medium justify-self-end">
                        Close
                    </button>
                </div>
            </main>
        </>
    )
}