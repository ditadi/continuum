import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";

const motionContainerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};
const motionItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

interface FeedbackFinishProps {
    labelFinishTitle?: string;
    labelFinishSubtitle?: string;
}

export const FeedbackFinish = ({ labelFinishTitle, labelFinishSubtitle }: FeedbackFinishProps) => {
    return (
        <motion.div
            className="flex flex-col gap-4 pt-10 pb-10 justify-center items-center"
            variants={motionContainerVariants}
            initial="hidden"
            animate="visible"
        >
            <CircleCheckBig className="text-green-500 w-10 h-10" />
            <motion.p
                className="text-sm text-muted-foreground text-center"
                variants={motionItemVariants}
            >
                {labelFinishTitle}
                <br />
                {labelFinishSubtitle}
            </motion.p>
        </motion.div>
    );
};
