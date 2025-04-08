import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps, FC } from 'react';

import { NavigationMenuLink } from '@/shadcn/ui/navigation-menu';

interface LinkProps extends ComponentProps<typeof NextLink> {
  href: string;
}

export const HeaderLink: FC<LinkProps> = ({ href, ...props }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenuLink asChild active={isActive}>
      <NextLink href={href} className="NavigationMenuLink" {...props} />
    </NavigationMenuLink>
  );
};
