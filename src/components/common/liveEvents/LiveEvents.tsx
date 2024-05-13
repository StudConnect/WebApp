import React from 'react';
import { ButtonBg } from '../../shared/buttons/Buttons';
import { EventProps } from '../../../types/Interface';

const LiveEvents: React.FC<EventProps> = ({ events }) => {
    return (
        <section className="border border-bgray p-4 rounded-md">
            <section className="w-full mb-5">
                <h3 className="text-swhite text-xl font-medium text-left">Live Events</h3>
            </section>
            <section>
                <ul className='flex flex-col gap-8'>
                    {events.map((event, index) => (
                        <li key={index}>
                            <section className='w-full flex items-center'>
                                <section className="w-[25px] h-[25px] rounded-full">
                                    <img className="w-full rounded-full" src={event.speaker_profile_pic} alt={event.speaker_profile_pic} />
                                </section>
                                <section className='text-swhite2 text-sm pl-2'>
                                    <span className='text-swhite'>{`${event.speaker_first_name}`}</span>
                                    <span> is speaking...</span></section>
                            </section>
                            <section>
                                <section className='mb-2'>
                                    <h4 className='text-swhite font-medium'>{event.title}</h4>
                                </section>
                                <section>
                                    <ButtonBg className='linear-gradient text-white py-2'>Join now</ButtonBg>
                                </section>
                            </section>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
}

export default LiveEvents;
