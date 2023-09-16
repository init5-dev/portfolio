'use client'

import { useEffect, useState } from "react";
import { stories } from "../data/stories";
import ArrowButton from "./arrowbutton";

export default function StoryCard() {
    const [storyProg, setStoryProg] = useState(0);
    const [textClass, setTextClass] = useState('fade-in-left-60');

    const nextStory = () => {
        console.log('nextStory')
        if (storyProg < stories.length - 1) {
            setStoryProg(storyProg + 1)
        }
    }

    const prevStory = () => {
        if (storyProg > 0) {
            setStoryProg(storyProg - 1)
        }
    }

    return (
        <div className="flex items-center justify-center gap-4 my-4 py-4 sm:w-72 md:w-80 lg:w-96">

            <div>
                {
                    storyProg > 0 && <ArrowButton onClick={prevStory} />
                }
            </div>
            <div className="w-full flex items-center">
                <p className={textClass + ' lg:p-justify'}>
                    {stories[storyProg].body}
                </p>
            </div>

            <div>
                {
                    storyProg < stories.length - 1 && <ArrowButton orientation="right" onClick={nextStory} />
                }
            </div>

        </div>
    );
}