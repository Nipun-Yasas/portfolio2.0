"use client";

import React, { useState } from "react";
import { cn } from "../../lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-3xl relative overflow-hidden w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Link href={`/projects/${card.slug}`} className="block h-full w-full">
        <div className="rounded-3xl overflow-hidden mb-4">
          <img
            src={card.src}
            alt={card.projectName}
            className="w-full h-auto"
          />
        </div>
        <div className="flex justify-between items-end w-full px-2">
          <div className="flex flex-col text-left">
            <div className="text-xl md:text-2xl font-semibold text-textPrimary">
              {card.projectName}
            </div>
            <div className="text-sm  text-textPrimary font-light mt-1">
              {card.role}
            </div>
          </div>
          <div className="text-sm text-textPrimary font-light">{card.year}</div>
        </div>
      </Link>
    </motion.div>
  )
);

Card.displayName = "Card";

type Card = {
  projectName: string;
  role: string;
  year: string;
  src: string;
  category: string;
  slug: string;
};

export function ProjectCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pb-4 sm:pb-8 pt-8 md:pt-12 lg:pt-16 xl:pt-12 w-full">
      <AnimatePresence mode="popLayout">
        {cards.map((card, index) => (
          <Card
            key={card.projectName}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
