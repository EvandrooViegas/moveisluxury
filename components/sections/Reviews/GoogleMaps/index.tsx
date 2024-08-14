export default function GoogleMaps() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99579.22761573571!2d-9.242137023329635!3d38.744184419867025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisboa!5e0!3m2!1spt-PT!2spt!4v1723484468906!5m2!1spt-PT!2spt"
      width="100%"
      height="600"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

