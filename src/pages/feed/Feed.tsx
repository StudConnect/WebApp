import NewPost from "../../components/common/newPost/NewPost"
import Post from "../../components/common/post/Post"
import LiveEvents from "../../components/common/liveEvents/LiveEvents"
import FollowSuggestion from "../../components/common/followSuggestion/FollowSuggestion"
import { events, posts, users } from "../../utils/DummyData"


const Feed = () => {
    return (
        <section className="w-full h-[89vh] md:px-10 px-4 py-2 md:flex md:gap-10">
            <section className="h-full w-full md:w-2/3 overflow-y-scroll lg:px-16">
                <NewPost />
                {
                    posts.map((post, i) => (
                        <Post key={i} post={post} />))
                }
            </section>
            <section className="w-full hidden md:w-1/3 h-full overflow-y-scroll gap-10 md:flex flex-col">
                <LiveEvents events={events} />
                <FollowSuggestion users={users} />
            </section>
        </section>
    )
}

export default Feed