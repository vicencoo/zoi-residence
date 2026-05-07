const Text = ({
  Tag = "p",
  text,
  size = "text-base",
  font = "font-normal",
  style,
  children,
  onClick,
  ref,
  className = "",
}) => {
  return (
    <Tag
      className={`${size} ${font} ${className}`}
      style={style}
      onClick={onClick}
      ref={ref}
    >
      {text || children}
    </Tag>
  );
};

export default Text;
