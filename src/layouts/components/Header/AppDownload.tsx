import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

import { Exit } from '@/assets/icons';

export const AppDownload: FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleExitClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Link href="/" className="flex gap-3 mt-2 items-center">
      <div className="rounded-[16px] overflow-hidden w-[40px]">
        <Image src="/logo.png" alt="maverick" width={40} height={40} className="scale-[1.3]" />
      </div>
      <div className="">
        <h2 className="text-[16px] font-medium">Maverick</h2>
        <span className="text-[13px] text-gray  block">Скачайте приложения</span>
      </div>
      <Exit className="ml-auto w-[20px] h-[20px] mr-2" onClick={handleExitClick} />
    </Link>
  );
};
