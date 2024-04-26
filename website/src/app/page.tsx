import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { FeedbackComponent } from "./feedback-component";

export default function Home() {
    return (
        <div className="max-w-2xl mx-auto text-center pt-64">
            <div className="flex flex-col relative">
                <span className="text-7xl font-semibold mb-4 relative">Feedback</span>
                <p className="text-gray-600 text-xl">Feedback component for React.</p>
            </div>
            <div className="flex gap-4 justify-center mt-6">
                <Button variant="outline">Feedback</Button>
                <Button variant="ghost" className="rounded-full">
                    Github
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Button>
            </div>

            <div className="flex gap-4 justify-center mt-6">
                <FeedbackComponent />
            </div>
        </div>
    );
}
