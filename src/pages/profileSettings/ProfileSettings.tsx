import { FaArrowLeft } from "react-icons/fa"
import { ButtonBg } from "../../components/shared/buttons/Buttons"
import { CustomInput } from "../../components/shared/inputs/CustomInput"
import { CustomTextArea } from "../../components/shared/inputs/CustomTextArea"
import { useNavigate } from "react-router-dom"

const ProfileSettings = () => {
    function handleChange(): void {
        throw new Error("Function not implemented.")
    }
    const navigate = useNavigate()

    return (
        <section className="w-full h-[89vh] md:px-10 px-4 py-2 md:flex md:gap-10">
            <section className="h-full w-full overflow-y-scroll lg:px-5">

                <section className='w-full h-full p-4 overflow-y-scroll pb-20'>
                    <section className='mb-5 flex items-center gap-5'>
                        <section className="cursor-pointer text-white">
                            <FaArrowLeft onClick={() => navigate(-1)} />
                        </section>
                        <section className='text-left py-4'>
                            <h2 className='text-2xl tracking-wide text-swhite font-bold'>Account Details</h2>
                        </section>
                    </section>
                    <section>
                        <section className="w-full flex mb-5 justify-center">
                            <img className='w-28 h-28' src="https://themedox.com/mykd/wp-content/uploads/2023/10/team02.png" alt="" />
                        </section>
                        <section className="w-full mb-4 grid grid-cols-2 gap-3">
                            <CustomInput
                                label={"First Name"}
                                type={"text"}
                                name={"name"}
                                placeholder={"First Name"}
                                handleChange={handleChange}
                            />
                            <CustomInput
                                label={"Last Name"}
                                type={"text"}
                                name={"name"}
                                placeholder={"First Name"}
                                handleChange={handleChange}
                            />
                            <CustomInput
                                label={"Email"}
                                type={"text"}
                                name={"name"}
                                placeholder={"First Name"}
                                handleChange={handleChange}
                            />
                            <CustomInput
                                label={"Phone Number"}
                                type={"text"}
                                name={"name"}
                                placeholder={"First Name"}
                                handleChange={handleChange}
                            />
                        </section>
                        <section className='w-full mb-5'>
                            <CustomTextArea
                                label={"About"}
                                type={"text"}
                                name={"name"}
                                rows={6}
                                placeholder={"Describe yourself"}
                                handleChange={handleChange}
                            />
                        </section>
                        <section className='w-full flex justify-center'>
                            <section className="w-fit">
                                <ButtonBg className='bg-bc px-10 py-3'>
                                    Save
                                </ButtonBg>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default ProfileSettings