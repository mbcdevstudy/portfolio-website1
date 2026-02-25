import Link from 'next/link'
import { IconType } from 'react-icons';

interface LinkButtonProps {
  href: string;
  text: string;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  rounded?: boolean;
  download?: boolean;
}

export default function LinkButton({
  href,
  text,
  icon: Icon,
  iconPosition = "right",
  rounded,
  download = false,
}: LinkButtonProps) {
  
  // 공통 스타일 클래스
  const className = `
    px-8 py-3 
    bg-gradient-to-r from-blue-900 to-purple-800 
    hover:from-blue-800 hover:to-purple-700 
    text-white font-medium 
    transition-all duration-300 
    hover:scale-[1.02] active:scale-[0.98] 
    inline-flex items-center justify-center gap-2 
    ${rounded ? 'rounded-full' : 'rounded-lg'}
  `;

  // 다운로드 속성이 있는 경우 일반 <a> 태그 사용 권장
  if (download) {
    return (
      <a href={href} download className={className}>
        {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
        {text}
        {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      {text}
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
    </Link>
  );
}