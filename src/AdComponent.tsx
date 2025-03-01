import { useEffect } from "react";

const AdComponent = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("Erro ao carregar o AdSense:", e);
        }
    }, []);

    return (
        <ins className="adsbygoogle"
        style={{ display: 'inline-block', width: '120px', height: '450px' }}
        data-ad-client="ca-pub-9166240275013964"
        data-ad-slot="2854881164"
        data-ad-test="on"
    ></ins>
    );
};

export default AdComponent;