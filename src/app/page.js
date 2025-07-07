// src/app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>英単語・英熟語帳</h1>
      <nav>
        <ul>
          <li>
            <Link href="/new-word">新規登録</Link>
          </li>
          <li>
            <Link href="/edit-word">編集</Link>
          </li>
          <li>
            <Link href="/test">暗記テスト</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
