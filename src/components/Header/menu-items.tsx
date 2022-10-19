import { Link, Text, LinkProps, TextProps} from "@chakra-ui/react";
import { ReactNode } from "react";

interface menuItemProps extends TextProps{

  children?: ReactNode;
  isLast?: boolean;
  to?: string;
}

export const MenuItem = ({ children, isLast, to = "/", ...rest }: menuItemProps) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};
