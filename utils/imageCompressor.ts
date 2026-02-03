interface CompressImageOptions {
  quality?: number;
  maxWidth?: number;
  maxHeight?: number;
}

export const compressImage = (file: File, options: CompressImageOptions = {}): Promise<File> => {
  return new Promise((resolve, reject) => {
    const { quality = 0.8, maxWidth = 1024, maxHeight = 1024 } = options;
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (!event.target?.result) {
        return reject(new Error("Failed to read file."));
      }
      
      const img = new Image();
      img.src = event.target.result as string;

      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          return reject(new Error("Failed to get canvas context."));
        }

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              return reject(new Error("Canvas to Blob conversion failed."));
            }
            const compressedFile = new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now(),
            });
            resolve(compressedFile);
          },
          'image/jpeg',
          quality
        );
      };

      img.onerror = (error) => reject(error);
    };

    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};
