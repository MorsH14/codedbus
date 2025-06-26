import Image from "next/image";

export default function Home() {
  return (<>
    {/* <Homepage/> */}
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ width: '60vw', height: '80vh', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
        {/* Text above image */}
        <div style={{ color: "#000000", fontWeight: "bold", padding: '1rem', textAlign: 'center' }}>
          <h1>Codedbus Information Technology Limited</h1>
        </div>

        {/* Image fills container */}
        <Image
          src="/assets/ud.jpg"
          alt="Full screen image"
          width={1920}
          height={1080}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          priority
        />
      </div>
    </div>
    </>
  );
}
