export const MOON_PHASE_IMAGES = {
  'New Moon': '/images/moon-phases/new-moon.svg',
  'Waxing Crescent': '/images/moon-phases/waxing-crescent.svg',
  'First Quarter': '/images/moon-phases/first-quarter.svg',
  'Waxing Gibbous': '/images/moon-phases/waxing-gibbous.svg',
  'Full Moon': '/images/moon-phases/full-moon.svg',
  'Waning Gibbous': '/images/moon-phases/waning-gibbous.svg',
  'Last Quarter': '/images/moon-phases/last-quarter.svg',
  'Waning Crescent': '/images/moon-phases/waning-crescent.svg',
} as const;

/*
import Image from 'next/image';
import { MOON_PHASE_IMAGES } from '@/lib/moonPhases';

// С компонентом Next.js Image
<Image
    src={MOON_PHASE_IMAGES[phase]}
alt={`Фаза луны: ${phase}`}
width={100}
height={100}
priority // Предзагрузка для важных изображений
/>*/
