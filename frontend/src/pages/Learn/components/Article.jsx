import React from 'react';
import Unit1 from './Articles/Unit1/Unit1';
import Unit1Test from './Articles/Unit1/Unit1Test';
import Unit2 from './Articles/Unit2/Unit2';
import Unit2Test from './Articles/Unit2/Unit2Test';
import Unit3 from './Articles/Unit3/Unit3';
import Unit3Test from './Articles/Unit3/Unit3Test';
import Unit4 from './Articles/Unit4/Unit4';
import Unit4Test from './Articles/Unit4/Unit4Test';
import Unit5 from './Articles/Unit5/Unit5';
import Unit5Test from './Articles/Unit5/Unit5Test';
import Unit6 from './Articles/Unit6/Unit6';
import Unit6Test from './Articles/Unit6/Unit6Test';
import FinalTest from './Articles/FinalTest/FinalTest';

const Article = ({ activeUnit, setActiveUnit }) => {
  return (
    <div className="pl-16 pr-16">
      {activeUnit === 1 && (
        <Unit1 setActiveUnit={setActiveUnit}/>
      )}
      {activeUnit === 2 && (
        <Unit1Test />
      )}
      {activeUnit === 3 && (
        <Unit2 setActiveUnit={setActiveUnit}/>
      )}
      {activeUnit === 4 && (
        <Unit2Test />
      )}
      {activeUnit === 5 && (
        <Unit3 setActiveUnit={setActiveUnit}/>
      )}
      {activeUnit === 6 && (
        <Unit3Test />
      )}
      {activeUnit === 7 && (
        <Unit4 setActiveUnit={setActiveUnit}/>
      )}
      {activeUnit === 8 && (
        <Unit4Test />
      )}
      {activeUnit === 9 && (
        <Unit5 setActiveUnit={setActiveUnit}/>
      )}
      {activeUnit === 10 && (
        <Unit5Test />
      )}
      {activeUnit === 11 && (
        <Unit6 setActiveUnit={setActiveUnit}/>
      )}
      {activeUnit === 12 && (
        <Unit6Test />
      )}
      {activeUnit === 13 && (
        <FinalTest />
      )}
    </div>
  );
};

export default Article;