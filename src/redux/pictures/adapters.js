export const dataToPicsListAdapter = data => {
  const picsData = data.map((pic) => ({
    albumId: pic[`albumId`],
    id: pic[`id`],
    title: pic[`title`],
    url: pic[`url`],
    thumbnailUrl: pic[`thumbnailUrl`]
  }))

  return picsData;
};
