import { ReactNode } from "react";
import * as Css from "./style";

interface BannerProps {
  children: ReactNode;
  bgImagePath: string;
  mobileImagePath: string;
}

const InitialBanner = ({
  children,
  bgImagePath,
  mobileImagePath,
}: BannerProps) => {
  return (
    <Css.BannerContainer bgImagePath={bgImagePath} mobilebg={mobileImagePath}>
      {children}
    </Css.BannerContainer>
  );
};

export default InitialBanner;
