import Header from "./components/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div dir="rtl">{children}</div>

      
    </>
  );
}
