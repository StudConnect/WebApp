import React from 'react';
import { ButtonBg } from '../../shared/buttons/Buttons';

interface ModalProps {
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-bgray p-6 rounded-lg w-[90%] md:w-[50%]">
                <section className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-swhite">Create New Post</h2>
                    <button onClick={onClose} className="text-black">X</button>
                </section>
                <section>
                    <textarea className="w-full h-40 p-2 bg-transparent rounded-md" placeholder="Write something..."></textarea>
                </section>
                <section className="mt-4 flex justify-end">
                    <ButtonBg className='bg-swhite text-black px-4 py-2' onClick={onClose}>Close</ButtonBg>
                    <ButtonBg className='bg-sblue text-white px-4 py-2 ml-2'>Post</ButtonBg>
                </section>
            </div>
        </div>
    );
};

export default Modal;
