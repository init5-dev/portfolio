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
        <div className="flex items-center justify-center gap-4 my-4 py-4 w-full">

            <div>
                {
                    storyProg > 0 && <ArrowButton onClick={prevStory} />
                }
            </div>
            <div className="flex items-center">
                <p className={textClass + 'lg:text-justify md:text-justify sm:text-left'}>
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