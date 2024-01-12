import Link from 'next/link';
import {
  HomeIcon,
  CircleStackIcon,
  CpuChipIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {name: 'Inicio', href: '/dashboard', icon: HomeIcon},
  {
    name: 'Equipos',
    href: '/dashboard/equipments',
    icon: CpuChipIcon,
  },
  { name: 'Alquileres', href: '/dashboard/rentals', icon: CircleStackIcon },
  {name: 'Repeustos', href: '/dashboard/replaces', icon: ArrowPathIcon}
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 dark:bg-[#3d64ad3c] p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 dark:hover:text-primary md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
