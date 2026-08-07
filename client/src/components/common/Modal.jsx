function Modal({ children }) {

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

            <div className="bg-white rounded-xl p-6 w-full max-w-md">

                {children}

            </div>

        </div>

    );

}

export default Modal;