import Head from "next/head";

interface Props {
  title: string;
  description: string;
  image: string;
  url: string;
}

const Header = (props: Props) => (
  <Head>
    <title>{props.title}</title>
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={props.url} />
    <meta property="og:image" content={props.url+props.image} />
    <meta property="og:site_name" content={props.title} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@tteooiyry" />
    <meta name="twitter:url" content={props.url} />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.description} />
    <meta name="twitter:image" content={props.url+props.image} />
    <link rel="shortcut icon" href={props.url+props.image} />
    <link rel="apple-touch-icon" href={props.url+props.image} />
    <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet"></link>
  </Head>
)

export default Header;
