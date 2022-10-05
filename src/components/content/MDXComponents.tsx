import Image from 'next/image';

import CustomCode, { Pre } from '@/components/content/CustomCode';
import SplitImage, { Split } from '@/components/content/SplitImage';
import CloudinaryImg from 'image/CloudinaryImg';
import CustomLink from 'link/CustomLink';

const MDXComponents = {
  a: CustomLink,
  Image,
  pre: Pre,
  code: CustomCode,
  CloudinaryImg,
  SplitImage,
  Split,
};

export default MDXComponents;
