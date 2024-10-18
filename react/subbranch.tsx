import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Cpu,
  Database,
  Globe,
  Cog,
  Plane,
  Zap,
  HardDrive,
  Robot,
  Building,
} from "lucide-react";

const engineeringBranches = [
  {
    name: "Computer Science",
    icon: Cpu,
    description:
      "Study of computation, information processing, and computer systems.",
  },
  {
    name: "Data Engineering",
    icon: Database,
    description:
      "Focuses on big data infrastructure and data processing systems.",
  },
  {
    name: "Software Engineering",
    icon: HardDrive,
    description:
      "Application of engineering principles to software development.",
  },
  {
    name: "Artificial Intelligence",
    icon: Robot,
    description: "Development of intelligent machines and software.",
  },
  {
    name: "Electrical Engineering",
    icon: Zap,
    description: "Study of electricity, electronics, and electromagnetism.",
  },
  {
    name: "Aerospace Engineering",
    icon: Plane,
    description: "Design and development of aircraft and spacecraft.",
  },
  {
    name: "Mechanical Engineering",
    icon: Cog,
    description: "Design and manufacture of mechanical systems.",
  },
  {
    name: "Civil Engineering",
    icon: Building,
    description: "Design and construction of infrastructure and buildings.",
  },
  {
    name: "Environmental Engineering",
    icon: Globe,
    description:
      "Application of science and engineering to improve the environment.",
  },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export default function EngineeringBranches() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white border-b border-gray-200">
        <Link className="flex items-center justify-center" href="/">
          <BookOpen className="h-6 w-6 text-emerald-600" />
          <span className="ml-2 text-2xl font-bold text-slate-900">
            EDUspark
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
            href="#"
          >
            About Us
          </Link>
          <Link
            className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Engineering Disciplines
            </h1>
            <p className="text-xl text-slate-600">
              Explore various branches of engineering and find your passion
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {engineeringBranches.map((branch) => (
              <Card
                key={branch.name}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center">
                    <branch.icon className="mr-2 h-6 w-6 text-emerald-600" />
                    {branch.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600 mb-4">
                    {branch.description}
                  </CardDescription>
                  <Button className="w-full">Explore {branch.name}</Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </main>
      <footer className="bg-slate-900 text-white py-8">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">EDUspark</h3>
              <p className="text-sm text-slate-400">
                Empowering students to make informed career decisions in
                engineering.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm text-slate-400">info@eduspark.com</p>
              <p className="text-sm text-slate-400">+1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              © 2023 EDUspark. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
              <Link
                className="text-sm text-slate-400 hover:text-white transition-colors"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-sm text-slate-400 hover:text-white transition-colors"
                href="#"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
