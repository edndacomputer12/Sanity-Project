import React from 'react';
import Link from 'next/link';
import { LuCrown } from 'react-icons/lu';
import { TbWorldWww } from 'react-icons/tb';
import { FaPhone } from 'react-icons/fa6';

export const MainInfo = () => {
  return (
    <div className="h-screen bg-[#111111] p-3">
      <div className="mx-auto h-screen max-w-lg bg-[#111111] pt-14">
        <div>
          <div className="text-center">
            <h3 className="font-Intermedium flex items-center justify-center gap-x-2 text-2xl text-white">
              edndacomputer
              <LuCrown className="text-xl text-[#B5924F]" />
            </h3>
            <div className="font-Interegular mt-3 flex items-center justify-center gap-x-2 text-neutral-500">
              <p>Est. 1985</p>
              <span className="h-[3px] w-[3px] rounded-full bg-neutral-600" />
              <p>West Side, California</p>
              <span className="h-[3px] w-[3px] rounded-full bg-neutral-600" />
              <p>He/Him</p>
            </div>
          </div>

          <div>
            <p className="my-3 text-center text-neutral-500">
              edndacomputer is a tech junkie and security researcher who is
              currently obssessed with the blockchain.
            </p>

            <div className="flex justify-center gap-x-7">
              <Link
                href={'https://github.com/edndacomputer1/'}
                className="flex items-center gap-x-2 rounded-xl p-1 px-2 transition-all duration-100 ease-in hover:bg-neutral-900"
              >
                <TbWorldWww className="text-xl text-neutral-500" />
                <p className="text-white">edndacomputer.xyz</p>
              </Link>

              <div className="flex cursor-pointer items-center gap-x-2 rounded-xl p-1 px-2 transition-all duration-100 ease-in hover:bg-neutral-900">
                <FaPhone className="text-xl text-neutral-500" />
                <p className="text-white"> 555-123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
