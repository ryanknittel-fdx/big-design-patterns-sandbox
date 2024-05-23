import React, { forwardRef, memo, useId } from "react";
import { createStyledIcon, IconProps } from "@bigcommerce/big-design-icons/";

export interface PrivateIconProps {
  svgRef?: React.Ref<SVGSVGElement>;
  titleId?: string;
}

const Icon: React.FC<IconProps & PrivateIconProps> = ({
  svgRef,
  title,
  theme,
  ...props
}) => {
  const uniqueTitleId = useId();
  const titleId = title ? props.titleId || uniqueTitleId : undefined;
  const ariaHidden = titleId ? undefined : true;

  return (
    <>
      <svg
        aria-hidden={ariaHidden}
        aria-labelledby={titleId}
        fill="currentColor"
        height={24}
        ref={svgRef}
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        width={24}
        {...props}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path d="m10.2 18.222-2.25-4.889L3 11.111 7.95 8.89 10.2 4l2.25 4.889 4.95 2.222-4.95 2.222-2.25 4.89ZM17.4 20l-1.125-2.444-2.475-1.112 2.475-1.11 1.125-2.445 1.125 2.444L21 16.444l-2.475 1.112L17.4 20Z" />
      </svg>
    </>
  );
};
const IconWithForwardedRef = forwardRef<SVGSVGElement, IconProps>(
  (iconProps, ref) => <Icon {...iconProps} svgRef={ref} />,
);

export const MagicIcon = memo(createStyledIcon(IconWithForwardedRef));
MagicIcon.displayName = "MagicIcon";
