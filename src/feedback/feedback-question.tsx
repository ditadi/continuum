import { ArrowDown, Loader2 } from "lucide-react";
import React from "react";
import type { FeedbackResponse } from "..";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { FeedbackMood } from "./feedback-mood";

type FeedbackQuestionProps = {
    variant: "open" | "popover" | "fixed";
    labelTitle?: string;
    labelFeedbackPlaceholder?: string;
    labelFeedbackAction?: string;
    labelFeedbackTextMissing?: string;
    labelFeedbackMoodMissing?: string;
    actionButtonColor?: string;
    isFeedbackLoading?: boolean;
    onFeedbackSent: (feedbackResponse: FeedbackResponse) => void;
    onDismissClick?: () => void;
};

export const FeedbackQuestion = (props: FeedbackQuestionProps) => {
    const [feedbackText, setFeedbackText] = React.useState("");
    const [feedbackMood, setFeedbackMood] = React.useState<number | null>(null);
    const [isFeedbackTextMissing, setIsFeedbackTextMissing] = React.useState(false);
    const [isFeedbackMoodMissing, setIsFeedbackMoodMissing] = React.useState(false);

    const validateForm = () => {
        if (feedbackText.length === 0) {
            setIsFeedbackTextMissing(true);
            return false;
        }
        if (!feedbackMood) {
            setIsFeedbackMoodMissing(true);
            return false;
        }

        return true;
    };

    React.useEffect(() => {
        if (feedbackMood) setIsFeedbackMoodMissing(false);
    }, [feedbackMood]);

    const renderErrorMessage = () => {
        if (isFeedbackMoodMissing || isFeedbackTextMissing) {
            return (
                <div className="flex justify-start">
                    <span className="text-sm text-destructive font-medium">
                        {isFeedbackTextMissing
                            ? props.labelFeedbackTextMissing
                            : props.labelFeedbackMoodMissing}
                    </span>
                </div>
            );
        }
    };

    return (
        <>
            <div className="flex flex-col gap-3 p-4">
                <div className="flex justify-between items-center">
                    <Label className="text-left">{props.labelTitle}</Label>
                    {props.variant === "fixed" && (
                        <ArrowDown
                            className="w-3 h-3 cursor-pointer"
                            onClick={props.onDismissClick}
                        />
                    )}
                </div>
                <Textarea
                    placeholder={props.labelFeedbackPlaceholder}
                    disabled={props.isFeedbackLoading}
                    className="hover:border"
                    value={feedbackText}
                    onChange={(e) => {
                        const { value } = e.target;
                        setFeedbackText(value);
                        if (value.length > 0) setIsFeedbackTextMissing(false);
                    }}
                />

                {renderErrorMessage()}
            </div>
            <div className="flex items-center justify-between gap-2 bg-gray-50 p-2 rounded-b-lg w-full">
                <FeedbackMood mood={feedbackMood} setMood={setFeedbackMood} />
                <Button
                    size="sm"
                    disabled={props.isFeedbackLoading}
                    style={{ backgroundColor: props.actionButtonColor }}
                    onClick={() => {
                        const isValid = validateForm();
                        if (isValid) props.onFeedbackSent({ feedbackText, feedbackMood });
                    }}
                >
                    {props.isFeedbackLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {props.labelFeedbackAction}
                </Button>
            </div>
        </>
    );
};
