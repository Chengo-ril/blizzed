export const categories = [
    {
        name: 'nature',
        image: 'https://i.pinimg.com/736x/83/33/be/8333beeaed9ab42f0fc590e26f2b6986.jpg',
    },
    {
        name: 'food',
        image: 'https://i.pinimg.com/564x/a2/45/24/a24524c60d6ea16adf8cf6aad6b45e77.jpg',
    },
    {
        name: 'art',
        image: 'https://i.pinimg.com/564x/bb/0c/b9/bb0cb9d46260f9189d5078f36a090c2a.jpg',
    },
    {
        name: 'travel',
        image: 'https://i.pinimg.com/736x/85/b8/52/85b852fe429f4f17ed1bfd3a6de20a75.jpg',
    },
    {
      name: 'cars',
      image: 'https://i.pinimg.com/750x/eb/47/44/eb4744eaa3b3ccd89749fa3470e2b0de.jpg',
    },
    {
        name: 'animals',
        image: 'https://i.pinimg.com/564x/24/bc/1b/24bc1b4f7fe377849b845c3182f47b4c.jpg',
    },
    {
      name: 'sports',
      image: 'https://i.pinimg.com/564x/28/c8/0d/28c80dcaf14375c50f7cdd21a1411814.jpg',
    },
    {
        name: 'fitness',
        image: 'https://i.pinimg.com/564x/f2/bb/d3/f2bbd3adc6255299103e5620ed475ec4.jpg',
    },
    {
      name: 'wallpaper',
      image: 'https://i.pinimg.com/564x/34/9e/aa/349eaa238066052a75ff36bb7188d6e5.jpg',
    },
    {
      name: 'home interior design',
      image: 'https://i.pinimg.com/564x/b8/e4/ab/b8e4abbf9d23e1020eeb4c218909b867.jpg',
    },
    {
      name: 'anime',
      image: 'https://i.pinimg.com/564x/a9/a2/e0/a9a2e0118784fbcf8fbd0e76f17df803.jpg',
    },
    {
        name: 'quotes',
        image: 'https://i.pinimg.com/564x/51/ed/e0/51ede0f0bd118f5b81a8e70221f87440.jpg',
    },
    {
      name: 'others',
      image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
    },
  ];
  
  export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;
  
  export const pinDetailQuery = (pinId) => {
    const query = `*[_type == "pin" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      about,
      category,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
     save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      }
    }`;
    return query;
  };
  
  export const pinDetailMorePinQuery = (pin) => {
    const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };
  
  export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
    return query;
  };
  
  export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
  };
  
  export const userCreatedPinsQuery = (userId) => {
    const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };
  
  export const userSavedPinsQuery = (userId) => {
    const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };