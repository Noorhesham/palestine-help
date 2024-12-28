const ParagraphWrite = ({
  text,
  className,
  height,
  visible,
}: {
  text: string;
  className?: string;
  height?: string;
  visible?: boolean;
}) => {
  return (
    <p className={`  ${className || ""} max-w-3xl text-xl text-center`}>
      {text.split("").map((char, index) =>
        char === " " ? (
          <span key={index} className=" whitespace-nowrap">
            {char}
          </span>
        ) : (
          <span
            key={index}
            className={` ${height && `  ${height}`} ${visible ? " opacity-100" : "opacity-0"}  translate-y-5`}
          >
            {char}
          </span>
        )
      )}
    </p>
  );
};

export default ParagraphWrite;
