import React from 'react'
import { PostProps } from '../../../types/Interface'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BiRepost } from 'react-icons/bi'
import { GoCommentDiscussion } from 'react-icons/go'
import { IoBookmarkOutline } from 'react-icons/io5'

const Post: React.FC<PostProps> = ({ post }) => {

    return (
        <section className='w-full  border-b border-bgray'>
            <section className='w-full flex items-center justify-between  py-5'>
                <section className="flex items-center gap-3">
                    <section className="w-[45px] h-[45px] rounded-full">
                        <img className="w-full rounded-full" src={post.profile_pic} alt={post.profile_pic} />
                    </section>
                    <section className='flex flex-col'>
                        <h6 className='text-swhite text-sm'>{post.full_name}</h6>
                        <p className='text-[10px] text-para'>{post.headline}</p>
                        <span className='text-[10px] text-para'>1w.</span>
                    </section>
                </section>
                <section>
                    <span className='text-swhite'>+ Follow</span>
                </section>
            </section>
            <section className='text-swhite2 text-sm'
                dangerouslySetInnerHTML={{ __html: post.content }}>
            </section>
            <section className='w-full flex items-center gap-10 py-3'>
                <section className='w-2/3 text-swhite2 flex items-center justify-between text-lg'>
                    <section className="flex items-center gap-1 cursor-pointer">
                        <IoMdHeartEmpty /><span className='text-sm'>100</span>
                    </section>
                    <section className="flex items-center gap-1 cursor-pointer">
                        <BiRepost /><span className='text-sm'>100</span>
                    </section>
                    <section className="flex items-center gap-1 cursor-pointer">
                        <GoCommentDiscussion /><span className='text-sm'>100</span>
                    </section>
                </section>
                <section className='w-1/3 text-swhite2 justify-end flex'>
                    <section className="flex items-center gap-1 cursor-pointer">
                        <IoBookmarkOutline /><span className='text-sm'>100</span>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Post