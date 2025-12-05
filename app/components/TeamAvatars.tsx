'use client';

import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export type TeamMember = {
  name: string;
  image: string;
  alt: string;
};

const defaultTeamMembers: TeamMember[] = [
  { name: 'Chaitanya Kola', image: '/chaitanya.png', alt: 'Chaitanya' },
  { name: 'Dave Chan', image: '/dave.png', alt: 'Dave' },
  { name: 'Jeromy Ko', image: '/jeromy.png', alt: 'Jeromy' },
  { name: 'Khalid', image: '/khalid.png', alt: 'Khalid' },
  { name: 'Liz Fox', image: '/liz.png', alt: 'Liz' },
  { name: 'Maddie Pelton', image: '/maddie.png', alt: 'Maddie' },
  { name: 'Nathan Fulkerson', image: '/nathan.png', alt: 'Nathan' },
];

interface TeamAvatarsProps {
  members?: TeamMember[];
}

export function TeamAvatars({ members }: TeamAvatarsProps) {
  const teamMembers = members || defaultTeamMembers;

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex gap-1">
        {teamMembers.map((member) => (
          <Tooltip key={member.name}>
            <TooltipTrigger asChild>
              <div className="cursor-pointer">
                <Image
                  src={member.image}
                  alt={member.alt}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={5}>
              <p>{member.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

