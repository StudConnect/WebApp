import React, { useState } from 'react'
import { ButtonBg } from '../../shared/buttons/Buttons'
import avatar from "../../../assets/images/horjet.jpg"
import Modal from '../modal/Modal';

const NewPost: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <section className='w-full'>
                <section className='w-full flex items-center justify-between  border-b border-bgray py-5'>
                    <section className="flex items-center gap-2">
                        <section className="w-[40px] h-[40px] rounded-full">
                            <img className="w-full rounded-full" src={avatar} alt={avatar} />
                        </section>
                        <section>
                            <span className='text-para text-sm md:text-base'>Share something David.... </span>
                        </section>
                    </section>
                    <section>
                        <ButtonBg onClick={openModal} className='bg-swhite text-black px-4 py-2'>Post</ButtonBg>
                    </section>
                </section>
            </section>

            {isModalOpen && <Modal onClose={closeModal} />}
            </>
    )
}

export default NewPost