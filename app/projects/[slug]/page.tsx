import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { PlusSign } from "@/app/components/plus-sign"
import { ProjectLayoutWrapper } from '@/app/components/layouts/ProjectLayoutWrapper';
import { ltkChatProject } from '../data/ltk-chat';
import { creatorProject } from '../data/creator';
import { sonoProject } from '../data/sono';
import { shopifyProject } from '../data/shopify';
import { experimentsProject } from '../data/experiments';
import { lightenProject } from '../data/lighten';

// Add more project imports here as you create them
const projects = {
  'ltk-chat': ltkChatProject,
  'creator': creatorProject,
  'sono': sonoProject,
  'shopify': shopifyProject,
  'experiments': experimentsProject,
  'lighten': lightenProject,
  // Add more projects here
};

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <ProjectLayoutWrapper
      title={project.title}
      description={project.description}
      coverImage={project.coverImage}
      content={project.content}
      metadata={project.metadata}
    />
  );
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}
