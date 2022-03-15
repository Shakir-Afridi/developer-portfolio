import React, {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown';

export default function Services() {
  const [contents, setContents] = useState<string>('');
  useEffect(() => {
    const loadFile = async () => {
      const file = await import(`./services.md`);
      const response = await fetch(file.default);
      const text = await response.text();
      setContents(text);
    };
    loadFile();
  }, []);

  return (
    <ReactMarkdown> 
        {contents}
      </ReactMarkdown>
  )
}
