import Header from "./Header";
import Footer from "./Footer"

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <main className="w-full min-h-screen bg-black flex flex-col">
            <Header />
            <section>{children}</section>
            <Footer />
        </main>
    )
}