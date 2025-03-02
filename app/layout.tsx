import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Test from "./ui/test";
import Enfant from "./ui/enfant";

// on cree le composant RootLayout, qui prend en parametre children
// on utilise la destructuration pour declarer children
// tous les composants React possedes des props (props)
// const props = { children : [], autreprops: "", encoreUneAutreProps: 0 }
// const children = props.children
// const autreprops = props.autreprops
// const encoreUneAutreProps = props.encoreUneAutreProps
// const { children, autreprops, encoreUneAutreProps } = props

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
