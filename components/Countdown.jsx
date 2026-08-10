'use client';

import { useState, useEffect } from 'react';

export default function Countdown({ targetDate, mensajeLlegada, textos }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setIsFinished(true);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!isMounted) return null;

  if (isFinished) {
    return (
      <div className="mt-10 font-script text-4xl sm:text-5xl italic tracking-widest text-fondo animate-fade-in">
        {mensajeLlegada}
      </div>
    );
  }

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-sm border border-fondo/30 bg-black/20 backdrop-blur-md">
        <span className="font-bodoni text-2xl sm:text-3xl text-fondo">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="mt-2 text-[10px] uppercase tracking-widest2 text-fondo/90">{label}</span>
    </div>
  );

  return (
    <div className="mt-12 flex gap-4 sm:gap-6 animate-fade-in">
      <TimeBlock value={timeLeft.days} label={textos.dias} />
      <TimeBlock value={timeLeft.hours} label={textos.horas} />
      <TimeBlock value={timeLeft.minutes} label={textos.minutos} />
      <TimeBlock value={timeLeft.seconds} label={textos.segundos} />
    </div>
  );
}
