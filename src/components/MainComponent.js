import { useState, useTransition } from 'react';
import { BEDDING } from '../shared/bedding';
import { LIGHTING } from '../shared/lighting';
import { BATH_SHOWER } from '../shared/bath_shower';
import DetailComponent from './DetailComponent';

const MainComponent = (props) => {
  const [lighting] = useState(LIGHTING);
  const [bedding] = useState(BEDDING);
  const [bathShower] = useState(BATH_SHOWER);

  return (
    <div className="container">
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
        <DetailComponent product={lighting[0]} />
        <DetailComponent product={bedding[0]} />
        <DetailComponent product={bathShower[0]} />
      </div>
    </div>
  );
};

export default MainComponent;
