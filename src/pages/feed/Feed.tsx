import NewPost from "../../components/common/newPost/NewPost"
import Post from "../../components/common/post/Post"
import avatar from "../../assets/images/horjet.jpg"


const Feed = () => {

    const posts = [
        {
            id: 1,
            profile_pic: avatar,
            full_name: "John carlson",
            headline: "Optometry Student at Brentford",
            posted: "4d",
            content: `Day 68-74/100. <br />
            Week 6 ✅ <br /><br />

            ✏️ IoT Fundamentals: IoT Security Course Completed! <br /><br />

            I'm excited to share that I recently completed the IoT Security course offered by Cisco Networking Academy. <br /><br />`
        },
        {
            id: 2,
            profile_pic: avatar,
            full_name: "Benedict Rosswell",
            headline: "Optometry Student at Brentford",
            posted: "1d",
            content: `Through this comprehensive course, I gained in-depth knowledge of: <br /><br />

            - IoT Systems and Architectures <br />
            - The IoT Device Layer Attack <br />
            - IoT Application Layer Attack Surface <br />
            - Vulnerability and Risk Assessment in an IoT System <br /><br />`
        },
        {
            id: 3,
            profile_pic: avatar,
            full_name: "Rose Charly",
            headline: "Optometry Student at Brentford",
            posted: "3w",
            content: `🔹 I understood that IoT security is crucial to prevent attacks on devices, data, and applications, and to ensure the reliability and trustworthiness of IoT systems. <br /><br />

            🔹I learnt how to identify and mitigate vulnerabilities, assess risks, and implement effective security measures to safeguard IoT ecosystems. <br /><br />

            🔹 I also gained a deeper understanding of the importance of secure device provisioning, data encryption, and authentication, as well as the need for continuous monitoring and threat analysis. <br /><br />

            🔹Additionally, I learnt about the various IoT security standards, frameworks, and best practices that can help organizations ensure the security and privacy of their IoT devices and systems. <br /><br />`
        },
        {
            id: 4,
            profile_pic: avatar,
            full_name: "Mikel Jordan",
            headline: "Optometry Student at Brentford",
            posted: "2d",
            content: `A big thank you to Confidence Staveley, CyberSafe Foundation, for providing this course, I'm super grateful! <br /><br />

            #CyberGirls2024 #IoTSecurity <br />
            #ProudCyberGirl #InternetOfThings <br />
            #100DaysOfCybersecurity <br />`
        },
    ]
    return (
        <section className="w-full h-[89vh] md:px-10 px-4 py-2 flex gap-10">
            <section className="h-full w-2/3 overflow-y-scroll">
                <NewPost />
                {
                    posts.map((post, i) => (
                        <Post key={i} post={post} />))
                }
            </section>
            <section className="w-1/3 ">
                
            </section>
        </section>
    )
}

export default Feed