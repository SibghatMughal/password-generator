import React from 'react';

function AdBanner({language}) {
  return (
    <div className={`text-[#96DBFF] bg-[#E5F6FF] min-h-[300px]  w-[90vw] lg:w-[80vw] rounded-2xl text-[48px] font-semibold flex items-center justify-center lg:m-0  lg:mb-5 lg:text-center`}>
      {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <ins class="adsbygoogle"
        style={{display: 'block'}}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script> */}
      {language=='en'?'Google Ads Goes Here':'Тут працює Google Ads'}
    </div>
  );
}

export default AdBanner;
