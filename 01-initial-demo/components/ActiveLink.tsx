import { FC, CSSProperties } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
  text: string;
  href: string;
}

const style:CSSProperties = {
  color: "#0070F3",
  textDecoration: "underline",
}

const ActiveLink:FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link style={ asPath === href ? style : undefined } href={ href }>{ text }</Link>
  )
}

export default ActiveLink