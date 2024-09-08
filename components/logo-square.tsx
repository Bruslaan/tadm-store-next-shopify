import Image from 'next/image';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return <Image src="/static/tadm-logo.png" alt={'alt'} width="70" height="70" />;
}
