import "./globals.css";

export const metadata = {
  title: "Richard Lee — Web Design & Development",
  description: "I design & build fast, clean websites that make you money.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
