export default {
  nodes: [
    {
      kind: 'OBJECT',
      name: 'Query',
      description: '',
      fields: [
        {
          name: 'continents',
          description: 'Im a list of continents',
          args: [],
          isRequired: false,
          isList: true,
          type: {
            kind: 'OBJECT',
            name: 'Continent',
          },
        },
        {
          name: 'continent',
          description: '',
          args: [
            {
              name: 'code',
              description: '',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
          ],
          isRequired: false,
          isList: false,
          type: {
            kind: 'OBJECT',
            name: 'Continent',
          },
        },
        {
          name: 'countries',
          description: '',
          args: [],
          isRequired: false,
          isList: true,
          type: {
            kind: 'OBJECT',
            name: 'Country',
          },
        },
        {
          name: 'country',
          description: '',
          args: [
            {
              name: 'code',
              description: '',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
          ],
          isRequired: false,
          isList: false,
          type: {
            kind: 'OBJECT',
            name: 'Country',
          },
        },
        {
          name: 'languages',
          description: '',
          args: [],
          isRequired: false,
          isList: true,
          type: {
            kind: 'OBJECT',
            name: 'Language',
          },
        },
        {
          name: 'language',
          description: '',
          args: [
            {
              name: 'code',
              description: '',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
              defaultValue: null,
            },
          ],
          isRequired: false,
          isList: false,
          type: {
            kind: 'OBJECT',
            name: 'Language',
          },
        },
      ],
      id: 0,
    },
    {
      kind: 'OBJECT',
      name: 'Continent',
      description: '',
      fields: [
        {
          name: 'code',
          description: '',
          args: [],
          isRequired: false,
          isList: false,
          type: {
            kind: 'SCALAR',
            name: 'String',
          },
        },
        {
          name: 'name',
          description: '',
          args: [],
          isRequired: false,
          isList: false,
          type: {
            kind: 'SCALAR',
            name: 'String',
          },
        },
        {
          name: 'countries',
          description: '',
          args: [],
          isRequired: false,
          isList: true,
          type: {
            kind: 'OBJECT',
            name: 'Country',
          },
        },
      ],
      id: 1,
    },
    {
      kind: 'OBJECT',
      name: 'Country',
      description: '',
      fields: [
        {
          name: 'code',
          description: '',
          args: [],
          isRequired: false,
          isList: false,
          type: {
            kind: 'SCALAR',
            name: 'String',
          },
        },
        {
          name: 'name',
          description: '',
          args: [],
          isRequired: false,
          isList: false,
          type: {
            kind: 'SCALAR',
            name: 'String',
          },
        },
        {
          name: 'native',
          description: '',
          args: [],
          isRequired: false,
          isList: false,
          type: {
            kind: 'SCALAR',
            name: 'String',
          },
        },
        {
          name: 'phone',
          description: '',
          args: [],
          isRequired: false,
          isList: false,
          type: {
            kind: 'SCALAR',
            name: 'String',
          },
        },
        {
          name: 'continent',
          description: '',
          args: [],
          isRequired: false,
          isList: false,
          type: {
            kind: 'OBJECT',
            name: 'Continent',
          },
        },
        {
          name: 'currency',
          description: '',
          args: [],
          isRequired: false,
          isList: false,
          type: {
            kind: 'SCALAR',
            name: 'String',
          },
        },
        {
          name: 'languages',
          description: '',
          args: [],
          isRequired: false,
          isList: true,
          type: {
            kind: 'OBJECT',
            name: 'Language',
          },
        },
        {
          name: 'emoji',
          description: '',
          args: [],
          isRequired: false,
          isList: false,
          type: {
            kind: 'SCALAR',
            name: 'String',
          },
        },
        {
          name: 'emojiU',
          description: '',
          args: [],
          isRequired: false,
          isList: false,
          type: {
            kind: 'SCALAR',
            name: 'String',
          },
        },
      ],
      id: 3,
    },
    {
      kind: 'OBJECT',
      name: 'Language',
      description: '',
      fields: [
        {
          name: 'code',
          description: '',
          args: [],
          isRequired: false,
          isList: false,
          type: {
            kind: 'SCALAR',
            name: 'String',
          },
        },
        {
          name: 'name',
          description: '',
          args: [],
          isRequired: false,
          isList: false,
          type: {
            kind: 'SCALAR',
            name: 'String',
          },
        },
        {
          name: 'native',
          description: '',
          args: [],
          isRequired: false,
          isList: false,
          type: {
            kind: 'SCALAR',
            name: 'String',
          },
        },
        {
          name: 'rtl',
          description: '',
          args: [],
          isRequired: false,
          isList: false,
          type: {
            kind: 'SCALAR',
            name: 'Int',
          },
        },
      ],
      id: 4,
    },
    {
      kind: 'ENUM',
      name: 'CacheControlScope',
      description: '',
      fields: [],
      id: 15,
    },
  ],
  links: [
    {
      source: 'Query',
      target: 'Continent',
    },
    {
      source: 'Query',
      target: 'Continent',
    },
    {
      source: 'Query',
      target: 'Country',
    },
    {
      source: 'Query',
      target: 'Country',
    },
    {
      source: 'Query',
      target: 'Language',
    },
    {
      source: 'Query',
      target: 'Language',
    },
    {
      source: 'Continent',
      target: 'Country',
    },
    {
      source: 'Country',
      target: 'Continent',
    },
    {
      source: 'Country',
      target: 'Language',
    },
  ],
};
