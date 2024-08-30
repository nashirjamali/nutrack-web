import { withJuno } from '@junobuild/nextjs-plugin';

export default withJuno({
  juno: { container: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
});
