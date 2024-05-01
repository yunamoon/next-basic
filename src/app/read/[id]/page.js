export default async function Read(props) {
  const resp = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `topics/${props.params.id}`,
    {
      cache: "no-store",
    }
  );
  const data = await resp.json();

  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </>
  );
}
