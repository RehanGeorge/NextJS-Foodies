import Link from "next/link"

export default function Meals() {
    return (
        <>
            <h1>This is the meals page</h1>
            <Link href="/meals/share">Share</Link>
            <Link href="/meals/recipe-1">Recipe 1</Link>
            <Link href="/meals/recipe-2">Recipe 2</Link>
        </>
    )
}