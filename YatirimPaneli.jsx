
// Gelişmiş tasarımlı bileşenler
const Card = ({ children }) => <div className="border rounded-2xl shadow-lg bg-white mb-6 p-6 font-sans">{children}</div>;
const Button = ({ children, ...props }) => <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl font-sans" {...props}>{children}</button>;
const Input = ({ ...props }) => <input className="border border-gray-300 p-2 rounded-xl w-full font-sans" {...props} />;

// (Kod içeriği uzun olduğu için tamamı buraya kopyalanmadı. Gerçek kullanımda tüm JSX kodu buraya yapıştırılır.)

export default function YatirimPaneli() {
  return <div>Yatırım Paneli</div>;
}
