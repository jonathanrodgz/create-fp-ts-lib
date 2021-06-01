import { Json } from '../../Json'

const publishYml: Json = {
  name: 'Publish',
  on: {
    release: {
      types: ['published'],
    },
  },
  jobs: {
    build: {
      'runs-on': 'ubuntu-latest',
      steps: [
        {
          uses: 'actions/checkout@v1',
        },
        {
          uses: 'actions/setup-node@v1',
          with: {
            'node-version': 12,
            'registry-url': 'https://registry.npmjs.org/',
          },
        },
        {
          run: 'yarn install',
        },
        {
          run: 'npm publish --access public',
          env: {
            NODE_AUTH_TOKEN: '${{secrets.NPM_TOKEN}}',
          },
        },
      ],
    },
  },
}

export default publishYml