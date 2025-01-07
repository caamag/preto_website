import { ReactNode } from "react";
import * as Css from "./style";

interface BannerProps {
  children: ReactNode;
  bgImagePath?: string;
}

const InitialBanner = ({ children, bgImagePath }: BannerProps) => {
  return (
    <Css.BannerContainer bgImagePath={bgImagePath}>
      {children}
    </Css.BannerContainer>
  );
};

export default InitialBanner;
