import Image from "next/image";

export default function Home() {
  return (<>
    {/* <Homepage/> */}
    <div style={{
      width: '100vw',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      boxSizing: 'border-box',
    }}>
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          height: "max-content",
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          borderRadius: '12px',
        }}
      >
        {/* Text above image */}
        <div style={{
          color: "#000",
          fontWeight: "bold",
          padding: '1rem',
          textAlign: 'center',
          fontSize: '1.2rem',
        }}>
          <h1 style={{
            fontSize: 'clamp(1.2rem, 4vw, 2rem)',
            margin: 0,
          }}>
            Codedbus Information Technology Limited
          </h1>
        </div>

        {/* Image fills container */}
        <Image
          src="/assets/ud.jpg"
          alt="Full screen image"
          width={1920}
          height={1080}
          style={{
            width: '100%',
            height: 'auto', // <-- fit height based on image's natural size
            objectFit: 'contain',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
          }}
          priority
        />


      </div>
    </div>
  </>
  );
}
