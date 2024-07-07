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
    logo: {
      file_id: "2",
      download_id: "https://avatars.githubusercontent.com/u/113130302?s=48&v=4",
      size: 0,
      hash: "test",
      mime_type: "image/png",
      upload_at: "2024-07-07T13:21:24.640Z",
    },
    title: "BestServer",
    description: "chipi chipi chapa chapa",
    created_at: "2024-07-07T13:21:24.640Z",
  },
];
