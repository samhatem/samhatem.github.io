import React, { useState, useEffect } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import ReactMarkdown from 'react-markdown';

interface TypingTextProps {
    text: string;
}

function LinkRenderer(props: any) {
    return (
        <a 
            href={props.href}       
            target={props.href.startsWith('mailto:') ? '' : '_blank'}
            rel={props.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
        >
            {props.children}
        </a>
    );
}

const TypingText: React.FC<TypingTextProps> = ({ text }) => {
    const [markdown, setMarkdown] = useState('');
    const [typedText] = useTypewriter({ words: [text], typeSpeed: 10 });

    useEffect(() => {
        setMarkdown(typedText);
      }, [typedText]);
  
    return (
        <div>
             <ReactMarkdown components={{ a: LinkRenderer}}>{markdown}</ReactMarkdown>
        </div>);
};

export default TypingText;