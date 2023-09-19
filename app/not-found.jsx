import Link from "next/link"

export default function NotFound() {
    return (
        <section className="flex flex-col h-screen items-center justify-center gap-4 text-sm">
            <h1>Error 404</h1>
            <p>¿Te perdiste en el ciberespacio? XD</p>
            <Link href="/" className="text-lime-600 hover:bg-white px-4 py-2">
                Ir a Inicio
            </Link>
        </section>
    )
}