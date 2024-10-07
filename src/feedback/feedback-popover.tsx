import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../components//ui/popover";

interface FeedbackPopoverProps {
    children: React.ReactNode;
    labelFeedbackButton?: string;
    onFeedbackOpen?: () => void;
    isPopoverOpen: boolean;
    setIsPopoverOpen: (value: boolean) => void;
}

export const FeedbackPopover = (props: FeedbackPopoverProps) => {
    useEffect(() => {
        if (props.isPopoverOpen && props.onFeedbackOpen) props.onFeedbackOpen();
    }, [props.isPopoverOpen, props.onFeedbackOpen]);

    return (
        <Popover open={props.isPopoverOpen} onOpenChange={(e) => props.setIsPopoverOpen(e)}>
            <PopoverTrigger asChild>
                <Button variant="outline">{props.labelFeedbackButton}</Button>
            </PopoverTrigger>

            <PopoverContent className="w-80 flex flex-col p-0 rounded-lg">
                {props.children}
            </PopoverContent>
        </Popover>
    );
};
