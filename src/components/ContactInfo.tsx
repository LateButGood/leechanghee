import React from 'react';
import { Mail, Instagram, MapPin } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}

function ContactItem({ icon, label, value, link }: ContactItemProps) {
  return (
    <div className="flex items-center space-x-3">
      {icon}
      <div>
        <p className="text-gray-600">{label}</p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-800">{value}</p>
        )}
      </div>
    </div>
  );
}

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      <ContactItem
        icon={<Mail className="text-blue-500" size={20} />}
        label="이메일"
        value="po77777@korea.ac.kr"
      />
      <ContactItem
        icon={<Instagram className="text-blue-500" size={20} />}
        label="인스타그램"
        value="@changhee_daily"
        link="https://www.instagram.com/changhee_daily/"
      />
      <ContactItem
        icon={<MapPin className="text-blue-500" size={20} />}
        label="위치"
        value="서울특별시"
      />
    </div>
  );
}