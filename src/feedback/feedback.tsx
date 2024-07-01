import { useState } from "react";
import { FeedbackFinish } from "./feedback-finish";
import { FeedbackFixed } from "./feedback-fixed";
import { FeedbackOpen } from "./feedback-open";
import { FeedbackPopover } from "./feedback-popover";
import { FeedbackQuestion } from "./feedback-question";
import { type FeedbackProps, type FeedbackResponse, FeedbackStep } from "./interface";

export const Feedback = (props: FeedbackProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [feedbackStep, setFeedbackStep] = useState<FeedbackStep>(FeedbackStep.QUESTION);
    const [isFeedbackLoading, setIsFeedbackLoading] = useState(false);

    const handlerOnFeedbackSent = (feedbackResponse: FeedbackResponse) => {
        setIsFeedbackLoading(true);
        setFeedbackStep(FeedbackStep.FINISH);
        props.onFeedbackSent(feedbackResponse);

        setTimeout(() => {
            if (props.variant === "popover") setIsPopoverOpen(false);
            if (props.variant === "fixed") setIsExpanded(false);

            setIsFeedbackLoading(false);
            setFeedbackStep(FeedbackStep.QUESTION);
        }, 3000);
    };

    const handlerOnDismiss = () => {
        setIsExpanded(false);
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
                variant={props.variant}
                labelFeedbackPlaceholder={props.labelFeedbackPlaceholder}
                labelTitle={props.labelTitle}
                labelFeedbackAction={props.labelFeedbackAction}
                labelFeedbackTextMissing={props.labelFeedbackTextMissing}
                labelFeedbackMoodMissing={props.labelFeedbackMoodMissing}
                isFeedbackLoading={isFeedbackLoading}
                actionButtonColor={props.actionButtonColor}
                onFeedbackSent={(e) => handlerOnFeedbackSent(e)}
                onDismissClick={handlerOnDismiss}
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
        fixed: (
            <FeedbackFixed
                position={props.position}
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                title={props.labelTitle}
            >
                <FeedbackContent />
            </FeedbackFixed>
        ),
    };

    return <>{RenderFeedback[props.variant]}</>;
};
