import { FileText, LayoutDashboard, Mail, Wrench } from "lucide-react";

export const adminNavigation = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Resume",
    href: "/admin/resume",
    icon: FileText,
  },
  {
    name: "Skills",
    href: "/admin/skills",
    icon: Wrench,
  },
  {
    name: "Messages",
    href: "/admin/messages",
    icon: Mail,
  },
];
