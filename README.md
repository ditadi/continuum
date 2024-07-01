Continuum is a feedback component that allows your users to provide continuous feedback.
You can use as open ui or as popover, triggered by a button.

## Usage

To start using the library, install it in your project:,

```bash
npm install @ditadi/continuum
bun install @ditadi/continuum
```

Use the feedback in your app.

```jsx
"use client";

import { Feedback } from "@ditadi/continuum";
import "@ditadi/continuum/index.css";

export const FeedbackComponent = () => {
    return (
        <Feedback
            variant="open"
            labelTitle="Share your feedback about this component."
            labelFeedbackButton="Feedback"
            labelFeedbackPlaceholder="Your feedback..."
            labelFeedbackAction="Send"
            labelFeedbackMoodMissing="Please select a mood."
            labelFeedbackTextMissing="Please enter feedback."
            labelFinishTitle="Your feedback has been received."
            labelFinishSubtitle="Thank you for your help."
            onFeedbackSent={(e) => console.log(e)}
            onFeedbackOpen={() => console.log("Feedback open.")}
        />
    );
};
```

## API Reference

### Feedback

Contains all the possible texts you want to customize, ui style and callbacks when a feedback is sent or the ui is shown.

Props:

`variant`: UI Style of the Feedback. Can be `open`, `popover` or `fixed`. Required.

`position`: Position when the variant is fixed. Can be `top-right`, `top-left`, `bottom-right`  or `bottom-left`. Optional.

`labelTitle`: String added as small title above the text area. Optional.

`labelFeedbackButton`: String added on send button. Optional.

`labelFeedbackPlaceholder`: String added on text area placeholder. Optional.

`labelFeedbackAction`: String added on button to send feedback. Optional. 

`labelFeedbackTextMissing`: String added to show when the feedback text is empty. Optional.

`labelFeedbackMoodMissing`: String added to show when no emoji is selected. Optional.

`labelFinishTitle`: String added to inform that the feedback was sent. Optional.

`labelFinishSubtitle`: String added to increase your message when the feedback was sent. Optional.

`onFeedbackSent`: Callback returning the response of the feedback. Optional

`onFeedbackOpen`: Callback called when the feedback is open from popover. Optional

```jsx
interface FeedbackResponse {
    feedbackText: string;
    feedbackMood: number;
}
```

## License

*this project website was heavily inspired by https://vaul.emilkowal.ski/*

[MIT](https://choosealicense.com/licenses/mit/)

