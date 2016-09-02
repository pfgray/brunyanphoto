import React from 'react';
import PricePackage from './PricePackage';
import packages from 'json!./packages.json';

console.log('####got:', packages);

const Pricing = () => (
  <div className="pricing">
    {packages.map(p => <PricePackage key={p.title} {...p}/>)}
    <p className="footnote">Prices subject to change.</p>
  </div>
);

export default Pricing;
