"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PlayfulButton() {
    const [hoverCount, setHoverCount] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const buttonRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        if (hoverCount < 3) {
            // Move to random position within the container
            const container = buttonRef.current?.parentElement;
            if (container) {
                const containerRect = container.getBoundingClientRect();
                const buttonRect = buttonRef.current?.getBoundingClientRect();

                if (buttonRect) {
                    const maxX = containerRect.width - buttonRect.width - 20;
                    const maxY = 100; // Limit vertical movement

                    const randomX = Math.random() * maxX - maxX / 2;
                    const randomY = Math.random() * maxY - maxY / 2;

                    setPosition({ x: randomX, y: randomY });
                    setHoverCount(prev => prev + 1);
                }
            }
        }
    };

    const isClickable = hoverCount >= 3;
    const hasStartedGame = hoverCount > 0;

    return (
        <div
            ref={buttonRef}
            className="inline-block transition-transform duration-300 ease-out"
            style={{
                transform: hasStartedGame && !isClickable ? `translate(${position.x}px, ${position.y}px)` : 'translate(0, 0)',
            }}
            onMouseEnter={handleMouseEnter}
        >
            <Button
                size="lg"
                asChild={isClickable}
                className={`group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black shadow-lg hover:shadow-xl transition-all ${isClickable ? 'hover:scale-105 cursor-pointer' : hasStartedGame ? 'cursor-default' : 'hover:scale-105 cursor-pointer'
                    }`}
            >
                {isClickable ? (
                    <Link href="/learning">
                        יאללה, בואו נתחיל!
                        <span className="inline-block mr-2 transition-transform group-hover:translate-x-1">
                            ←
                        </span>
                    </Link>
                ) : hasStartedGame ? (
                    <span>
                        תפסו אותי! 😜
                        <span className="inline-block mr-2">←</span>
                    </span>
                ) : (
                    <span>
                        יאללה, בואו נתחיל!
                        <span className="inline-block mr-2">←</span>
                    </span>
                )}
            </Button>

            {hasStartedGame && !isClickable && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-emerald-600 whitespace-nowrap animate-bounce">
                    עוד {3 - hoverCount} פעמים! 🎯
                </div>
            )}
        </div>
    );
}
