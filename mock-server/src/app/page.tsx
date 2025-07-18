
export default function Home() {

  const clientBaseUri = JSON.stringify(process.env.PAI_CLIENT_BASE_URI);
  console.log({clientBaseUri});

  return (
    <>
      <p>This is the Kwaai pAI Assistant mock server!</p>
      <p>Client base URI: {clientBaseUri}</p>
    </>
  );
}
