'use client';

import React from 'react';
import { StandardLayout } from './StandardLayout';

interface ProjectLayoutWrapperProps {
  title: string;
  description: string;
  coverImage?: string;
  content: React.ReactNode;
  metadata?: {
    role?: string;
    timeline?: string;
    team?: string;
  };
}

export const ProjectLayoutWrapper: React.FC<ProjectLayoutWrapperProps> = (props) => {
  return <StandardLayout {...props} />;
}; 