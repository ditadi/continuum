import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import Link from "next/link";
import { FeedbackComponent } from "./feedback-component";

export const metadata: Metadata = {
    title: "Continuum",
    description: "Feedback component for React.",
    openGraph: {
        title: "Continuum",
        description: "Feedback component for React.",
        url: "https://continuum.victorditadi.com",
        siteName: "Victor Ditadi",
        locale: "en-US",
        type: "website",
    },
    twitter: {
        title: "Ditadi",
        card: "summary_large_image",
    },
};

export default function Home() {
    return (
        <div className="max-w-2xl mx-auto text-center pt-64">
            <div className="flex flex-col relative">
                <span className="text-7xl font-semibold mb-4 relative">Continuum</span>
                <p className="text-gray-600 text-xl">Feedback component for React.</p>
            </div>
            <div className="flex gap-4 justify-center mt-6">
                <FeedbackComponent variant="popover" title="Share your feedback." />
                <Link href="https://github.com/ditadi/continuum" target="_blank">
                    <Button variant="ghost" className="rounded-full">
                        Github
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Button>
                </Link>
            </div>

            <div className="flex gap-4 justify-center mt-6">
                <FeedbackComponent variant="open" title="Share your feedback." />
            </div>

            <FeedbackComponent
                variant="fixed"
                title="Share your feedback."
                position="bottom-right"
            />
        </div>
    );
}
