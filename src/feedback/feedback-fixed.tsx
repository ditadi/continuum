import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";
import { memo } from "react";

const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
};

export const FeedbackFixed = memo(
    ({
        children,
        position,
        isExpanded,
        setIsExpanded,
        title,
    }: {
        children: ReactNode;
        position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
        isExpanded: boolean;
        setIsExpanded: (value: boolean) => void;
        title: string;
    }) => {
        return (
            <div className={`fixed ${positionClasses[position]}`}>
                {isExpanded ? (
                    <div className="w-96 flex flex-col p-0 rounded-lg border">{children}</div>
                ) : (
                    <Button variant="outline" onClick={() => setIsExpanded(true)}>
                        {title}
                    </Button>
                )}
            </div>
        );
    },
);
