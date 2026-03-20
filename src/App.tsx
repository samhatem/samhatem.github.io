import React, { useState, useEffect } from 'react';
import './App.css';
import TypingText from './TypingText';

const bio = `
# Sam Hatem

[Twitter](https://twitter.com/sam__hatem) [GitHub](https://github.com/samhatem) [me@samhatem.xyz](mailto:me@samhatem.xyz)

Building [Notional](https://notional.xyz), maintaining [ChainPro](https://chainpro.xyz). Previously built early infrastucutre at [Polymarket](https://polymarket.com).

Angel investor in [Antimetal](https://www.antimetal.com/) (seed), [Silna](https://www.silnahealth.com/) (seed), [Prophetic](https://propheticai.co/) (first investor), [Vultron](https://www.vultron.ai/) (pre-seed), [Modern Intelligence](https://www.modernintelligence.ai/) (seed), [Tenkara](https://www.trytenkara.com/) (pre-seed) and [Praxis](https://www.praxisnation.com/) (prior to any VC funding).
`;

const App: React.FC = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {showText && <TypingText text={bio} />}
      </header>
    </div>
  );
};

export default App;
