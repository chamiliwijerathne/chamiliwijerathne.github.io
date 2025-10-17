import type { LinkBlock as Props } from "./link.types";

export const Link = (props: Props) => {
  const { label, url, target, rel, variant, classNames, style } = props;

  const baseClass = "link";
  const variantClass = variant ? `link-${variant}` : "";
  const extraClasses = Array.isArray(classNames)
    ? classNames.join(" ")
    : classNames || "";
  const classes = [baseClass, variantClass, extraClasses]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={url}
      target={target}
      rel={rel ? rel.join(" ") : undefined}
      className={classes}
      style={style}
    >
      {label}
    </a>
  );
}