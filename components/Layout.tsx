import { Fragment } from "react";

import SEO from "./SEO";

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <Fragment>
      <SEO title={title} />
      {children}
    </Fragment>
  );
};

export default Layout;
