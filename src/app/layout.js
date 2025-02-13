import "./globals.css";

export const metadata = {
  title: "Refocus",
  description: "user management system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
