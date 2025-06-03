import React from 'react';

interface IconProps {
  path: string | string[]; // SVG path(s)
  viewBox?: string;
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
}

const Icon: React.FC<IconProps> = ({
  path,
  viewBox = "0 0 24 24",
  className = "w-6 h-6",
  fill = "none",
  stroke = "currentColor",
  strokeWidth = "1.5"
}) => {
  const paths = Array.isArray(path) ? path : [path];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={className}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth} 
      aria-hidden="true"
    >
      {paths.map((p, index) => (
        <path key={index} strokeLinecap="round" strokeLinejoin="round" d={p} />
      ))}
    </svg>
  );
};

// Generic Icons (Heroicons paths)
export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Icon path="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91A2.25 2.25 0 012.25 6.993v-.243" className={className} />
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Icon path="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" className={className} />
);

export const LocationMarkerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Icon path="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" className={className} />
);

export const CodeBracketIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Icon path="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" className={className} />
);

export const ChartBarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Icon path="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" className={className} />
);

export const LightBulbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Icon path="M12 18.75a6 6 0 006-6c0-1.036-.223-2.013-.626-2.896M12 18.75a6 6 0 01-6-6c0-1.036.223-2.013.626-2.896m0 0A6.002 6.002 0 0012 3.75c1.96 0 3.733.922 4.974 2.354M12 18.75V21m0-11.25v.008" className={className} />
);

export const UserGroupIcon: React.FC<{ className?: string }> = ({ className }) => (
 <Icon path="M18 18.72a8.906 8.906 0 01-1.284.513a11.954 11.954 0 01-3.582.013M14.25 15.352a7.421 7.421 0 01-1.08.368A11.954 11.954 0 0112 15.75a11.953 11.953 0 01-1.17-.03a7.423 7.423 0 01-1.08-.368M12 3.75A5.25 5.25 0 0117.25 9a5.25 5.25 0 01-5.25 5.25A5.25 5.25 0 016.75 9a5.25 5.25 0 015.25-5.25zm0 0V3m0 2.25A5.25 5.25 0 006.75 9v.75M17.25 9v.75A5.25 5.25 0 0112 15v0M6 20.25h12A2.25 2.25 0 0020.25 18V18A2.25 2.25 0 0018 15.75H6A2.25 2.25 0 003.75 18v0A2.25 2.25 0 006 20.25z" className={className} />
);

// Software Icons (Text-based placeholders with brand colors)
const SoftwareIconBase: React.FC<{bgColor: string, textColor: string, label: string, className?: string}> = 
  ({ bgColor, textColor, label, className="w-10 h-10 md:w-12 md:h-12" }) => (
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="40" height="40" rx="8" fill={bgColor}/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill={textColor} fontSize="16" fontFamily="Montserrat, sans-serif" fontWeight="bold">
      {label}
    </text>
  </svg>
);

export const FigmaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <SoftwareIconBase bgColor="#F24E1E" textColor="white" label="Fi" className={className} />
);
export const AdobeXDIcon: React.FC<{ className?: string }> = ({ className }) => (
  <SoftwareIconBase bgColor="#FF61F6" textColor="white" label="Xd" className={className} />
);
export const SketchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <SoftwareIconBase bgColor="#FAD649" textColor="#2C3E50" label="Sk" className={className} />
);
export const AdobeIllustratorIcon: React.FC<{ className?: string }> = ({ className }) => (
  <SoftwareIconBase bgColor="#FF9A00" textColor="white" label="Ai" className={className} />
);
export const AdobePhotoshopIcon: React.FC<{ className?: string }> = ({ className }) => (
  <SoftwareIconBase bgColor="#31A8FF" textColor="white" label="Ps" className={className} />
);
export const ProcreateIcon: React.FC<{ className?: string }> = ({ className }) => (
  <SoftwareIconBase bgColor="#2E2E2E" textColor="white" label="Pc" className={className} />
);
export const MiroIcon: React.FC<{ className?: string }> = ({ className }) => (
  <SoftwareIconBase bgColor="#FFD02F" textColor="#050038" label="Mi" className={className} />
);
export const ZeplinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <SoftwareIconBase bgColor="#EE6253" textColor="white" label="Zp" className={className} />
);


export default Icon;