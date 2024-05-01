
export default async function Read (props) {

    const resp = await fetch (`http://localhost:9999/topics/${props.params.id}`);
    const data = await resp.json();

    return (
        <>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
        </>
    )
}