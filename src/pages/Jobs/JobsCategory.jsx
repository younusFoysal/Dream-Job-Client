import React from 'react';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import {FaBriefcase} from "react-icons/fa";

const JobsCategory = () => {
    return (
        <div>

            <div className="max-w-3xl mx-auto text-center mt-16">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4 pb-4 relative">
                    <span className="bg-clip-text mb-4 text-transparent bg-gradient-to-r from-blue-800 to-sky-500">Jobs by Category</span>
                    <span className="absolute bottom-0 mt-4 left-0 w-full h-1 bg-gradient-to-r from-blue-800 to-sky-500"></span>
                </h1>
                <p className="text-lg text-gray-800 mb-8">We believe that world would be a better place if everyone could get a fair chance.</p>
            </div>

            <div>


                <Tabs>
                    <TabList
                        className="bg-gradient-to-r from-blue-800 to-sky-500 text-center pt-4 px-4 text-white font-semibold border-b-4 border-sky-700 hover:bg-sky-700 focus:outline-none tab-button">
                        <Tab>On-Site Job</Tab>
                        <Tab>Remote Job</Tab>
                        <Tab>Hybrid</Tab>
                        <Tab>Part-Time</Tab>
                    </TabList>

                    <TabPanel>

                        {/*job Card*/}
                        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden  py-6 sm:py-12">
                            <div className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 bg-gray-50 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span className="absolute top-10 z-0 h-10 w-10 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[20]"></span>
                                <div className="relative z-10 mx-auto max-w-md ">
                                    <span className="grid h-10 w-10 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                        <FaBriefcase></FaBriefcase>
                                    </span>
                                    <div className="space-y-6 pt-4 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">

                                        <p className="font-bold text-xl heading">Senior Developer</p>

                                    </div>

                                    <div className="badge badge-accent my-4 bg-sky-500 text-white">Posted by : Foysal</div>


                                    <section
                                        className="mb-2 border bg-neutral-100 p-4 rounded-lg max-w-full bg-neutral-100">
                                        <div className="mx-auto">
                                            <div className="card md:flex max-w-lg">

                                                <div className="flex-grow text-center md:text-left">

                                                    <p className="mt-2 mb-3">
                                                        <span className="font-semibold">Job Posting Date: </span>
                                                        05/10/24
                                                    </p>
                                                    <p className="mt-2 mb-3">
                                                        <span className="font-semibold">Application Deadline: </span>
                                                        15/11/24

                                                    </p>
                                                    <p className="mt-2 mb-3">
                                                        <span className="font-semibold">Salary range: </span>
                                                        50000 tk
                                                    </p>
                                                    <p className="mt-2 mb-3">
                                                        <span className="font-semibold">Job Applicants: </span>
                                                         5
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <div className="pt-5 text-base font-semibold leading-7">
                                        <p>
                                            <a href="#" className=" btn text-sky-500 transition-all duration-300 group-hover:text-white">
                                                View Details
                                                &rarr;
                                            </a>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <p>
                            <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English:
                            /luˈiːdʒi/;
                            Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
                            released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is
                            portrayed
                            as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
                            appears in many games throughout the Mario franchise, often as a sidekick to his brother.
                        </p>
                        <p>
                            Source:{' '}
                            <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
                                Wikipedia
                            </a>
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>
                            <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
                            is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
                            Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
                            attack by Bowser. She often plays the damsel in distress role within the series and
                            is the lead female. She is often portrayed as Mario's love interest and has appeared
                            in Super Princess Peach, where she is the main playable character.
                        </p>
                        <p>
                            Source:{' '}
                            <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
                                Wikipedia
                            </a>
                        </p>
                    </TabPanel>
                    <TabPanel>
                    <p>
                            <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (<i>English: /ˈjoʊʃi/ or /ˈjɒʃi/</i>), once
                            romanized as Yossy, is a fictional anthropomorphic dinosaur who appears in
                            video games published by Nintendo. Yoshi debuted in Super Mario World (1990) on the
                            Super Nintendo Entertainment System as Mario and Luigi's sidekick. Yoshi later starred
                            in platform and puzzle games, including Super Mario World 2: Yoshi's Island, Yoshi's Story
                            and Yoshi's Woolly World. Yoshi also appears in many of the Mario spin-off games, including
                            Mario Party and Mario Kart, various Mario sports games, and Nintendo's crossover fighting
                            game series Super Smash Bros. Yoshi belongs to the species of the same name, which is
                            characterized by their variety of colors.
                        </p>
                        <p>
                            Source:{' '}
                            <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
                                Wikipedia
                            </a>
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>
                            <b>Toad</b> (<i>Japanese: キノピオ Hepburn: Kinopio</i>) is a fictional character who
                            primarily
                            appears in Nintendo's Mario franchise. Created by Japanese video game designer Shigeru
                            Miyamoto,
                            he is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peach's most
                            loyal
                            attendants; constantly working on her behalf. He is usually seen as a non-player character
                            (NPC)
                            who provides assistance to Mario and his friends in most games, but there are times when
                            Toad(s)
                            takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2, Wario's
                            Woods,
                            Super Mario 3D World, and Captain Toad: Treasure Tracker.
                        </p>
                        <p>
                            Source:{' '}
                            <a href="https://en.wikipedia.org/wiki/Toad_(Nintendo)" target="_blank">
                                Wikipedia
                            </a>
                        </p>
                    </TabPanel>
                </Tabs>
            </div>


        </div>
    );
};

export default JobsCategory;