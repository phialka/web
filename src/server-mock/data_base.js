localStorage.setItem("lastUserId", 2);
localStorage.setItem("lastTokenAuth", 2);
localStorage.setItem("lastTokenRefresh", 2);

export const users = [
  {
    user_id: "0",
    name: "Vadim",
    description: "backender",
    birthdate: "1756-06-23",
    photo: {
      file_id: "0",
      download_id: "0",
      size: "0",
      hash: "test",
      mime_type: "image/png",
      upload_at: "2024-06-30T10:24:18.556Z",
    },
    tag: "gorvadi",
    login: "valentine",
    password: "mega_backender228",
    auth_data: {
      token: "0",
      refresh: "0",
    },
  },
  {
    user_id: "1",
    name: "Nikita",
    description: "frontender",
    birthdate: "2025-12-08",
    photo: {
      file_id: "1",
      download_id:
        "https://cs13.pikabu.ru/post_img/2023/10/28/2/1698456437194820220.jpg",
      size: "0",
      hash: "test",
      mime_type: "image/png",
      upload_at: "2024-06-30T10:24:18.556Z",
    },
    tag: "notdead",
    login: "ogolknev",
    password: "257257257",
    auth_data: {
      token: "1",
      refresh: "1",
    },
  },
];

export const servers = [
  {
    server_id: "0",
    owner: {
      user_id: "1",
      name: "Nikita",
      description: "frontender",
      birthdate: "2024-07-07",
      photo: {
        file_id: "1",
        download_id:
          "https://cs13.pikabu.ru/post_img/2023/10/28/2/1698456437194820220.jpg",
        size: "0",
        hash: "test",
        mime_type: "image/png",
        upload_at: "2024-06-30T10:24:18.556Z",
      },
    },
    logo: undefined,
    title: "BestServer",
    description: "chipi chipi chapa chapa",
    created_at: "2024-07-07T13:21:24.640Z",
  },
  {
    server_id: "1",
    owner: {
      user_id: "0",
      name: "Vadim",
      description: "backender",
      birthdate: "1756-06-23",
      photo: {
        file_id: "0",
        download_id: "0",
        size: "0",
        hash: "test",
        mime_type: "image/png",
        upload_at: "2024-06-30T10:24:18.556Z",
      },
    },
    logo: {
      file_id: "2",
      download_id: "https://cdnn21.img.ria.ru/images/07e5/06/18/1738448523_0:54:864:540_1920x0_80_0_0_22bd72aa578b3fece6a89a620c95c4a1.jpg",
      size: 0,
      hash: "test",
      mime_type: "image/png",
      upload_at: "2024-07-07T13:21:24.640Z",
    },
    title: "Джаз Фанк на каждый день",
    description: "Только хардкор",
    created_at: "2024-07-07T13:21:24.640Z",
  },
  {
    server_id: "2",
    owner: {
      user_id: "0",
      name: "Vadim",
      description: "backender",
      birthdate: "1756-06-23",
      photo: {
        file_id: "0",
        download_id: "0",
        size: "0",
        hash: "test",
        mime_type: "image/png",
        upload_at: "2024-06-30T10:24:18.556Z",
      },
    },
    logo: {
      file_id: "3",
      download_id: "https://cs14.pikabu.ru/post_img/big/2021/06/25/9/1624632093188089716.jpg",
      size: 0,
      hash: "test",
      mime_type: "image/png",
      upload_at: "2024-07-07T13:21:24.640Z",
    },
    title: "Мифы Средиземья",
    description: "...",
    created_at: "2024-07-07T13:21:24.640Z",
  },
];


export const channels = [
  {
    channel_id: "0",
    server_id: "0",
    title: "best server channel",
    description: "best server channel",
    logo: {
      file_id: "0",
      download_id: "https://png.pngtree.com/png-clipart/20190925/original/pngtree-vector-server-icon-png-image_4974814.jpg",
      size: 0,
      hash: "string",
      mime_type: "string",
      upload_at: "2024-07-08T19:18:35.435Z"
    },
    created_at: "2024-07-08T19:18:35.435Z"
  },
  {
    channel_id: "1",
    server_id: "1",
    title: "Канал Джаз Фанка",
    description: "...",
    logo: {
      file_id: "0",
      download_id: "https://png.pngtree.com/png-clipart/20190925/original/pngtree-vector-server-icon-png-image_4974814.jpg",
      size: 0,
      hash: "string",
      mime_type: "string",
      upload_at: "2024-07-08T19:18:35.435Z"
    },
    created_at: "2024-07-08T19:18:35.435Z"
  },
  {
    channel_id: "2",
    server_id: "0",
    title: "best server channel",
    description: "best server channel",
    logo: {
      file_id: "0",
      download_id: "https://png.pngtree.com/png-clipart/20190925/original/pngtree-vector-server-icon-png-image_4974814.jpg",
      size: 0,
      hash: "string",
      mime_type: "string",
      upload_at: "2024-07-08T19:18:35.435Z"
    },
    created_at: "2024-07-08T19:18:35.435Z"
  },
  {
    channel_id: "3",
    server_id: "0",
    title: "best server channel",
    description: "best server channel",
    logo: {
      file_id: "0",
      download_id: "https://png.pngtree.com/png-clipart/20190925/original/pngtree-vector-server-icon-png-image_4974814.jpg",
      size: 0,
      hash: "string",
      mime_type: "string",
      upload_at: "2024-07-08T19:18:35.435Z"
    },
    created_at: "2024-07-08T19:18:35.435Z"
  },
  {
    channel_id: "4",
    server_id: "0",
    title: "best server channel",
    description: "best server channel",
    logo: {
      file_id: "0",
      download_id: "https://png.pngtree.com/png-clipart/20190925/original/pngtree-vector-server-icon-png-image_4974814.jpg",
      size: 0,
      hash: "string",
      mime_type: "string",
      upload_at: "2024-07-08T19:18:35.435Z"
    },
    created_at: "2024-07-08T19:18:35.435Z"
  },
]