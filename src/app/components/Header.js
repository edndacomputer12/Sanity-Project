import React from 'react';
import Image from 'next/image';

export const Header = () => {
  return (
    <div>
      <div className="h-60 relative w-full -z-10">
        <Image
          src="/images/background.jpeg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="blur-lg absolute opacity-70"
        />
      </div>

      <div className="w-full flex justify-center z-10 relative -top-9">
        <div className="absolute p-1 rounded-full bg-[#111111]">
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
