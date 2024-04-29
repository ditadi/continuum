"use client";

import { Feedback, type FeedbackResponse } from "@ditadi/continuum";
import "@ditadi/continuum/index.css";

export const FeedbackComponent = (props: { renderType: "popover" | "open" }) => {
    return (
        <Feedback
            renderType={props.renderType}
            labelFeedbackButton="Feedback"
            labelFeedbackPlaceholder="Your feedback..."
            labelFeedbackAction="Send"
            labelFeedbackMoodMissing="Please select a mood."
            labelFeedbackTextMissing="Please enter feedback."
            labelFinishTitle="Your feedback has been received."
            labelFinishSubtitle="Thank you for your help."
            onFeedbackSent={(e: FeedbackResponse) => console.log(e)}
            onFeedbackOpen={() => console.log("Feedback open.")}
        />
    );
};
