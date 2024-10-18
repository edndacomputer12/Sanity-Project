import React from 'react';
import Image from 'next/image';

export const Header = () => {
  return (
    <div>
      <div className="relative -z-10 h-60 w-full">
        <Image
          src="/images/background.jpeg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute opacity-70 blur-lg"
        />
      </div>

      <div className="relative -top-9 z-10 flex w-full justify-center">
        <div className="absolute rounded-full bg-[#111111] p-1">
          <Image
            src="/images/avatar.jpeg"
            alt="edndacomputer"
            width={64}
            height={64}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
