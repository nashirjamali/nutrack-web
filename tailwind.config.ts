import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import withMT from '@material-tailwind/react/utils/withMT';

const config: Config = {
  content: [
    './src/pages/*/.{js,ts,jsx,tsx,mdx}',
    './src/components/*/.{js,ts,jsx,tsx,mdx}',
    './src/app/*/.{js,ts,jsx,tsx,mdx}'
  ],
  theme: defaultTheme
};

export default withMT(config);
