export interface FeedbackProps {
    renderType: "open" | "popover";
    labelTitle?: string;
    labelFeedbackButton?: string;
    labelFeedbackPlaceholder?: string;
    labelFeedbackAction?: string;
    labelFeedbackTextMissing?: string;
    labelFeedbackMoodMissing?: string;
    labelFinishTitle?: string;
    labelFinishSubtitle?: string;
    onFeedbackSent?: (feedbackResponse: FeedbackResponse) => void;
    onFeedbackOpen?: () => void;
}

export enum FeedbackStep {
    QUESTION = "question",
    FINISH = "finish",
}

export interface FeedbackResponse {
    feedbackText: string;
    feedbackMood: number;
}
