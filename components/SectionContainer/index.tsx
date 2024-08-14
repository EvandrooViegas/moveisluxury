import React, { forwardRef } from "react";

type Props = {
  children: React.ReactNode;
  bgClassName?: string;
} & React.HTMLAttributes<HTMLDivElement>;
const SectionContainer = forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, id, className, bgClassName, ...rest } = props;
  return (
  
    <section
      {...rest}
      ref={ref}
      id={id}
    className={bgClassName}
    >
        <div       className={`md:px-40 px-10 py-24 max-screen-w m-auto ${className}`}>
      
      {children}
      </div>
    </section>
  );
});

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
