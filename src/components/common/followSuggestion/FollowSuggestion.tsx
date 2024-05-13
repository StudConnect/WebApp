import React from 'react'
import { UserFollowProps } from '../../../types/Interface'
import { ButtonBg } from '../../shared/buttons/Buttons'

const FollowSuggestion: React.FC<UserFollowProps> = ({ users }) => {
    return (
        <section className="border border-bgray p-4 rounded-md">
            <section className="w-full mb-5">
                <h3 className="text-swhite text-xl font-medium text-left">Who to Follow</h3>
            </section>
            <section>
                <ul className='flex flex-col gap-8'>
                    {users.map((user, index) => (
                        <li className='w-full flex items-center gap-1' key={index}>
                            <section className='w-full flex items-center'>
                                <section className="w-[40px] h-[40px] rounded-full">
                                    <img className="w-full rounded-full" src={user.profile_pic} alt={user.profile_pic} />
                                </section>
                                <section className='text-swhite2 text-sm pl-2'>
                                    <h4 className='text-swhite'>{`${user.full_name}`}</h4>
                                    <span className='text-xs'>{user.headline}</span>
                                </section>
                            </section>
                            <section>
                                <ButtonBg className='linear-gradient text-white px-4 py-2'>Follow</ButtonBg>
                            </section>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
}

export default FollowSuggestion