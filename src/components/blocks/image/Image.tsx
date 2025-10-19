import { IMAGE_LOADING } from "./image.constants";
import type { ImageBlockProps as Props } from "./image.types";

export const Image = (props: Props) => {
   const { id, src, alt, classNames, align, style, height, width, shape, loading, figure, caption } = props;

   const baseClass = "image-block";
   const alignmentClass = align ? `text-${align}` : "";
   const shapeClass = shape ? `image-shape-${shape}` : "";
   const extraClasses = Array.isArray(classNames) ? classNames.join(" ") : classNames || "";
   const classes = [baseClass, alignmentClass, shapeClass, extraClasses].filter(Boolean).join(" ");

   const figureClasses = figure && figure.classNames
    ? Array.isArray(figure.classNames)
      ? figure.classNames.join(" ")
      : figure.classNames
    : "";
  const figureStyle = figure?.style;

  const captionText = caption?.text;
  const captionClasses = caption && caption.classNames
    ? Array.isArray(caption.classNames)
      ? caption.classNames.join(" ")
      : caption.classNames
    : "";
  const captionStyle = caption?.style;

  const imgElement = (
    <img
      src={src }
      alt={alt || ""}
      width={width}
      height={height}
      loading={loading as any || IMAGE_LOADING.EAGER}
      className={classes}
      style={style}
    />
  );

  if (figure || captionText) {
    return (
      <figure id={id} className={figureClasses} style={figureStyle}>
        {imgElement}
        {captionText && (
          <figcaption className={captionClasses} style={captionStyle}>
            {captionText}
          </figcaption>
        )}
      </figure>
    );
  }

  return imgElement;
}