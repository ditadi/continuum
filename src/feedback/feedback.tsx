import { useState } from "react";
import { FeedbackFinish } from "./feedback-finish";
import { FeedbackOpen } from "./feedback-open";
import { FeedbackPopover } from "./feedback-popover";
import { FeedbackQuestion } from "./feedback-question";
import { type FeedbackProps, type FeedbackResponse, FeedbackStep } from "./interface";

export const Feedback = (props: FeedbackProps) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [feedbackStep, setFeedbackStep] = useState<FeedbackStep>(FeedbackStep.QUESTION);
    const [isFeedbackLoading, setIsFeedbackLoading] = useState(false);

    const handlerOnFeedbackSent = (feedbackResponse: FeedbackResponse) => {
        setIsFeedbackLoading(true);
        setFeedbackStep(FeedbackStep.FINISH);
        props.onFeedbackSent(feedbackResponse);

        setTimeout(() => {
            if (props.renderType === "popover") setIsPopoverOpen(false);

            setIsFeedbackLoading(false);
            setFeedbackStep(FeedbackStep.QUESTION);
        }, 3000);
    };

    const FeedbackContent = () => {
        if (feedbackStep === FeedbackStep.FINISH) {
            return (
                <FeedbackFinish
                    labelFinishTitle={props.labelFinishTitle}
                    labelFinishSubtitle={props.labelFinishSubtitle}
                />
            );
        }
        return (
            <FeedbackQuestion
                labelFeedbackPlaceholder={props.labelFeedbackPlaceholder}
                labelTitle={props.labelTitle}
                labelFeedbackAction={props.labelFeedbackAction}
                labelFeedbackTextMissing={props.labelFeedbackTextMissing}
                labelFeedbackMoodMissing={props.labelFeedbackMoodMissing}
                isFeedbackLoading={isFeedbackLoading}
                actionButtonColor={props.actionButtonColor}
                onFeedbackSent={(e) => handlerOnFeedbackSent(e)}

            />
        );
    };

    const RenderFeedback = {
        popover: (
            <FeedbackPopover
                isPopoverOpen={isPopoverOpen}
                setIsPopoverOpen={setIsPopoverOpen}
                labelFeedbackButton={props.labelFeedbackButton}
                onFeedbackOpen={props.onFeedbackOpen}
            >
                <FeedbackContent />
            </FeedbackPopover>
        ),
        open: (
            <FeedbackOpen>
                <FeedbackContent />
            </FeedbackOpen>
        ),
    };

    return <>{RenderFeedback[props.renderType]}</>;
};
