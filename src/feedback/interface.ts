export interface FeedbackProps {
    variant: "open" | "popover" | "fixed";
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    labelTitle?: string;
    labelFeedbackButton?: string;
    labelFeedbackPlaceholder?: string;
    labelFeedbackAction?: string;
    labelFeedbackTextMissing?: string;
    labelFeedbackMoodMissing?: string;
    labelFinishTitle?: string;
    labelFinishSubtitle?: string;
    actionButtonColor?: string;
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
