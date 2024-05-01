import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Next Basic App",
  description: "Generated by yuna moon",
};

export default async function RootLayout({ children }) {

    const resp = await fetch('http://localhost:9999/topics');
    const topics = await resp.json();

  return (
    <html>
      <body>
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          {topics.map((item)=> {
            return <li key={item.id}><Link href={`/read/${item.id}`}>{item.title}</Link></li>
          })}
          {/* <li><Link href="/read/1">html</Link></li>
          <li><Link href="/read/2">css</Link></li> */}
        </ol>
        {children}
        <ul>
          <li><Link href="/create">create</Link></li>
          <li><Link href="/update/id">update</Link></li>
          <li><input type="button" value="delete"/></li>
        </ul>
        </body>
    </html>
  );
}