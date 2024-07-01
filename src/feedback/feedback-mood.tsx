import { Angry, FrownIcon, LaughIcon, MehIcon, SmileIcon } from "lucide-react";
import { Toggle } from "../components/ui/toggle";

type FeedbackMoodProps = {
    mood: number | undefined;
    setMood: React.Dispatch<React.SetStateAction<number | undefined>>;
};

interface ToggleMoodProps {
    mood: number | undefined;
    setMood: React.Dispatch<React.SetStateAction<number | undefined>>;
    Icon: React.ComponentType<{ className: string }>;
    iconColor: string;
    currentMood: number;
}

const ToggleButton = ({ mood, setMood, Icon, currentMood, iconColor }: ToggleMoodProps) => {
    const isPressed = mood === currentMood;
    return (
        <Toggle
            size="sm"
            pressed={isPressed}
            onPressedChange={(pressed) => setMood(pressed ? mood : undefined)}
            className="w-10 bg-transparent hover:border-blue-300 hover:border hover:bg-blue-100 rounded-full data-[state=on]:bg-blue-100 data-[state=on]:border-blue-300 data-[state=on]:border"
        >
            <Icon className={`w-5 h-5 ${iconColor}`} />
        </Toggle>
    );
};

export const FeedbackMood = (props: FeedbackMoodProps) => {
    return (
        <div className="flex gap-1">
            <ToggleButton
                mood={1}
                currentMood={props.mood}
                setMood={(pressed) => props.setMood(pressed ? 1 : undefined)}
                Icon={Angry}
                iconColor="text-red-500"
            />
            <ToggleButton
                mood={2}
                currentMood={props.mood}
                setMood={(pressed) => props.setMood(pressed ? 2 : undefined)}
                Icon={FrownIcon}
                iconColor="text-yellow-500"
            />
            <ToggleButton
                mood={3}
                currentMood={props.mood}
                setMood={(pressed) => props.setMood(pressed ? 3 : undefined)}
                Icon={MehIcon}
                iconColor="text-gray-500"
            />
            <ToggleButton
                mood={4}
                currentMood={props.mood}
                setMood={(pressed) => props.setMood(pressed ? 4 : undefined)}
                Icon={SmileIcon}
                iconColor="text-blue-500"
            />
            <ToggleButton
                mood={5}
                currentMood={props.mood}
                setMood={(pressed) => props.setMood(pressed ? 5 : undefined)}
                Icon={LaughIcon}
                iconColor="text-green-500"
            />
        </div>
    );
};
