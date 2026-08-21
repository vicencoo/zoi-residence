export const Animate = ({
  children,
  as: Tag = "div",
  className = "",
  style,
  preset,
  delay,
  duration,
  threshold,
  once,
  ...props
}) => {
  /* eslint-enable no-unused-vars */
  return (
    <Tag className={className} style={style} {...props}>
      {children}
    </Tag>
  );
};
