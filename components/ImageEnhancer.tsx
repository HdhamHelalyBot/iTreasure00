
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { useAppContext } from '../context/AppContext';
import { UploadIcon, DownloadIcon } from './icons/Icons';
// FIX: Import TranslationKey for improved type safety.
import { TranslationKey } from '../lib/translations';

const ImageEnhancer: React.FC = () => {
  const { t } = useAppContext();
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);
  const [enhancedImageUrl, setEnhancedImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(',')[1]);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = (files: FileList | null) => {
    if (files && files[0]) {
      const file = files[0];
      setOriginalImage(file);
      setOriginalImageUrl(URL.createObjectURL(file));
      setEnhancedImageUrl(null);
      setError(null);
    }
  };

  const onDrag = (e: React.DragEvent<HTMLDivElement>, enter: boolean) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(enter);
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    onDrag(e, false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  const handleEnhanceClick = async () => {
    if (!originalImage) return;

    setIsLoading(true);
    setError(null);
    setEnhancedImageUrl(null);

    try {
      const base64Data = await fileToBase64(originalImage);
      const mimeType = originalImage.type;

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const imagePart = {
        inlineData: { data: base64Data, mimeType },
      };

      const textPart = {
        text: "Enhance this product image for a professional e-commerce website. Improve the quality, clarity, lighting, and colors. Remove any noise or blur. Replace the background with a clean, uniform white or light gray studio backdrop. Do not alter the product itself. The final image should be high-quality and ready for a product listing.",
      };

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [textPart, imagePart] },
      });
      
      let foundImage = false;
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64String = part.inlineData.data;
          const imageUrl = `data:${part.inlineData.mimeType};base64,${base64String}`;
          setEnhancedImageUrl(imageUrl);
          foundImage = true;
          break;
        }
      }

      if (!foundImage) {
        throw new Error("No image was returned by the API.");
      }

    } catch (err) {
      console.error(err);
      setError(t('errorEnhancing'));
    } finally {
      setIsLoading(false);
    }
  };
  
  // FIX: Update ImageBox props to use TranslationKey for title for type safety.
  const ImageBox: React.FC<{title: TranslationKey, children: React.ReactNode}> = ({title, children}) => (
    <div className="flex flex-col">
        {/* FIX: Use TranslationKey type for title to remove 'as any' cast. */}
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-700 dark:text-gray-300">{t(title)}</h3>
        <div className="relative aspect-square w-full bg-white dark:bg-gray-800 rounded-lg shadow-inner overflow-hidden border border-gray-200 dark:border-gray-700">
          {children}
        </div>
    </div>
  );

  return (
    <section id="image-enhancer" className="py-16 sm:py-24 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{t('imageEnhancerTitle')}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">{t('imageEnhancerSubtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <ImageBox title="original">
             {originalImageUrl ? (
                <img src={originalImageUrl} alt={t('original')} className="w-full h-full object-contain" />
              ) : (
                <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragEnter={(e) => onDrag(e, true)}
                    onDragLeave={(e) => onDrag(e, false)}
                    onDragOver={(e) => onDrag(e, true)}
                    onDrop={handleDrop}
                    className={`flex flex-col items-center justify-center w-full h-full p-4 text-center cursor-pointer border-2 border-dashed rounded-lg transition-colors ${
                    isDragging ? 'border-brand-red bg-red-50 dark:bg-red-900/20' : 'border-gray-300 dark:border-gray-600 hover:border-brand-red/50 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }`}
                >
                    <UploadIcon className="w-12 h-12 text-gray-400 mb-2" />
                    <p className="font-semibold text-brand-red">{t('uploadArea')}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('supportedFormats')}</p>
                    <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png, image/jpeg, image/webp"
                    className="hidden"
                    onChange={(e) => handleFileChange(e.target.files)}
                    />
                </div>
             )}
          </ImageBox>

          <ImageBox title="enhanced">
            {isLoading && (
                 <div className="flex items-center justify-center h-full flex-col space-y-2">
                    <svg className="animate-spin h-10 w-10 text-brand-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="text-gray-600 dark:text-gray-400">{t('enhancing')}</p>
                </div>
            )}
            {!isLoading && enhancedImageUrl && (
                <img src={enhancedImageUrl} alt={t('enhanced')} className="w-full h-full object-contain" />
            )}
            {!isLoading && !enhancedImageUrl && (
                 <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500 dark:text-gray-400 p-8 text-center">{t('enhancedPlaceholder')}</p>
                </div>
            )}
          </ImageBox>
        </div>

        <div className="mt-8 text-center">
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                    onClick={handleEnhanceClick}
                    disabled={!originalImage || isLoading}
                    className="w-full sm:w-auto bg-brand-red text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 disabled:bg-gray-400 disabled:dark:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100"
                >
                    {t('enhanceButton')}
                </button>
                {enhancedImageUrl && !isLoading && (
                    <a
                    href={enhancedImageUrl}
                    download="iTreasure-enhanced-image.png"
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-gray-600 dark:bg-gray-200 text-white dark:text-brand-dark font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105"
                    >
                    <DownloadIcon />
                    {t('downloadImage')}
                    </a>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ImageEnhancer;
