import React from 'react';

export interface IAuthorBoxProps {
  name: string;
  imageUrl: string;
}

const AuthorBox: React.FC<IAuthorBoxProps> = ({ name, imageUrl }) => {
  return (
    <div className="flex items-center bg-gray-200 p-4 rounded-lg">
      <img
        alt={name}
        src={imageUrl}
        className="rounded-full border-2 border-solid border-indigo-200"
        width="64"
        height="64"
      />
      <div className="text-gray-700 leading-tight ml-4">
        <div className="text-sm font-medium uppercase">Author</div>
        <div className="text-2xl font-medium">{name}</div>
      </div>
    </div>
  );
};

export default AuthorBox;
