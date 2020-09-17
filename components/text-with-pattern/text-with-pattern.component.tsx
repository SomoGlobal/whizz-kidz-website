import React from 'react';
import TextWith, { ITextWithProps } from '../text-with/text-with.component';

type Pattern =
  | 'families'
  | 'meetthekidz'
  | 'supporters'
  | 'supporters2'
  | 'kidz';

export interface ITextWithPatternProps extends ITextWithProps {
  pattern: Pattern;
}

const TextWithPattern: React.FC<ITextWithPatternProps> = ({
  pattern,
  ...props
}) => {
  return (
    <TextWith {...props}>
      {pattern && (
        <img src={`/svg/square-patterns/${pattern}.svg`} alt="pattern" />
      )}
    </TextWith>
  );
};

export default TextWithPattern;
