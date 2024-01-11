import { ImageSourcePropType } from "react-native";

type LetterData = {
    [key: string]: {
        name: string;
        image: ImageSourcePropType;
        sound: ImageSourcePropType;
        words: {
            word: string;
            image: ImageSourcePropType;
            shadow: ImageSourcePropType;
        }[];
    };
};

export const letters_data: LetterData = {
    "A": {
        "name": "A",
        "image": require("@assets/letters/a.png"),
        "sound": require("@assets/music/a.mp3"),
        "words": [
            {
                "word": "Apple",
                "image": require("@assets/words/apple.png"),
                "shadow": require("@assets/words/apple_shadow.png")
            },
            {
                "word": "Ant",
                "image": require("@assets/words/ant.png"),
                "shadow": require("@assets/words/ant_shadow.png")
            },
        ],
    },
    "B": {
        "name": "B",
        "image": require("@assets/letters/b.png"),
        "sound": require("@assets/music/b.mp3"),
        "words": [
            {
                "word": "Ball",
                "image": require("@assets/words/ball.png"),
                "shadow": require("@assets/words/ball_shadow.png")
            },
            {
                "word": "Bat",
                "image": require("@assets/words/bat.png"),
                "shadow": require("@assets/words/bat_shadow.png")
            },
        ],
    },
    "C": {
        "name": "C",
        "image": require("@assets/letters/c.png"),
        "sound": require("@assets/music/c.mp3"),
        "words": [
            {
                "word": "Cat",
                "image": require("@assets/words/cat.png"),
                "shadow": require("@assets/words/cat_shadow.png")
            },
            {
                "word": "Car",
                "image": require("@assets/words/car.png"),
                "shadow": require("@assets/words/car_shadow.png")
            },
        ],
    },
    "D": {
        "name": "D",
        "image": require("@assets/letters/d.png"),
        "sound": require("@assets/music/d.mp3"),
        "words": [
            {
                "word": "Dog",
                "image": require("@assets/words/dog.png"),
                "shadow": require("@assets/words/dog_shadow.png")
            },
            {
                "word": "Duck",
                "image": require("@assets/words/duck.png"),
                "shadow": require("@assets/words/duck_shadow.png")
            },
        ],
    },
    "E": {
        "name": "E",
        "image": require("@assets/letters/e.png"),
        "sound": require("@assets/music/e.mp3"),
        "words": [
            {
                "word": "Elephant",
                "image": require("@assets/words/elephant.png"),
                "shadow": require("@assets/words/elephant_shadow.png")
            },
            {
                "word": "Egg",
                "image": require("@assets/words/egg.png"),
                "shadow": require("@assets/words/egg_shadow.png")
            },
        ],
    },
    "F": {
        "name": "F",
        "image": require("@assets/letters/f.png"),
        "sound": require("@assets/music/f.mp3"),
        "words": [
            {
                "word": "Fish",
                "image": require("@assets/words/fish.png"),
                "shadow": require("@assets/words/fish_shadow.png")
            },
            {
                "word": "Frog",
                "image": require("@assets/words/frog.png"),
                "shadow": require("@assets/words/frog_shadow.png")
            },
        ],
    },
    "G": {
        "name": "G",
        "image": require("@assets/letters/g.png"),
        "sound": require("@assets/music/g.mp3"),
        "words": [
            {
                "word": "Giraffe",
                "image": require("@assets/words/giraffe.png"),
                "shadow": require("@assets/words/giraffe_shadow.png")
            },
            {
                "word": "Goat",
                "image": require("@assets/words/goat.png"),
                "shadow": require("@assets/words/goat_shadow.png")
            },
        ],
    },
    "H": {
        "name": "H",
        "image": require("@assets/letters/h.png"),
        "sound": require("@assets/music/h.mp3"),
        "words": [
            {
                "word": "Horse",
                "image": require("@assets/words/horse.png"),
                "shadow": require("@assets/words/horse_shadow.png")
            },
            {
                "word": "Hen",
                "image": require("@assets/words/hen.png"),
                "shadow": require("@assets/words/hen_shadow.png")
            },
        ],
    },
    "I": {
        "name": "I",
        "image": require("@assets/letters/i.png"),
        "sound": require("@assets/music/i.mp3"),
        "words": [
            {
                "word": "Ice",
                "image": require("@assets/words/ice.png"),
                "shadow": require("@assets/words/ice_shadow.png")
            },
            {
                "word": "Igloo",
                "image": require("@assets/words/igloo.png"),
                "shadow": require("@assets/words/igloo_shadow.png")
            },
        ],
    },
    "J": {
        "name": "J",
        "image": require("@assets/letters/j.png"),
        "sound": require("@assets/music/j.mp3"),
        "words": [
            {
                "word": "Jam",
                "image": require("@assets/words/jam.png"),
                "shadow": require("@assets/words/jam_shadow.png")
            },
            {
                "word": "Jar",
                "image": require("@assets/words/jar.png"),
                "shadow": require("@assets/words/jar_shadow.png")
            },
        ],
    },
    "K": {
        "name": "K",
        "image": require("@assets/letters/k.png"),
        "sound": require("@assets/music/k.mp3"),
        "words": [
            {
                "word": "Kite",
                "image": require("@assets/words/kite.png"),
                "shadow": require("@assets/words/kite_shadow.png")
            },
            {
                "word": "Key",
                "image": require("@assets/words/key.png"),
                "shadow": require("@assets/words/key_shadow.png")
            },
        ],
    },
    "L": {
        "name": "L",
        "image": require("@assets/letters/l.png"),
        "sound": require("@assets/music/l.mp3"),
        "words": [
            {
                "word": "Lion",
                "image": require("@assets/words/lion.png"),
                "shadow": require("@assets/words/lion_shadow.png")
            },
            {
                "word": "Leaf",
                "image": require("@assets/words/leaf.png"),
                "shadow": require("@assets/words/leaf_shadow.png")
            },
        ],
    },
    "M": {
        "name": "M",
        "image": require("@assets/letters/m.png"),
        "sound": require("@assets/music/m.mp3"),
        "words": [
            {
                "word": "Monkey",
                "image": require("@assets/words/monkey.png"),
                "shadow": require("@assets/words/monkey_shadow.png")
            },
            {
                "word": "Moon",
                "image": require("@assets/words/moon.png"),
                "shadow": require("@assets/words/moon_shadow.png")
            },
        ],
    },
    "N": {
        "name": "N",
        "image": require("@assets/letters/n.png"),
        "sound": require("@assets/music/n.mp3"),
        "words": [
            {
                "word": "Nest",
                "image": require("@assets/words/nest.png"),
                "shadow": require("@assets/words/nest_shadow.png")
            },
            {
                "word": "Nose",
                "image": require("@assets/words/nose.png"),
                "shadow": require("@assets/words/nose_shadow.png")
            },
        ],
    },
    "O": {
        "name": "O",
        "image": require("@assets/letters/o.png"),
        "sound": require("@assets/music/o.mp3"),
        "words": [
            {
                "word": "Orange",
                "image": require("@assets/words/orange.png"),
                "shadow": require("@assets/words/orange_shadow.png")
            },
            {
                "word": "Owl",
                "image": require("@assets/words/owl.png"),
                "shadow": require("@assets/words/owl_shadow.png")
            },
        ],
    },
    "P": {
        "name": "P",
        "image": require("@assets/letters/p.png"),
        "sound": require("@assets/music/p.mp3"),
        "words": [
            {
                "word": "Panda",
                "image": require("@assets/words/panda.png"),
                "shadow": require("@assets/words/panda_shadow.png")
            },
            {
                "word": "Pumpkin",
                "image": require("@assets/words/pumpkin.png"),
                "shadow": require("@assets/words/pumpkin_shadow.png")
            },
        ],
    },
    "Q": {
        "name": "Q",
        "image": require("@assets/letters/q.png"),
        "sound": require("@assets/music/q.mp3"),
        "words": [
            {
                "word": "Queen",
                "image": require("@assets/words/queen.png"),
                "shadow": require("@assets/words/queen_shadow.png")
            },
            {
                "word": "Quilt",
                "image": require("@assets/words/quilt.png"),
                "shadow": require("@assets/words/quilt_shadow.png")
            },
        ],
    },
    "R": {
        "name": "R",
        "image": require("@assets/letters/r.png"),
        "sound": require("@assets/music/r.mp3"),
        "words": [
            {
                "word": "Rabbit",
                "image": require("@assets/words/rabbit.png"),
                "shadow": require("@assets/words/rabbit_shadow.png")
            },
            {
                "word": "Rainbow",
                "image": require("@assets/words/rainbow.png"),
                "shadow": require("@assets/words/rainbow_shadow.png")
            },
        ],
    },
    "S": {
        "name": "S",
        "image": require("@assets/letters/s.png"),
        "sound": require("@assets/music/s.mp3"),
        "words": [
            {
                "word": "Sun",
                "image": require("@assets/words/sun.png"),
                "shadow": require("@assets/words/sun_shadow.png")
            },
            {
                "word": "Star",
                "image": require("@assets/words/star.png"),
                "shadow": require("@assets/words/star_shadow.png")
            },
        ],
    },
    "T": {
        "name": "T",
        "image": require("@assets/letters/t.png"),
        "sound": require("@assets/music/t.mp3"),
        "words": [
            {
                "word": "Tiger",
                "image": require("@assets/words/tiger.png"),
                "shadow": require("@assets/words/tiger_shadow.png")
            },
            {
                "word": "Tree",
                "image": require("@assets/words/tree.png"),
                "shadow": require("@assets/words/tree_shadow.png")
            },
        ],
    },
    "U": {
        "name": "U",
        "image": require("@assets/letters/u.png"),
        "sound": require("@assets/music/u.mp3"),
        "words": [
            {
                "word": "Umbrella",
                "image": require("@assets/words/umbrella.png"),
                "shadow": require("@assets/words/umbrella_shadow.png")
            },
            {
                "word": "Unicorn",
                "image": require("@assets/words/unicorn.png"),
                "shadow": require("@assets/words/unicorn_shadow.png")
            },
        ],
    },
    "V": {
        "name": "V",
        "image": require("@assets/letters/v.png"),
        "sound": require("@assets/music/v.mp3"),
        "words": [
            {
                "word": "Vegetables",
                "image": require("@assets/words/vegetables.png"),
                "shadow": require("@assets/words/vegetables_shadow.png")
            },
            {
                "word": "Violin",
                "image": require("@assets/words/violin.png"),
                "shadow": require("@assets/words/violin_shadow.png")
            },
        ],
    },
    "W": {
        "name": "W",
        "image": require("@assets/letters/w.png"),
        "sound": require("@assets/music/w.mp3"),
        "words": [
            {
                "word": "Watermelon",
                "image": require("@assets/words/watermelon.png"),
                "shadow": require("@assets/words/watermelon_shadow.png")
            },
            {
                "word": "Whale",
                "image": require("@assets/words/whale.png"),
                "shadow": require("@assets/words/whale_shadow.png")
            },
        ],
    },
    "X": {
        "name": "X",
        "image": require("@assets/letters/x.png"),
        "sound": require("@assets/music/x.mp3"),
        "words": [
            {
                "word": "Xylophone",
                "image": require("@assets/words/xylophone.png"),
                "shadow": require("@assets/words/xylophone_shadow.png")
            },
            {
                "word": "X-ray",
                "image": require("@assets/words/xray.png"),
                "shadow": require("@assets/words/xray_shadow.png")
            },
        ],
    },
    "Y": {
        "name": "Y",
        "image": require("@assets/letters/y.png"),
        "sound": require("@assets/music/y.mp3"),
        "words": [
            {
                "word": "Yak",
                "image": require("@assets/words/yak.png"),
                "shadow": require("@assets/words/yak_shadow.png")
            },
            {
                "word": "Yacht",
                "image": require("@assets/words/yacht.png"),
                "shadow": require("@assets/words/yacht_shadow.png")
            },
        ],
    },
    "Z": {
        "name": "Z",
        "image": require("@assets/letters/z.png"),
        "sound": require("@assets/music/z.mp3"),
        "words": [
            {
                "word": "Zebra",
                "image": require("@assets/words/zebra.png"),
                "shadow": require("@assets/words/zebra_shadow.png")
            },
            {
                "word": "Zoo",
                "image": require("@assets/words/zoo.png"),
                "shadow": require("@assets/words/zoo_shadow.png")
            },
        ],
    },
}



export const words_data: { [key: string]: any } = Object.values(letters_data)
    .map((letter) => letter.words)
    .flat()
    .reduce((acc: { [key: string]: any }, word) => {
        acc[word.word] = { ...word };
        return acc;
    }, {});


export const FAQ = [
    {
        "question": "What is The Word Forest?",
        "answer": "The Word Forest is an interactive and educational app designed for children. It offers a variety of engaging games and activities that aim to entertain, educate, and foster the development of essential language and literacy skills in a fun and creative way."
    },
    {
        "question": "What age group is the app suitable for?",
        "answer": "The Word Forest is tailored for children in the 4-8 age range. The content is age-appropriate, with games designed to cater to various developmental stages in language acquisition."
    },
    {
        "question": "How can The Word Forest benefit my child?",
        "answer": "The Word Forest focuses on promoting key language skills such as vocabulary building, reading comprehension, and word recognition. The interactive nature of the games encourages learning through play, making it an effective tool for educational enrichment."
    },
    {
        "question": "Is the content safe and age-appropriate?",
        "answer": "Yes, the content within The Word Forest is carefully curated to be both safe and age-appropriate. We prioritize creating a secure environment for children, free from inappropriate content."
    },
    {
        "question": "Are there any in-app purchases?",
        "answer": "No, The Word Forest does not include any in-app purchases. All core content and features are accessible without any additional costs. We believe in providing a completely free and positive experience for both children and parents."
    },
    {
        "question": "Is The Word Forest available on multiple devices?",
        "answer": "Yes, The Word Forest is designed to be accessible on multiple devices, including smartphones and tablets. You can download the app on Android platforms."
    },
    {
        "question": "How often is the content updated?",
        "answer": "The Word Forest is a product with a single release. It offers a variety of games, activities, and features designed to entertain, educate, and foster the development of essential language and literacy skills in a fun and creative way."
    },
]




export const getRandomLetters: () => Letter[] = () => Object.values(letters_data).sort(() => 0.5 - Math.random()).slice(0, 10);

export const getRandomWord: () => Word = () => Object.values(words_data).sort(() => 0.5 - Math.random())[0];

export const getLetter: (letter: string) => Letter = (letter) => letters_data[letter];


export type Letter = {
    name: string;
    image: ImageSourcePropType;
    sound: ImageSourcePropType;
    words: Word[];
}

export type Word = {
    word: string;
    image: ImageSourcePropType;
    shadow: ImageSourcePropType;
}
