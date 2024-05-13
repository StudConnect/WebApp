import React from 'react'
import { ButtonBg } from '../../shared/buttons/Buttons'
import avatar from "../../../assets/images/horjet.jpg"

const NewPost: React.FC = () => {
    return (
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
                    <ButtonBg className='bg-swhite text-black px-4 py-2'>Post</ButtonBg>
                </section>
            </section>
        </section>
    )
}

export default NewPost