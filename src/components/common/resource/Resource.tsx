import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { ResourceProps } from '../../../types/Interface';

const Resource: React.FC<ResourceProps> = ({ resource }) => {
    return (
        <section className='bg-bgray rounded-3xl bg-gray p-2 relative group'>
            <section className='relative'>
                <section className='z-10 absolute left-3 top-3 bg-[#14141F] text-white flex items-center gap-1 px-3 py-2 text-xs rounded-xl'>
                    <FaRegHeart /> <span>34</span>
                </section>
                <section className='absolute inset-0 bg-black opacity-20 rounded-xl'></section>
                <img className='h-[150px] w-full object-cover rounded-xl' src={resource.displayImage} alt={resource.title} />
                <button
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                >
                    <span className="bg-bc text-center text-white px-4 py-2 rounded-lg">Purchase</span>
                </button>
            </section>
            <section className='px-0 pt-3 text-sm text-para'>
                <section className="flex items-center justify-between mb-3">
                    <h3 className='text-white font-semibold text-base'>{resource.title}</h3>
                    <span className='text-white bg-bc rounded-md px-2 font-semibold py-1'>{resource.type}</span>
                </section>
                <section className="flex justify-between">
                    <section className="flex gap-2 items-center">
                        <section className="w-[30px] h-[30px] rounded-3xl">
                            <img className="w-full rounded-lg" src={resource.author.profilePic} alt={`${resource.author.firstName} ${resource.author.lastName}`} />
                        </section>
                        <section className="flex flex-col text-left">
                            <span className='text-xs text-neutral-400'>Creator</span>
                            <span className='text-white font-bold text-sm'>{resource.author.firstName} {resource.author.lastName}</span>
                        </section>
                    </section>
                    <section className="flex flex-col">
                        <span className='text-neutral-400 text-right text-xs'>Price</span>
                        <span className='text-white text-right font-bold text-sm'>Free</span>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Resource;
