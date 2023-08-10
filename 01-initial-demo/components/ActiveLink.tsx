import { useRouter } from 'next/router';
import Link from 'next/link';
import { FC } from 'react'

interface TodoProps {
  text: string;
  href: string;
}

const style = {
  color: "#0070F3",
  textDecoration: "underline"
}

const ActiveLink:FC<TodoProps> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link style={ asPath === href ? style : undefined } href={ href }>{ text }</Link>
  )
}

export default ActiveLink