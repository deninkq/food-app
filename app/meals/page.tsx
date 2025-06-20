import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <h1>Meals page</h1>
      <Link href={"/meals/page-1"}>detail page: 1</Link>
      <Link href={"/meals/page-2"}>detail page: 2</Link>
    </>
  );
}
