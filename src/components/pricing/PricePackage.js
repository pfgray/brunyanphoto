import React from 'react';

const PricePackage = ({
  title,
  subtitle,
  bullets,
  descriptions
}) => (
  <div className="package">
    <div className="title">{title}</div>
    {subtitle ? <div className="subtitle">{subtitle}</div> : null}

    {bullets ? bullets.map(b => (
      <p className="bullet" key={b.emphasis}>
        <em>{b.emphasis}</em>
        <span>{b.sub}</span>
      </p>
    )) : null}

    {descriptions ? descriptions.map(d => <p key={d} className="desc">{d}</p>)
      : null}
  </div>
);

export default PricePackage;
