import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { PlusSign } from "@/components/plus-sign"
import { ProjectLayoutWrapper } from '@/app/components/layouts/ProjectLayoutWrapper';
import { ltkChatProject } from '../data/ltk-chat';
import { creatorProject } from '../data/creator';
import { sonoProject } from '../data/sono';
import { shopifyProject } from '../data/shopify';

// Add more project imports here as you create them
const projects = {
  'ltk-chat': ltkChatProject,
  'creator': creatorProject,
  'sono': sonoProject,
  'shopify': shopifyProject,
  // Add more projects here
};

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound()
  }

  return (
    <ProjectLayoutWrapper
      layout={project.layout}
      title={project.title}
      description={project.description}
      coverImage={project.coverImage}
      content={project.content}
      metadata={project.metadata}
    />
  )
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}
