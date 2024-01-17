import Link from "next/link";

export default  function Header() {
    return (
        <header id='header' role='banner'>
            <div className='left'>
                <h1 className='logo'>
                    <Link href="/"> Jins blog</Link>
                </h1>
            </div>
            <nav className='nav'>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/blogWrite">Write</Link>
                    </li>
                    <li>
                        <Link href="/notice">Notice</Link>
                    </li>
                </ul>
            </nav>
            <div className='right'>
                <ul>
                    <li>
                        <Link href="/login">로그인</Link>
                    </li>
                    <li>
                        <Link href="/join">회원가입</Link>
                    </li>
                </ul>
            </div>
        </header >
        )
}