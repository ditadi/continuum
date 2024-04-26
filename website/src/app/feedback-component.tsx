"use client";

import { Feedback } from "../../../dist";
import "../../../dist/index.css";

export const FeedbackComponent = () => {
    return (
        <Feedback
            renderType="open"
            labelPlaceholder="Your feedback..."
            labelSendFeedback="Send"
            labelFeedbackMoodMissing="Please select a mood."
            labelFeedbackTextMissing="Please enter feedback."
            labelFinishTitle="Your feedback has been received."
            labelFinishSubtitle="Thank you for your help."
            onFeedbackSent={(e) => console.log(e)}
        />
    );
};
