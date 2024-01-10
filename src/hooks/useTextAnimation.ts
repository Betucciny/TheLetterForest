import { useEffect, useState } from "react";
import { setTimeoutPromise } from "@/utils/functions";

type UseTextAnimationProps = string[];
;

export const useTextAnimation = (messages: UseTextAnimationProps) => {
    const [text, setText] = useState("");

    useEffect(() => {
        const changeText = async () => {
            for (const message of messages) {
                setText(message);
                await setTimeoutPromise(5000);
            }
        };
        changeText();
    }, []);

    return text;
};