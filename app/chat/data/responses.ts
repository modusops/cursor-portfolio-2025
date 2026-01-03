export const responses = {
  "tell-me-about-yourself": "I'm a product designer with over a decade of experience building products at scale. I've worked at companies like LTK, Sono, Shopify, Adobe, and Tesla, helping teams ship fast without compromising quality. I believe great design is half art and half science, always stemming from a deep understanding of the user and the business. I'm passionate about information architecture, user research, and creating scalable design systems.",
  "what-are-you-working-on": "Currently, I'm working as a Staff Product Designer at LTK, where I focus on building creator-led community experiences. I'm particularly excited about projects that help creators understand their business better and build stronger connections with their audiences. I'm always exploring new ways to leverage AI and emerging technologies to enhance the design process and create more meaningful user experiences.",
  "can-i-see-your-resume": "Here's my resume. It includes my full work history, skills, and experience across various companies and projects.",
  "examples-of-work": "I've worked on several notable projects including LTK Creator (helping creators understand their business), LTK Chat (building stronger creator-led communities), Lighten AI (using AI for real-time patient insights), and Sono (building the future of knowledge management). \nAside from professional work, I also work on side projects; Figma plugin Layout Quality Assistant and this portfolio which was custom (vibe) coded.",
} as const

export type ResponseKey = keyof typeof responses

