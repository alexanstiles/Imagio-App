// export function importPosts() {
//   return {
//     type: "IMPORT_POSTS",
//   };
// }

export function createPost() {
  return {
    type: "CREATE_POST",
  };
}

// export function getLatestPost() {
//   return {
//     type: "GET_POST",
//   }
// }

export function setPhoto(photo) {
  return {
    type: "ADD_PHOTO",
    photo
  };
}

export function setCaption(caption) {
  return {
    type: "ADD_CAPTION",
    caption
  };
}

export function setLiked() {
  return {
    type: "SET_LIKED",
  };
}

export function addComment(comment) {
  return {
    type: "ADD_COMMENT",
    comment
  };
}