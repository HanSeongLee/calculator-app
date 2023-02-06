import {Head, Html, Main, NextScript} from 'next/document';
import DefaultHead from 'components/DefaultHead';

function Document() {
    return (
        <Html className={'theme-1'}>
            <Head>
                <DefaultHead />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};


export default Document;
