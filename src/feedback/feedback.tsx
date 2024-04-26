"use client";
import { useState } from "react";
import { FeedbackFinish } from "./feedback-finish";
import { FeedbackOpen } from "./feedback-open";
import { FeedbackQuestion } from "./feedback-question";
import { type FeedbackProps, type FeedbackResponse, FeedbackStep } from "./interface";

export const Feedback = (props: FeedbackProps) => {
    const [feedbackStep, setFeedbackStep] = useState<FeedbackStep>(FeedbackStep.QUESTION);
    const [isFeedbackLoading, setIsFeedbackLoading] = useState(false);

    const handlerOnFeedbackSent = (feedbackResponse: FeedbackResponse) => {
        setIsFeedbackLoading(true);
        setFeedbackStep(FeedbackStep.FINISH);
        props.onFeedbackSent(feedbackResponse);

        setTimeout(() => {
            setIsFeedbackLoading(false);
            setFeedbackStep(FeedbackStep.QUESTION);
        }, 2000);
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
                labelPlaceholder={props.labelPlaceholder}
                labelTitle={props.labelTitle}
                labelSendFeedback={props.labelSendFeedback}
                labelFeedbackTextMissing={props.labelFeedbackTextMissing}
                labelFeedbackMoodMissing={props.labelFeedbackMoodMissing}
                isFeedbackLoading={isFeedbackLoading}
                onFeedbackSent={(e) => handlerOnFeedbackSent(e)}
            />
        );
    };

    const RenderFeedback = {
        popover: <div>popover</div>,
        open: (
            <FeedbackOpen>
                <FeedbackContent />
            </FeedbackOpen>
        ),
    };

    return <>{RenderFeedback[props.renderType]}</>;
};
