const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getBooks = () =>
  delay(1500).then(() => [
    {
      title: 'The Wind in the Willows',
      author: 'Kenneth Grahame',
      published: 1908
    },
    {
      title: 'The Player of Games',
      author: 'Iain M. Banks',
      published: 1988
    },
    {
      title: 'Infinite Jest',
      author: 'David Foster Wallace',
      published: 1996
    },
    {
      title: 'Neuromancer',
      author: 'William Gibson',
      published: 1984
    }
  ]);
