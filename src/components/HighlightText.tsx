import React from "react";

const HighlightText = ({ text }: { text: string }) => {
  return (
    <span className="bg-gradient-to-r from-brand-300 via-brand-200 to-brand-300 bg-clip-text text-transparent">
      {text}
    </span>
  );
};

export default HighlightText;
