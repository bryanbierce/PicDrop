const defaultState = {
  userPics: {
    '09sjdfoins0d9fhj09': {
      id: '09sjdfoins0d9fhj09',
      storageId: 'storageId#',
      originalUrl: 'http://exampleURL.com/somePath',
      title: 'My Picture',
      status: false,
      domain: 'http://exampleURL.com',
      thumbnail: 'http://placehold.it/350x350'
    },
    'fh+65d46h84dhd3f25h1': {
      id: 'fh+65d46h84dhd3f25h1',
      storageId: 'storageId#',
      originalUrl: 'http://exampleURL.com/somePath',
      title: 'My Picture',
      status: false,
      domain: 'http://exampleURL.com',
      thumbnail: 'http://placehold.it/350x350'
    },
    'gfh6857gdf9h6854df3gsdf': {
      id: 'gfh6857gdf9h6854df3gsdf',
      storageId: 'storageId#',
      originalUrl: 'http://exampleURL.com/somePath',
      title: 'My Picture',
      status: false,
      domain: 'http://exampleURL.com',
      thumbnail: 'http://placehold.it/350x350'
    },
    'sa6g54a69s8g4sd5f1': {
      id: 'sa6g54a69s8g4sd5f1',
      storageId: 'storageId#',
      originalUrl: 'http://exampleURL.com/somePath',
      title: 'My Picture',
      status: false,
      domain: 'http://exampleURL.com',
      thumbnail: 'http://placehold.it/350x350'
    }
  },
  tags: {
    myTag: {
      'sa6g54a69s8g4sd5f1': true,
      'fh+65d46h84dhd3f25h1': true
    },
    seperateTag: {
      'gfh6857gdf9h6854df3gsdf': true,
      '09sjdfoins0d9fhj09': true
    },
    overlapTag: {
      'sa6g54a69s8g4sd5f1': true,
      '09sjdfoins0d9fhj09': true
    }
  },
  folders: {
    myFolder: {
      'sa6g54a69s8g4sd5f1': true,
      'fh+65d46h84dhd3f25h1': true
    },
    seperateFolder: {
      'gfh6857gdf9h6854df3gsdf': true,
      '09sjdfoins0d9fhj09': true
    },
    overlapFolder: {
      'sa6g54a69s8g4sd5f1': true,
      '09sjdfoins0d9fhj09': true
    }
  },
  username: 'testUser',
  currentFolder: null,
  currentTags: [],
  currentViewing: null
};

export default defaultState;