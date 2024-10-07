import type { ReactNode } from "react";
import React from "react";

export const FeedbackOpen = ({ children }: { children: ReactNode }) => {
    return <div className="w-96 flex flex-col p-0 rounded-lg border">{children}</div>;
};
