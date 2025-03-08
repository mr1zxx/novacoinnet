import { useEffect } from "react";

const AdComponent = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("!", e);
        }
    }, []);

    return (
        <ins className="adsbygoogle"
        style={{ display: 'inline-block', width: '120px', height: '450px' }}
        data-ad-client="hidden"
        data-ad-slot="hidden"
        data-ad-test="on"
    ></ins>
    );
};

export default AdComponent;
