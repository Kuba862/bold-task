import { useState } from 'react';

const Image = ({
  src,
  alt = 'Cloudbudget default image',
  className,
  width = 'auto',
  height = 'auto',
  fallbackImageSource = 'https://picsum.photos/200/300.webp',
  style = {},
  loading = 'lazy',
  onClick = null,
  onLoad = null,
  onError = null,
  webpSource,
}) => {
  const [imageSource, setImageSource] = useState(src);

  const handleImageError = (e) => {
    setImageSource(fallbackImageSource);
    if (onError) onError();
    e.target.alt = 'Image failed to load';
  };

  return (
    <picture>
      {webpSource && <source srcSet={webpSource} type="image/webp" />}
      <img
        src={imageSource}
        alt={alt}
        className={className}
        width={width}
        height={height}
        onError={handleImageError}
        style={style}
        loading={loading}
        onClick={onClick}
        onLoad={onLoad}
      />
    </picture>
  );
};

export default Image;
