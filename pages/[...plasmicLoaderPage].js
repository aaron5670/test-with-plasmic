/**
 * This file was auto-generated by Plasmic.
 *
 * Plasmic makes use of Next's catch-all to register your Plasmic pages. You may make
 * changes on this file, or remove it completely.
 */
import { useRouter } from "next/router";
import PlasmicLoader, {
  getUnregisteredPageUrls,
  getComponentFromUrl,
} from "@plasmicapp/loader";

export default function PlasmicLoaderPage() {
  const router = useRouter();
  const { name, projectId } = getComponentFromUrl(
    router.query.plasmicLoaderPage
  );
  return <PlasmicLoader component={name} projectId={projectId} />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    paths: getUnregisteredPageUrls()
      .filter((url) => url !== "/")
      .map((url) => ({
        params: { plasmicLoaderPage: url.substring(1).split("/") },
      })),
    fallback: false,
  };
}