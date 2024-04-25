"use client";
import React from "react";
import { Button } from "./components/ui/button";

export const TestComponent = () => {
    const [state, setState] = React.useState(0);
    return (
        <div>
            <span className="text-blue-500">Counter: {state}</span>
            <Button variant="destructive" onClick={() => setState(state + 1)}>
                Increment
            </Button>
        </div>
    );
};
