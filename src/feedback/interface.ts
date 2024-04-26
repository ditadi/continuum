export interface FeedbackProps {
    renderType: "open" | "popover";
    labelTitle?: string;
    labelPlaceholder?: string;
    labelSendFeedback?: string;
    labelFeedbackTextMissing?: string;
    labelFeedbackMoodMissing?: string;
    labelFinishTitle?: string;
    labelFinishSubtitle?: string;
    onFeedbackSent: (feedbackResponse: FeedbackResponse) => void;
}

export interface FeedbackResponse {
    feedbackText: string;
    feedbackMood: number;
}

export enum FeedbackStep {
    QUESTION = "question",
    FINISH = "finish",
}
