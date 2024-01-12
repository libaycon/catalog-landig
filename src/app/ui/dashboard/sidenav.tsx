import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import Logo from '@/app/ui/logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 tablet:px-2 overflow-y-auto">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 tablet:h-40"
        href="/"
      >
        <div className="w-32 text-white tablet:w-40">
          <Logo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 tablet:flex-col tablet:space-x-0 tablet:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md tablet:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 dark:bg-[#3d64ad3c] dark:hover:text-primary hover:text-blue-600 tablet:flex-none tablet:justify-start tablet:p-2 tablet:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden tablet:block">Cerrar Sesión</div>
          </button>
        </form>
      </div>
    </div>
  );
}
