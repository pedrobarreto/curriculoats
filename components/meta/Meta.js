import Head from "next/head";

export default function Meta({ title, keywords, description }) {
    const homepage = "https://geradorcv.pedrobarreto.me/";
    const logo = "https://geradorcv.pedrobarreto.me/assets/logo.png";
    const fevicon = "https://geradorcv.pedrobarreto.me/assets/favicon.ico";

    function isiteJsonLd() {
        return {
            __html: `{
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": ${homepage},
                "logo": ${logo},
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91 9999999999",
                    "contactType": "customer service"
                },
                "image": ${logo},
                "description": ${description},
                "founder": "Pedro Barreto",
                "foundingDate": "2024",
                "foundingLocation": "BR",
                "email": "pedrobarreto@live.com",
                "telephone": "+91 9999999999",
                "areaServed": "IN",
                "keywords": ${keywords},
                "mainEntityOfPage": ${homepage},
                "knowsAbout": ${keywords},
                "knowsLanguage": "English",
                "memberOf": "Pedro Barreto",
                "owns": "Pedro Barreto",
                "publishingPrinciples": ${homepage},
                "slogan": "Consiga as melhores vagas em plataformas de RH como Gupy, 99Jobs, entre outras."
            }`
        }
    }


    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href={fevicon} />
            <title>{title}</title>
            <meta type="copyright" content="CurriculoATS" />
            <meta type="author" content="Pedro Barreto" />
            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={homepage} />
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                content={description} />
            <meta property="og:image" content={logo} />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={homepage} />
            <meta property="twitter:title" content={title} />
            <meta
                property="twitter:description"
                content={description} />
            <meta property="twitter:image" content={logo} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={isiteJsonLd()}
                key="isiteJsonLd"
            />
        </Head>
    );
}