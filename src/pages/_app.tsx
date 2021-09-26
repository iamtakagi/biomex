import * as React from 'react'
import Link from 'next/link'
import { Search } from '../components/search'
import NextNprogress from 'nextjs-progressbar';

import '../components/tailwind.scss'
import '../components/index.scss'

export const App: React.FC<{
    Component: React.FC, pageProps: any
}> = ({ Component, pageProps }) => {
    return (
        <>
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />
            <div className="container md:w-1/2 py-32" >
                <Link href="/">
                    <div className="text-center my-3 text-lg cursor-pointer">
                        biomex
                    </div>
                </Link>
                <div className="text-center my-3 text-md cursor-pointer">
                    マイクラの名前履歴を検索するやつ
                </div>
                <Search />
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default App