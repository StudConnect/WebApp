import { FaHome, FaMapPin, FaTwitter, FaInbox, FaBell, FaLock, FaQuestionCircle, FaAngleRight } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Settings = () => {
    return (
        <section className="w-full h-[89vh] md:px-10 px-4 py-3 md:flex md:gap-10">
            <section className="h-full w-full overflow-y-scroll lg:px-20 text-swhite">
                <section className="p-4 lg:p-5 w-full border-0">
                    <section className="mb-6">
                        <h4 className="text-2xl font-bold mb-4">Settings</h4>
                        <section className="mb-4">
                            <h5 className="text-gray-500 text-sm font-medium mb-2">General</h5>
                            <ul className="space-y-2">
                                <li className="border-b border-para last:border-b-0">
                                    <Link to="/profile" className="flex items-center py-3">
                                        <section className='bg-gradient-to-r from-blue-500 to-green-500 rounded-full p-2 mr-3'>
                                            <FaHome className="text-white text-base" />
                                        </section>
                                        <span className="text-base font-medium">Account Information</span>
                                        <span className="ml-auto text-gray-500 text-base"><FaAngleRight/></span>
                                    </Link>
                                </li>
                                <li className="border-b border-para last:border-b-0">
                                    <Link to="contact-information.html" className="flex items-center py-3">
                                        <section className='bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-2 mr-3'>
                                            <FaMapPin className="text-white text-base" />
                                        </section>
                                        <span className="text-base font-medium">Saved Address</span>
                                        <span className="ml-auto text-gray-500 text-base"><FaAngleRight/></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="social.html" className="flex items-center py-3">
                                        <section className='bg-gradient-to-r from-red-500 to-pink-500 rounded-full p-2 mr-3'>
                                            <FaTwitter className="text-white text-base" />
                                        </section>
                                        <span className="text-base font-medium">Social Accounts</span>
                                        <span className="ml-auto text-gray-500 text-base"><FaAngleRight/></span>
                                    </Link>
                                </li>
                            </ul>
                        </section>

                        <section className="mb-4">
                            <h5 className="text-gray-500 text-sm font-medium mb-2">Account</h5>
                            <ul className="space-y-2">
                                <li className="border-b border-para last:border-b-0">
                                    <Link to="/wallet" className="flex items-center py-3">
                                        <section className='bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full p-2 mr-3'>
                                            <FaWallet className="text-white text-base" />
                                        </section>
                                        <span className="text-base font-medium">Balance</span>
                                        <span className="ml-auto text-gray-500 text-base"><FaAngleRight/></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/wallet/history" className="flex items-center py-3">
                                        <section className='bg-gradient-to-r from-blue-500 to-teal-500 rounded-full p-2 mr-3'>
                                            <FaInbox className="text-white text-base" />
                                        </section>
                                        <span className="text-base font-medium">History</span>
                                        <span className="ml-auto text-gray-500 text-base"><FaAngleRight/></span>
                                    </Link>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h5 className="text-gray-500 text-sm font-medium mb-2">Other</h5>
                            <ul className="space-y-2">
                                <li className="border-b border-para last:border-b-0">
                                    <Link to="default-notification.html" className="flex items-center py-3">
                                        <section className='bg-gradient-to-r from-yellow-500 to-red-500 rounded-full p-2 mr-3'>
                                            <FaBell className="text-white text-base" />
                                        </section>
                                        <span className="text-base font-medium">Notification</span>
                                        <span className="ml-auto text-gray-500 text-base"><FaAngleRight/></span>
                                    </Link>
                                </li>
                                <li className="border-b border-para last:border-b-0">
                                    <Link to="help-box.html" className="flex items-center py-3">
                                        <section className='bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 mr-3'>
                                            <FaQuestionCircle className="text-white text-base" />
                                        </section>
                                        <span className="text-base font-medium">Help</span>
                                        <span className="ml-auto text-gray-500 text-base"><FaAngleRight/></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="flex items-center py-3">
                                        <section className='bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-2 mr-3'>
                                            <FaLock className="text-white text-base" />
                                        </section>
                                        <span className="text-base font-medium">Logout</span>
                                        <span className="ml-auto text-gray-500 text-base"><FaAngleRight/></span>
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Settings;
