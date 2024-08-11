import React from 'react';
import { MentorBoxProps } from '../../../types/Interface';
import { ButtonBg } from '../../shared/buttons/Buttons';
import Rating from '../rating/Rating';

const MentorBox: React.FC<MentorBoxProps> = ({
    profilePic,
    firstName,
    lastName,
    school,
    course,
    noOfMentees,
    noOfConnections,
    rating,
}) => {
    return (
        <section className="bg-gray-800 p-5 rounded-lg shadow-lg mb-4 flex flex-col items-center">
            <img className="w-24 h-24 rounded-full" src={profilePic} alt={`${firstName} ${lastName}`} />
            <h3 className="text-white text-xl font-semibold mt-3">{`${firstName} ${lastName}`}</h3>
            <p className="text-gray-400 mt-1">{school}</p>
            <p className="text-gray-400 text-sm mb-3">{course}</p>
            <section className='flex gap-5 mb-2 items-center'>
                <section className="text-gray-100 items-center text-center">
                    <section>{noOfMentees}</section>
                    <section className='text-xs text-gray-300'>Mentees:</section>
                </section>
                <section className="text-gray-100 items-center text-center">
                    <section>{noOfConnections}</section>
                    <section className='text-xs text-gray-300'>Connections:</section>
                </section>
            </section>
            <Rating rating={rating} />
            <ButtonBg className='bg-bc px-5 py-2'>
                Apply for Mentorship
            </ButtonBg>
        </section>
    );
};

export default MentorBox;
