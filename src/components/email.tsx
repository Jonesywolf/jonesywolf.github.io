import React from 'react';
import { CopyButton } from './copy-button';
import BlurFadeText from './magicui/blur-fade-text';
import BlurFade from './magicui/blur-fade';


interface EmailProps {
  className: string;
  delay: number;
  email: string;
}

const Email: React.FC<EmailProps> = ({ className, delay, email }) => {
  return (
    <BlurFade delay={delay}>
    <div className={className}>
      <BlurFadeText
        className="max-w-[600px] md:text-l text-muted-foreground"
        delay={delay}
        text={email}
      />
      <CopyButton value={email} variant="outline"/>
    </div>
    </BlurFade>
  );
};

export default Email;