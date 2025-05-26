'use client';

import React from 'react';
import { StandardLayout } from './StandardLayout';
import { SplitLayout } from './SplitLayout';

interface ProjectLayoutWrapperProps {
  layout: string;
  title: string;
  description: string;
  coverImage: string;
  content: React.ReactNode;
  metadata?: {
    role?: string;
    timeline?: string;
    team?: string;
  };
}

export const ProjectLayoutWrapper: React.FC<ProjectLayoutWrapperProps> = ({
  layout,
  ...props
}) => {
  const LayoutComponent = layout === 'split' ? SplitLayout : StandardLayout;
  return <LayoutComponent {...props} />;
}; 