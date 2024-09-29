import React, { forwardRef } from "react";

type Props = {
  children: React.ReactNode;
  bgClassName?: string;
  outside?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
const SectionContainer = forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, id, className, bgClassName, outside, ...rest } = props;
  return (
    <section {...rest} ref={ref} id={id} className={bgClassName}>
      {outside ? null : (
        <div
          className={`md:px-40 px-10 py-24 max-screen-w m-auto ${className}`}
        >
          {children}
        </div>
      )}

      {!outside ? null : children}
    </section>
  );
});

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
