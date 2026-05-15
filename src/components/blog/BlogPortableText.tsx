import Image from 'next/image';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';

interface ContentImageValue {
  _type: 'contentImage';
  image?: any;
  alt?: string;
  caption?: string;
}

const components: PortableTextComponents = {
  types: {
    contentImage: ({ value }: { value: ContentImageValue }) => {
      if (!value?.image) return null;

      return (
        <figure className="my-8">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={urlFor(value.image).width(1200).url()}
              alt={value.alt ?? ''}
              width={1200}
              height={675}
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="w-full rounded-xl object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

interface BlogPortableTextProps {
  value: any[];
}

export default function BlogPortableText({ value }: BlogPortableTextProps) {
  return (
    <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-[#37afae]">
      <PortableText value={value} components={components} />
    </div>
  );
}
