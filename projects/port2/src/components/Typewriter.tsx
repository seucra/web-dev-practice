import { useState, useEffect } from 'react';

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:<>?|[]";

export default function Typewriter({ 
    roles, 
    speed = 40,
    delay = 1000,
    pause = 3000
}: { 
    roles: string[]; 
    speed?: number;
    delay?: number;
    pause?: number;
}) {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const startTimer = setTimeout(() => setStarted(true), delay);
        return () => clearTimeout(startTimer);
    }, [delay]);

    useEffect(() => {
        if (!started || roles.length === 0) return;

        let timer: ReturnType<typeof setTimeout>;
        const currentRole = roles[roleIndex];
        let isCancelled = false;

        // 1. Type out the current role
        let i = 0;
        const typeChar = () => {
            if (isCancelled) return;
            if (i < currentRole.length) {
                setDisplayedText(currentRole.substring(0, i + 1));
                i++;
                timer = setTimeout(typeChar, speed);
            } else {
                // Done typing. Wait for 'pause', then scramble
                timer = setTimeout(startScramble, pause);
            }
        };

        // 2. Scramble phase
        let scrambleIterations = 0;
        const maxScrambleIterations = 15; // total duration = 15 * 40ms = 600ms
        const startScramble = () => {
            if (isCancelled) return;
            if (scrambleIterations < maxScrambleIterations) {
                const scrambled = currentRole.split('').map(char => {
                    if (char === ' ') return ' ';
                    if (Math.random() < 0.4) return char; // keep some stability
                    return CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
                }).join('');
                setDisplayedText(scrambled);
                scrambleIterations++;
                timer = setTimeout(startScramble, 40);
            } else {
                // Keep the scrambled text visible for 1 second before clearing and moving on
                timer = setTimeout(() => {
                    if (isCancelled) return;
                    setDisplayedText("");
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }, 1000);
            }
        };

        typeChar();

        return () => {
            isCancelled = true;
            clearTimeout(timer);
        };
    }, [started, roleIndex, roles, speed, pause]);

    return (
        <div className="font-mono text-neon-green/80 text-sm md:text-base leading-relaxed tracking-wide min-h-[50px]">
            {displayedText}
            <span className="animate-[blink_1s_step-end_infinite] inline-block w-2 bg-neon-green h-4 ml-1 align-middle"></span>
        </div>
    );
}
