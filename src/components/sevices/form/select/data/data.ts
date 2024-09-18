export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColourOption[] = [
  { label: 'طراحی سایت', value: 'make-web', color: '#00B8D9', isFixed: true },
  { label: 'ادمینی اینستاگرام', value: 'instagram-management', color: '#5243AA' },
  { label: 'ریدیزاین سایت', value: 'website-redesign', color: '#0052CC' },
  { label: 'آموزش برنامه نویسی', value: 'programming-tutorial', color: '#FF5630' },
  { label: 'آموزش وردپرس', value: 'wordpress-tutorial', color: '#FF8B00' },
];

export interface ServiceOption {
  readonly value: string;
  readonly label: string;
  readonly description: string;
  readonly category: string;
}

export const serviceOptions: readonly ServiceOption[] = [
  {
    value: 'make-web',
    label: 'طراحی سایت',
    description: 'طراحی و توسعه سایت‌های حرفه‌ای با توجه به نیازهای شما.',
    category: 'خدمات وب',
  },
  {
    value: 'website-redesign',
    label: 'ریدیزاین سایت',
    description: 'بازطراحی و بهبود ظاهر و عملکرد سایت‌های موجود.',
    category: 'خدمات وب',
  },
  {
    value: 'instagram-management',
    label: 'ادمینی اینستاگرام',
    description: 'مدیریت و تولید محتوا برای صفحات اینستاگرام.',
    category: 'شبکه‌های اجتماعی',
  },
  {
    value: 'programming-tutorial',
    label: 'آموزش برنامه نویسی',
    description: 'آموزش‌های جامع برنامه‌نویسی از مبتدی تا پیشرفته.',
    category: 'آموزش',
  },
  {
    value: 'wordpress-tutorial',
    label: 'آموزش وردپرس',
    description: 'آموزش‌های گام به گام کار با وردپرس.',
    category: 'آموزش',
  },
];

export interface GroupedOption {
  readonly label: string;
  readonly options: readonly ColourOption[] | readonly ServiceOption[];
}

export const groupedOptions: readonly GroupedOption[] = [
  {
    label: 'خدمات',
    options: serviceOptions,
  },
];

