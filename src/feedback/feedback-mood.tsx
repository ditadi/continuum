import { Toggle } from "@/components/ui/toggle";
import { Angry, FrownIcon, LaughIcon, MehIcon, SmileIcon } from "lucide-react";

type FeedbackMoodProps = {
    mood: number | undefined;
    setMood: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export const FeedbackMood = (props: FeedbackMoodProps) => {
    return (
        <div className="flex gap-1">
            <Toggle
                pressed={props.mood === 1}
                onPressedChange={(pressed) => props.setMood(pressed ? 1 : undefined)}
                size="sm"
                className="w-10 bg-transparent hover:border-blue-300 hover:border hover:bg-blue-100 rounded-full data-[state=on]:bg-blue-100 data-[state=on]:border-blue-300 data-[state=on]:border"
            >
                <Angry className="w-5 h-5 text-red-500" />
            </Toggle>

            <Toggle
                pressed={props.mood === 2}
                onPressedChange={(pressed) => props.setMood(pressed ? 2 : undefined)}
                size="sm"
                className="w-10 bg-transparent hover:border-blue-300 hover:border hover:bg-blue-100 rounded-full data-[state=on]:bg-blue-100 data-[state=on]:border-blue-300 data-[state=on]:border"
            >
                <FrownIcon className="w-5 h-5 text-yellow-500" />
            </Toggle>

            <Toggle
                pressed={props.mood === 3}
                onPressedChange={(pressed) => props.setMood(pressed ? 3 : undefined)}
                size="sm"
                className="w-10 bg-transparent hover:border-blue-300 hover:border hover:bg-blue-100 rounded-full data-[state=on]:bg-blue-100 data-[state=on]:border-blue-300 data-[state=on]:border"
            >
                <MehIcon className="w-5 h-5 text-gray-500" />
            </Toggle>

            <Toggle
                pressed={props.mood === 4}
                onPressedChange={(pressed) => props.setMood(pressed ? 4 : undefined)}
                size="sm"
                className="w-10 bg-transparent hover:border-blue-300 hover:border hover:bg-blue-100 rounded-full data-[state=on]:bg-blue-100 data-[state=on]:border-blue-300 data-[state=on]:border"
            >
                <SmileIcon className="w-5 h-5 text-blue-500" />
            </Toggle>

            <Toggle
                pressed={props.mood === 5}
                onPressedChange={(pressed) => props.setMood(pressed ? 5 : undefined)}
                size="sm"
                className="w-10 bg-transparent hover:border-blue-300 hover:border hover:bg-blue-100 rounded-full data-[state=on]:bg-blue-100 data-[state=on]:border-blue-300 data-[state=on]:border"
            >
                <LaughIcon className="w-5 h-5 text-green-500" />
            </Toggle>
        </div>
    );
};
