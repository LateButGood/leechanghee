import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Code2, Mail } from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, label: '프로필' },
  { path: '/experience', icon: Briefcase, label: '경력' },
  { path: '/skills', icon: Code2, label: '스킬' },
  { path: '/contact', icon: Mail, label: '연락처' },
];

interface NavigationProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export default function Navigation({ isMobile, onItemClick }: NavigationProps) {
  return (
    <nav className={`${isMobile ? 'flex flex-col p-4' : 'space-y-2'}`}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={onItemClick}
          className={({ isActive }) =>
            `flex items-center space-x-2 p-4 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <item.icon size={20} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}