import React from "react";
import { CopyButton } from "./copy-button";
import BlurFadeText from "./magicui/blur-fade-text";
import BlurFade from "./magicui/blur-fade";

interface EmailProps {
  className: string;
  delay: number;
  email: string;
}

const Email: React.FC<EmailProps> = ({ className, delay, email }) => {
  return (
    <BlurFade delay={delay}>
      <div className={className}>
        <span className="max-w-[600px] md:text-l text-muted-foreground">
          {email}
        </span>
        <CopyButton value={email} variant="outline" />
      </div>
    </BlurFade>
  );
};

export default Email;
