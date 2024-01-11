import { letters_data } from "@/utils/data";
import { useEffect, useState } from "react";
import { ImageSourcePropType } from "react-native";

export type Guess = {
    letter: string;
    asset: ImageSourcePropType;
    state: "correct" | "incorrect" | "unselected";
}

export default function useGuess(word: string) {
    const all_letters = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I",
        "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y", "Z"
    ];

    const max_letters = 16;
    const initial_letters_pool = Array.from(new Set([...word.toUpperCase().split(""), ...all_letters])).slice(0, max_letters);
    initial_letters_pool.sort(() => Math.random() - 0.5);
    const word_letters_unique = Array.from(new Set(word.toUpperCase().split("")));

    const [wordLines, setWordLines] = useState<string>(word.split("").map(() => "_").join(" "));
    const [isFinished, setIsFinished] = useState(false);
    const [lettersLeft, setLettersLeft] = useState(word_letters_unique);
    const [lettersPool, setLettersPool] = useState<Guess[]>(initial_letters_pool.map(letter => {
        return {
            letter,
            asset: letters_data[letter].image,
            state: "unselected"
        };
    }));

    function tryGuess(letter: string) {
        if (isFinished) {
            return;
        }
        const new_letters_pool = [...lettersPool];
        const index = new_letters_pool.findIndex(guess => guess.letter === letter);
        if (index !== -1) {
            new_letters_pool[index].state = word_letters_unique.includes(letter) ? "correct" : "incorrect";
            setLettersPool(new_letters_pool);
        }
        const new_letters_left = [...lettersLeft];
        const index_left = lettersLeft.findIndex(l => l === letter);
        if (index_left !== -1) {
            new_letters_left.splice(index_left, 1);
            setLettersLeft(new_letters_left);
        }
        
        const new_word_lines = word.split("").map(l => new_letters_left.includes(l.toUpperCase()) ? "_" : l).join(" ");
        setWordLines(new_word_lines);
    }
    

    useEffect(() => {
        function checkIfFinished() {
            const allSelected = lettersPool.every(guess => guess.state !== "unselected");
            const allCorrect = lettersLeft.length === 0;
            setIsFinished(allSelected || allCorrect);
        }
        checkIfFinished();
    }, [lettersPool, lettersLeft]);


    return { lettersPool, tryGuess, isFinished, wordLines};
}