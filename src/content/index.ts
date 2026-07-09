import portfolioContent from "./portfolio-content.json";
import { getIcon } from "./iconMap";

const assetModules = import.meta.glob("../assets/**/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export function resolveAsset(path: string): string {
  const key = `../assets/${path}`;
  return assetModules[key] ?? path;
}

export function usePortfolioContent() {
  const content = portfolioContent;

  const skills = content.skills.items.map((item) => ({
    skill: item.name,
    icon: getIcon(item.icon),
  }));

  const heroLinks = content.hero.links.map((link) => ({
    ...link,
    icon: link.icon ? getIcon(link.icon) : null,
    href: link.type === "resume" ? resolveAsset(content.assets.resume) : link.url,
    isDownload: link.type === "resume",
    downloadName:
      link.type === "resume"
        ? content.assets.resumeDownloadName ?? "Resume.pdf"
        : undefined,
  }));

  const projects = content.projects.items.map((project) => ({
    ...project,
    storeLinks: project.storeLinks?.map((storeLink) => ({
      ...storeLink,
      icon: getIcon(storeLink.icon),
    })),
  }));

  return {
    content,
    skills,
    heroLinks,
    projects,
    profileImage: resolveAsset(content.assets.profileImage),
    favicon: resolveAsset(content.meta.favicon),
    heroAnimation: content.hero.animation ?? { enabled: false },
  };
}

export type PortfolioContent = typeof portfolioContent;
