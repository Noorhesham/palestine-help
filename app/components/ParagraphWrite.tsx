const ParagraphWrite = ({ text, className }: { text: string; className?: string }) => {
  return (
    <p className={`  ${className || ""} max-w-3xl text-xl text-center`}>
      {text.split("").map((char, index) =>
        char === " " ? (
          <span key={index} className=" whitespace-nowrap">
            {char}
          </span>
        ) : (
          <span key={index} className="opacity-0  translate-y-1">
            {char}
          </span>
        )
      )}
    </p>
  );
};

export default ParagraphWrite;
