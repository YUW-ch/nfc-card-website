import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { EditorIntro } from "@/components/EditorIntro";
import { EditorCheckout } from "@/components/EditorCheckout";
import { slugToLocale } from "@/lib/locale";
import { fetchShop } from "@/lib/catalog";
import { buildMetadata, seoCopy } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const loc = slugToLocale((await params).locale) ?? "DE";
  return buildMetadata({
    locale: loc,
    path: "/editor",
    title: seoCopy.editor.title[loc],
    description: seoCopy.editor.description[loc],
  });
}

export default async function EditorPage() {
  const { catalog, volumeTiers } = await fetchShop();
  return (
    <>
      <Nav />
      <main className="flex-1 pt-28 sm:pt-32">
        <EditorIntro />
        <div className="pb-24 sm:pb-32">
          <EditorCheckout catalog={catalog} volumeTiers={volumeTiers} />
        </div>
      </main>
      <Footer />
    </>
  );
}
