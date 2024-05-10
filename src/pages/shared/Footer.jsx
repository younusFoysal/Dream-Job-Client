import logo from "../../assets/logo.png";
import moment from "moment";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <section className="pt-16 pb-7 bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between pb-14 border-b border-gray-500 gap-8">
                    <Link to="/" className="">
                        <img src={logo} className="h-10"/>
                    </Link>
                    <div className="flex items-center gap-4">
                        <a href="/"
                           className="p-3 rounded-full bg-white text-gray-700 group transition-all duration-500 hover:bg-sky-500 hover:text-white focus-within:outline-0 focus-within:bg-sky-500 focus-within:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M13.077 10.7339L13.4445 8.43347H11.1808V6.93821C11.1808 6.30919 11.4968 5.69455 12.5074 5.69455H13.5511V3.73561C12.9433 3.64013 12.3292 3.58847 11.7136 3.58105C9.8505 3.58105 8.63412 4.68453 8.63412 6.67941V8.43347H6.56885V10.7339H8.63412V16.298H11.1808V10.7339H13.077Z"
                                    fill="currentColor" />
                            </svg>
                        </a>
                        <a href="/"
                           className="p-3 rounded-full bg-white text-gray-900 group transition-all duration-500 hover:bg-sky-500 hover:text-white focus-within:outline-0 focus-within:bg-sky-500 focus-within:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M7.7117 9.93956C7.7117 8.66117 8.76298 7.62456 10.0601 7.62456C11.3573 7.62456 12.4092 8.66117 12.4092 9.93956C12.4092 11.218 11.3573 12.2546 10.0601 12.2546C8.76298 12.2546 7.7117 11.218 7.7117 9.93956ZM6.44187 9.93956C6.44187 11.909 8.06177 13.5055 10.0601 13.5055C12.0585 13.5055 13.6784 11.909 13.6784 9.93956C13.6784 7.97012 12.0585 6.37367 10.0601 6.37367C8.06177 6.37367 6.44187 7.97012 6.44187 9.93956ZM12.9761 6.23228C12.976 6.3971 13.0256 6.55824 13.1184 6.69532C13.2113 6.83239 13.3433 6.93926 13.4978 7.00239C13.6523 7.06552 13.8223 7.08209 13.9863 7.05C14.1503 7.01791 14.301 6.93861 14.4193 6.82211C14.5377 6.70561 14.6182 6.55716 14.6509 6.39552C14.6836 6.23388 14.667 6.06632 14.603 5.91402C14.5391 5.76173 14.4307 5.63153 14.2917 5.53991C14.1527 5.44829 13.9892 5.39935 13.822 5.39928H13.8217C13.5975 5.39939 13.3825 5.48717 13.224 5.64336C13.0654 5.79954 12.9763 6.01136 12.9761 6.23228V6.23228ZM7.21337 15.5922C6.52637 15.5613 6.15296 15.4486 5.90481 15.3533C5.57583 15.2271 5.3411 15.0767 5.0943 14.8338C4.8475 14.591 4.69474 14.3598 4.56722 14.0356C4.47049 13.7912 4.35605 13.4231 4.32482 12.746C4.29066 12.014 4.28384 11.7941 4.28384 9.93962C4.28384 8.08512 4.29123 7.86584 4.32482 7.13323C4.35611 6.45617 4.47139 6.08878 4.56722 5.84362C4.6953 5.51939 4.84784 5.28806 5.0943 5.04484C5.34076 4.80162 5.57526 4.65106 5.90481 4.5254C6.15285 4.43006 6.52637 4.31728 7.21337 4.28651C7.95613 4.25284 8.17925 4.24612 10.0601 4.24612C11.9411 4.24612 12.1644 4.25339 12.9078 4.28651C13.5948 4.31734 13.9676 4.43095 14.2163 4.5254C14.5453 4.65106 14.7801 4.80195 15.0268 5.04484C15.2736 5.28773 15.4258 5.51939 15.5539 5.84362C15.6507 6.08806 15.7651 6.45617 15.7963 7.13323C15.8305 7.86584 15.8373 8.08512 15.8373 9.93962C15.8373 11.7941 15.8305 12.0134 15.7963 12.746C15.765 13.4231 15.65 13.7911 15.5539 14.0356C15.4258 14.3598 15.2733 14.5912 15.0268 14.8338C14.7804 15.0765 14.5453 15.2271 14.2163 15.3533C13.9683 15.4486 13.5948 15.5614 12.9078 15.5922C12.165 15.6258 11.9419 15.6326 10.0601 15.6326C8.1784 15.6326 7.9559 15.6258 7.21337 15.5922V15.5922ZM7.15503 3.03717C6.40489 3.07084 5.8923 3.18806 5.44465 3.35973C4.98105 3.53701 4.58859 3.77484 4.19641 4.16073C3.80423 4.54662 3.56352 4.93401 3.38364 5.39089C3.20945 5.83234 3.09051 6.33723 3.05635 7.07651C3.02162 7.81695 3.01367 8.05367 3.01367 9.93956C3.01367 11.8255 3.02162 12.0622 3.05635 12.8026C3.09051 13.542 3.20945 14.0468 3.38364 14.4882C3.56352 14.9448 3.80429 15.3327 4.19641 15.7184C4.58853 16.1041 4.98105 16.3416 5.44465 16.5194C5.89314 16.6911 6.40489 16.8083 7.15503 16.842C7.90675 16.8756 8.14655 16.884 10.0601 16.884C11.9737 16.884 12.2139 16.8762 12.9653 16.842C13.7155 16.8083 14.2277 16.6911 14.6756 16.5194C15.139 16.3416 15.5317 16.1043 15.9239 15.7184C16.3161 15.3325 16.5563 14.9448 16.7367 14.4882C16.9108 14.0468 17.0304 13.5419 17.064 12.8026C17.0981 12.0616 17.1061 11.8255 17.1061 9.93956C17.1061 8.05367 17.0981 7.81695 17.064 7.07651C17.0298 6.33717 16.9108 5.83206 16.7367 5.39089C16.5563 4.93428 16.3154 4.54723 15.9239 4.16073C15.5323 3.77423 15.139 3.53701 14.6762 3.35973C14.2277 3.18806 13.7154 3.07028 12.9658 3.03717C12.2145 3.00351 11.9743 2.99512 10.0607 2.99512C8.14712 2.99512 7.90675 3.00295 7.15503 3.03717Z"
                                    fill="currentColor" />
                            </svg>
                        </a>
                        <a href="/"
                           className="p-3 rounded-full bg-white text-gray-700 group transition-all duration-500 hover:bg-sky-500 hover:text-white focus-within:outline-0 focus-within:bg-sky-500 focus-within:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.19141 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                                    fill="currentColor" />
                            </svg>
                        </a>
                        <a href="/"
                           className="p-3 rounded-full bg-white text-gray-700 group transition-all duration-500 hover:bg-sky-500 hover:text-white focus-within:outline-0 focus-within:bg-sky-500 focus-within:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M15.9326 5.13919C16.5664 5.31036 17.0646 5.80978 17.233 6.44286C17.5394 7.59178 17.5394 9.99044 17.5394 9.99044C17.5394 9.99044 17.5394 12.3891 17.233 13.538C17.0623 14.1734 16.5641 14.6729 15.9326 14.8417C14.7866 15.1489 10.1886 15.1489 10.1886 15.1489C10.1886 15.1489 5.59296 15.1489 4.44462 14.8417C3.81082 14.6705 3.31266 14.1711 3.14427 13.538C2.83789 12.3891 2.83789 9.99044 2.83789 9.99044C2.83789 9.99044 2.83789 7.59178 3.14427 6.44286C3.315 5.80744 3.81316 5.30801 4.44462 5.13919C5.59296 4.83203 10.1886 4.83203 10.1886 4.83203C10.1886 4.83203 14.7866 4.83203 15.9326 5.13919ZM12.539 9.99044L8.71982 12.2015V7.77936L12.539 9.99044Z"
                                      fill="currentColor" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="py-14 flex flex-col lg:flex-row justify-between gap-8 border-b border-gray-500">
                    <div className="w-full max-lg:mx-auto flex flex-col sm:flex-row max-lg:items-center max-lg:justify-between gap-6 md:gap-12 lg:gap-24">
                        <div className="">
                            <h6 className="text-lg font-medium text-white mb-7 max-lg:text-center">Dream Job</h6>
                            <ul className="flex flex-col max-lg:items-center gap-6">
                                <li><a href="/"
                                       className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-sky-400 focus-within:outline-0 focus-within:text-sky-400">Home</a>
                                </li>
                                <li><a href="/"
                                       className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-sky-400 focus-within:outline-0 focus-within:text-sky-400">About</a>
                                </li>
                                <li><a href="/"
                                       className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-sky-400 focus-within:outline-0 focus-within:text-sky-400">All Jobs</a>
                                </li>
                                <li><a href="/"
                                       className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-sky-400 focus-within:outline-0 focus-within:text-sky-400">Pro
                                    Version</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <h6 className="text-lg font-medium text-white mb-7 max-lg:text-center">Products</h6>
                            <ul className="flex flex-col gap-6 max-lg:items-center">
                                <li><a href="/"
                                       className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-sky-400 focus-within:outline-0 focus-within:text-sky-400">
                                    Remote Jobs</a></li>
                                <li><a href="/"
                                       className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-sky-400 focus-within:outline-0 focus-within:text-sky-400">
                                    On Site Jobs</a></li>
                                <li><a href="/"
                                       className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-sky-400 focus-within:outline-0 focus-within:text-sky-400">
                                    New Jobs</a></li>
                                <li><a href="/"
                                       className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-sky-400 focus-within:outline-0 focus-within:text-sky-400">
                                    Search Jobs</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <h6 className="text-lg font-medium text-white mb-7 max-lg:text-center">Resources</h6>
                            <ul className="flex flex-col gap-6 max-lg:items-center">
                                <li><a href="/"
                                       className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-sky-400 focus-within:outline-0 focus-within:text-sky-400">FAQs</a>
                                </li>
                                <li><a href="/"
                                       className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-sky-400 focus-within:outline-0 focus-within:text-sky-400">Quick
                                    Start</a></li>
                                <li><a href="/"
                                       className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-sky-400 focus-within:outline-0 focus-within:text-sky-400">Documentation</a>
                                </li>
                                <li><a href="/"
                                       className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-sky-400 focus-within:outline-0 focus-within:text-sky-400">User
                                    Guide</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-md max-lg:mx-auto ">
                        <h6 className="text-lg font-medium text-white mb-7">Newsletter</h6>
                        <div className="bg-gray-800 rounded-3xl p-5">
                            <form action="#" className="flex flex-col gap-5">
                                <div className="relative">
                                    <label className="flex  items-center mb-2 text-gray-400 text-base font-medium">Email
                                    </label>
                                    <input type="text" id="default-search"
                                           className="block w-full px-5 py-3 text-lg font-normal shadow-xs text-white bg-transparent border border-gray-400 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed focus-within:border-gray-300"
                                           placeholder="career@dreamjob.com" required=""/>
                                </div>
                                <div className="flex flex-col min-[540px]:flex-row items-center justify-between gap-3">
                                    <div className="flex items-start black">
                                        <input id="checked-checkbox" type="checkbox" value=""
                                               className="w-5 h-5 aspect-square appearance-none cursor-pointer border border-gray-600 bg-transparent  rounded-md mr-2 hover:border-gray-400 hover:bg-gray-900 checked:bg-no-repeat checked:bg-center checked:border-gray-400 checked:bg-gray-800"
                                               checked=""/>
                                            <label for="checked-checkbox" className="text-sm font-normal cursor-pointer text-gray-400">
                                                I agree with <a href="/" className="text-sky-500">Privacy Policy</a> and <a
                                                href="/" className="text-sky-500">Terms of Condition</a></label>
                                    </div>
                                    <input type="submit" value="Send"
                                           className="text-white text-base font-semibold py-3 px-7 rounded-full cursor-pointer bg-sky-500 transition-all duration-500 hover:bg-white hover:text-gray-900"/>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 pt-7">
        <span className="text-sm font-normal text-gray-400">
        <a href="https://dreamjob.io/" className="">©Dream Job</a> {moment().format('YYYY') }, All rights reserved.
        </span>
                    <div className="relative  text-gray-500 focus-within:text-gray-900 ">
                        <div className="absolute inset-y-0 right-6 flex items-center pl-3 pointer-events-none ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M16.8192 5.15193L17.3925 4.59395L17.3836 4.58478L17.3743 4.5759L16.8192 5.15193ZM19.25 10.9796L20.0499 10.9904L20.0501 10.9776L20.0499 10.9648L19.25 10.9796ZM16.8481 16.8192L17.4061 17.3925L17.4152 17.3836L17.4241 17.3743L16.8481 16.8192ZM11.0204 19.25L11.0096 20.0499L11.0224 20.0501L11.0352 20.0499L11.0204 19.25ZM5.1808 16.8481L4.60752 17.4061L4.61645 17.4152L4.62566 17.4241L5.1808 16.8481ZM2.75 11.0204L1.95007 11.0096L1.9499 11.0224L1.95014 11.0352L2.75 11.0204ZM5.15193 5.1808L4.59395 4.60752L4.58478 4.61645L4.5759 4.62566L5.15193 5.1808ZM10.9796 2.75L10.9904 1.95007L10.9776 1.9499L10.9648 1.95014L10.9796 2.75ZM6.46726 3.90057L5.90927 3.32729L5.90927 3.32729L6.46726 3.90057ZM9.1444 2.78389L9.15917 3.58376L9.1444 2.78389ZM2.77481 9.18508L1.97488 9.17427L2.77481 9.18508ZM3.87823 6.50244L3.30219 5.9473L3.87823 6.50244ZM3.90057 15.5327L4.47385 14.9748L4.47385 14.9748L3.90057 15.5327ZM2.78389 12.8556L3.58376 12.8408L2.78389 12.8556ZM9.18508 19.2252L9.17427 20.0251L9.17427 20.0251L9.18508 19.2252ZM6.50244 18.1218L7.05759 17.5457L7.05759 17.5457L6.50244 18.1218ZM15.5327 18.0994L14.9748 17.5262L14.9748 17.5262L15.5327 18.0994ZM12.8556 19.2161L12.8704 20.016L12.8704 20.016L12.8556 19.2161ZM19.2252 12.8149L20.0251 12.8257L20.0251 12.8257L19.2252 12.8149ZM18.1218 15.4976L17.5457 14.9424L17.5457 14.9424L18.1218 15.4976ZM18.0994 6.46726L18.6727 5.90927L18.6727 5.90927L18.0994 6.46726ZM19.2161 9.1444L20.016 9.12963L20.016 9.12963L19.2161 9.1444ZM15.4976 3.87823L16.0527 3.30219L16.0527 3.30219L15.4976 3.87823ZM12.8149 2.77481L12.8257 1.97488L12.8149 2.77481ZM7.47127 8.25477C7.47127 8.69659 7.82944 9.05477 8.27127 9.05477C8.7131 9.05477 9.07127 8.69659 9.07127 8.25477H7.47127ZM10.4489 13.3571C10.4489 13.7989 10.807 14.1571 11.2489 14.1571C11.6907 14.1571 12.0489 13.7989 12.0489 13.3571H10.4489ZM10.9753 15.6237C10.5335 15.6237 10.1753 15.9819 10.1753 16.4237C10.1753 16.8656 10.5335 17.2237 10.9753 17.2237V15.6237ZM11.0246 17.2237C11.4664 17.2237 11.8246 16.8656 11.8246 16.4237C11.8246 15.9819 11.4664 15.6237 11.0246 15.6237V17.2237ZM14.9424 4.45426L16.2641 5.72797L17.3743 4.5759L16.0527 3.30219L14.9424 4.45426ZM16.2459 5.70992L17.5262 7.02524L18.6727 5.90927L17.3925 4.59395L16.2459 5.70992ZM18.4162 9.15917L18.4501 10.9944L20.0499 10.9648L20.016 9.12963L18.4162 9.15917ZM18.4501 10.9688L18.4253 12.8041L20.0251 12.8257L20.0499 10.9904L18.4501 10.9688ZM17.5457 14.9424L16.272 16.2641L17.4241 17.3743L18.6978 16.0527L17.5457 14.9424ZM16.2901 16.2459L14.9748 17.5262L16.0907 18.6727L17.4061 17.3925L16.2901 16.2459ZM12.8408 18.4162L11.0056 18.4501L11.0352 20.0499L12.8704 20.016L12.8408 18.4162ZM11.0312 18.4501L9.19589 18.4253L9.17427 20.0251L11.0096 20.0499L11.0312 18.4501ZM7.05759 17.5457L5.73595 16.272L4.62566 17.4241L5.9473 18.6978L7.05759 17.5457ZM5.75408 16.2901L4.47385 14.9748L3.32729 16.0907L4.60752 17.4061L5.75408 16.2901ZM3.58376 12.8408L3.54986 11.0056L1.95014 11.0352L1.98403 12.8704L3.58376 12.8408ZM3.54993 11.0312L3.57474 9.19589L1.97488 9.17427L1.95007 11.0096L3.54993 11.0312ZM4.45426 7.05759L5.72797 5.73595L4.5759 4.62566L3.30219 5.9473L4.45426 7.05759ZM5.70992 5.75408L7.02524 4.47385L5.90927 3.32729L4.59395 4.60752L5.70992 5.75408ZM9.15917 3.58376L10.9944 3.54986L10.9648 1.95014L9.12963 1.98403L9.15917 3.58376ZM10.9688 3.54993L12.8041 3.57474L12.8257 1.97488L10.9904 1.95007L10.9688 3.54993ZM7.02524 4.47385C7.62182 3.89319 7.77674 3.76056 7.95015 3.68823L7.3342 2.21154C6.814 2.42853 6.41685 2.83325 5.90927 3.32729L7.02524 4.47385ZM9.12963 1.98403C8.42143 1.99711 7.8544 1.99456 7.3342 2.21154L7.95015 3.68823C8.12355 3.6159 8.32681 3.59913 9.15917 3.58376L9.12963 1.98403ZM3.57474 9.19589C3.58599 8.36346 3.60176 8.16013 3.67323 7.98637L2.19351 7.37774C1.97911 7.899 1.98446 8.46601 1.97488 9.17427L3.57474 9.19589ZM3.30219 5.9473C2.81067 6.45732 2.40792 6.85647 2.19351 7.37774L3.67323 7.98637C3.7447 7.81261 3.87656 7.65703 4.45426 7.05759L3.30219 5.9473ZM4.47385 14.9748C3.89319 14.3782 3.76056 14.2233 3.68823 14.0499L2.21154 14.6658C2.42853 15.186 2.83325 15.5831 3.32729 16.0907L4.47385 14.9748ZM1.98403 12.8704C1.99711 13.5786 1.99456 14.1456 2.21154 14.6658L3.68823 14.0499C3.6159 13.8764 3.59913 13.6732 3.58376 12.8408L1.98403 12.8704ZM9.19589 18.4253C8.36346 18.414 8.16013 18.3982 7.98637 18.3268L7.37774 19.8065C7.899 20.0209 8.46601 20.0155 9.17427 20.0251L9.19589 18.4253ZM5.9473 18.6978C6.45732 19.1893 6.85647 19.5921 7.37774 19.8065L7.98637 18.3268C7.81261 18.2553 7.65703 18.1234 7.05759 17.5457L5.9473 18.6978ZM14.9748 17.5262C14.3782 18.1068 14.2233 18.2394 14.0499 18.3118L14.6658 19.7885C15.186 19.5715 15.5831 19.1668 16.0907 18.6727L14.9748 17.5262ZM12.8704 20.016C13.5786 20.0029 14.1456 20.0054 14.6658 19.7885L14.0499 18.3118C13.8764 18.3841 13.6732 18.4009 12.8408 18.4162L12.8704 20.016ZM18.4253 12.8041C18.414 13.6365 18.3982 13.8399 18.3268 14.0136L19.8065 14.6223C20.0209 14.101 20.0155 13.534 20.0251 12.8257L18.4253 12.8041ZM18.6978 16.0527C19.1893 15.5427 19.5921 15.1435 19.8065 14.6223L18.3268 14.0136C18.2553 14.1874 18.1234 14.343 17.5457 14.9424L18.6978 16.0527ZM17.5262 7.02524C18.1068 7.62182 18.2394 7.77674 18.3118 7.95015L19.7885 7.3342C19.5715 6.814 19.1668 6.41685 18.6727 5.90927L17.5262 7.02524ZM20.016 9.12963C20.0029 8.42143 20.0054 7.8544 19.7885 7.3342L18.3118 7.95015C18.3841 8.12355 18.4009 8.32681 18.4162 9.15917L20.016 9.12963ZM16.0527 3.30219C15.5427 2.81067 15.1435 2.40792 14.6223 2.19351L14.0136 3.67323C14.1874 3.7447 14.343 3.87656 14.9424 4.45426L16.0527 3.30219ZM12.8041 3.57474C13.6365 3.58599 13.8399 3.60176 14.0136 3.67323L14.6223 2.19351C14.101 1.97911 13.534 1.98446 12.8257 1.97488L12.8041 3.57474ZM9.07127 8.25477C9.07127 7.5843 9.31892 7.13758 9.64994 6.84876C9.99678 6.54614 10.4843 6.37635 11 6.37635C11.5156 6.37635 12.0031 6.54614 12.35 6.84876C12.681 7.13758 12.9286 7.5843 12.9286 8.25477H14.5286C14.5286 7.13963 14.0941 6.24714 13.4019 5.64315C12.7255 5.05296 11.8486 4.77635 11 4.77635C10.1513 4.77635 9.27445 5.05296 8.59803 5.64315C7.90579 6.24714 7.47127 7.13963 7.47127 8.25477H9.07127ZM12.9286 8.25477C12.9286 8.74708 12.8136 9.04092 12.6698 9.26294C12.5041 9.51866 12.2833 9.71487 11.9452 10.0281C11.629 10.3209 11.2348 10.6979 10.9354 11.2419C10.6292 11.7985 10.4489 12.4766 10.4489 13.3571H12.0489C12.0489 12.7074 12.1785 12.3016 12.3372 12.0132C12.5029 11.7122 12.7286 11.4833 13.0324 11.202C13.3141 10.941 13.7133 10.5949 14.0126 10.1329C14.3337 9.63724 14.5286 9.03802 14.5286 8.25477H12.9286ZM10.9753 17.2237H11.0246V15.6237H10.9753V17.2237Z" fill="#6B7280"/>
                            </svg>

                        </div>
                        <button type="button" id="default-search"
                                className="block w-full lg:min-w-[448px] pr-12 pl-6 py-3 text-base font-normal shadow-xs text-gray-50 bg-transparent border border-gray-700 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed transition-all duration-500 "
                        >Have a question? talk to us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;