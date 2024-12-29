import React from "react";
import Link from "next/link";

const DonationLink = ({ name, link, icon }: { name: string; link: string; icon: string }) => {
  return (
    <li className="flex items-center gap-2">
      <img src={icon} alt={name} className="w-6 h-6" />
      {name}{" "}
      <Link className="text-blue-400" target="_blank" href={link}>
        {name}
      </Link>
    </li>
  );
};

export default DonationLink;
