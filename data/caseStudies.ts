export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "event-booking",
    title: "Event Booking & Management Platform",
    category: "Web Development",
    description:
      "A modern event booking and management platform designed to simplify event discovery, registration, booking management and administration.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    image: "/case-studies/event-booking.jpg",
  },

  {
    id: "portfolio",
    title: "Developer Portfolio",
    category: "Web Development",
    description:
      "A full-stack developer portfolio built to present professional experience, technical skills, services, projects and downloadable resume information.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    image: "/case-studies/portfolio.jpg",
  },

  {
    id: "3b-luxury-coaches",
    title: "3 Brothers Luxury Coaches",
    category: "Web Development",
    description:
      "A transportation booking platform designed around coach routes, passenger booking and seat reservation.",
    technologies: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
    image: "/case-studies/3b-luxury-coaches.jpg",
  },

  {
    id: "inventory-management",
    title: "Inventory Management System",
    category: "Database Development",
    description:
      "A full-stack inventory management system designed to manage stock, warehouses, stock movements, low-stock alerts and reporting.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "SQL"],
    image: "/case-studies/inventory-management.jpg",
  },
];
