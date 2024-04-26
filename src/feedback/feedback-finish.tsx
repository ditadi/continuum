import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";

const MotionContainer = {
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
const MotionItem = {
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

export const FeedbackFinish = (props: FeedbackFinishProps) => {
    return (
        <motion.div
            className="flex flex-col gap-4 pt-10 pb-10 justify-center items-center"
            variants={MotionContainer}
            initial="hidden"
            animate="visible"
        >
            <CircleCheckBig className="text-green-500 w-10 h-10" />
            <motion.p className="text-sm text-muted-foreground text-center" variants={MotionItem}>
                {props.labelFinishTitle}
                <br />
                {props.labelFinishSubtitle}
            </motion.p>
        </motion.div>
    );
};
