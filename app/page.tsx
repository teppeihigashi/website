import Image from 'next/image';
import './globals.css';

type InfoItem = {
  label: string;
  value: string | string[];
};

export default function HomePage() {
  const info: InfoItem[] = [
    { label: '屋号', value: '東技研（ヒガシギケン）' },
    { label: '名前', value: '東哲平（ヒガシテッペイ）' },
    { label: '性別', value: '男性' },
    { 
      label: '言語', 
      value: [
        '日本語（ネイティブ）',
        '英語（ビジネス）',
      ],
    },
    { 
      label: '資格', 
      value: [
        'Oracle Master Bronze DBA (2024年9月)',
        'ITIL4 Foundation (2023年9月)',
        'TOEIC800点(2022年10月)',
      ],
    },
  ];

  return (
    <main>
      <section>
        <h1>基本情報</h1>
        <table className="info-table">
          <tbody>
            <tr>
              <td className="label">顔</td>
              <td>
                <Image
                  src="/profile.jpg"
                  alt="プロフィール写真"
                  width={100}
                  height={100}
                />
              </td>
            </tr>
            {info.map((item, index) => (
              <tr key={index}>
                <td className="label">{item.label}</td>
                <td className="value">
                  {Array.isArray(item.value) ? item.value.join(', ') : item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
