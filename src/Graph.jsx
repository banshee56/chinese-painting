import React from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import * as THREE from 'three';


const mockData = {
  'title1': {
    title: 'title1',
    description: 'desc',
    eventType: 'type',
    parent: null,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1106px-June_odd-eyed-cat.jpg',
    creator: 'id2',
  },
  'title2': {
    title: 'title2',
    description: 'desc',
    eventType: 'type',
    parent: 'title1',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1106px-June_odd-eyed-cat.jpg',
    creator: 'id3',
  },
};


export default function Graph() {
  const imgs = ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1106px-June_odd-eyed-cat.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1106px-June_odd-eyed-cat.jpg'];

  const handleNodeClick = (node) => {
  };

  // Random connected graph
  const gData = {
    nodes: Object.values(mockData).map((event) => ({
      id: event.title,
      img: event.image,
    })),
    links: Object.values(mockData)
        .filter((event) => event.parent !== null).map((event) => (
          {source: event.parent, target: event.title}
        )),
  };

  return (
      <ForceGraph3D
        graphData={gData}
        linkWidth={5}
        nodeLabel={'title'}
        nodeThreeObject={({img}) => {
          const imgTexture = new THREE.TextureLoader().load(img);
          const material = new THREE.SpriteMaterial({map: imgTexture});
          const sprite = new THREE.Sprite(material);
          sprite.scale.set(12, 12);

          return sprite;
        }}
        onNodeClick={handleNodeClick}

        backgroundColor={'#282c34'}
      />
  );
}

