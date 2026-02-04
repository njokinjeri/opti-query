import Header from "./Header";
import Footer from "./Footer"

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <main className="w-screen min-h-screen bg-black text">
            <Header />
            <section>{children}</section>
            <Footer />
        </main>
    )
}