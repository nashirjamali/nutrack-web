import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import withMT from '@material-tailwind/react/utils/withMT';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: defaultTheme
};

export default withMT(config);