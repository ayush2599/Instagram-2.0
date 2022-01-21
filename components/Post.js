import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  ChatIcon,
  DotsHorizontalIcon,
  BookmarkIcon,
  EmojiHappyIcon,
  TrashIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import Moment from "react-moment";
import { async } from "@firebase/util";
import { getStorage, ref, deleteObject } from "firebase/storage";

function Post({ id, username, userImage, img, caption, timestamp }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState([]);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState([]);
  const { commentField } = useRef();
  const [postMenu, setPostMenu] = useState();
  const storage = getStorage();

  const togglePostMenu = () => {
    setPostMenu(!postMenu);
  };

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id == session?.user?.uid) != -1
      ),
    [likes]
  );
  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
        userImage: session.user.image,
      });
    }
  };

  const deletePost = async () => {
    const fileRef = ref(storage, `posts/${id}/image`);
    await deleteObject(fileRef)
      .then(() => {
        console.log("Post Deleted Successfully!");
      })
      .catch((error) => {
        console.log("Error in Post Deletion!", error);
      });
    await deleteDoc(doc(db, "posts", id));
  };

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className=" bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        {/* UserImage */}
        <img
          src={userImage}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-bold ">{username}</p>

        {session.user.username == username && (
          <div
            className=" space-x-2 ml-[-55px] py-2  px-5 rounded-md transition duration-200 ease-in"
            style={{
              display: postMenu ? "flex" : "none",
            }}
          >
            <PencilAltIcon className=" h-6 w-6 cursor-pointer" />
            <TrashIcon
              className=" h-6 w-6 cursor-pointer"
              onClick={deletePost}
            />
          </div>
        )}

        <DotsHorizontalIcon
          className="h-5 cursor-pointer"
          onClick={() => togglePostMenu()}
        />
      </div>
      <div className="overflow-hidden">
        <img
          src={img}
          alt=""
          className=" object-top object-cover max-h-[700px] w-full"
          onDoubleClick={likePost}
        />
      </div>

      <div className="flex justify-between px-4 pt-4">
        <div className=" flex items-center space-x-4">
          {!hasLiked ? (
            <HeartIcon onClick={likePost} className="btn" />
          ) : (
            <HeartIconSolid onClick={likePost} className="btn text-red-500" />
          )}
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      <p className="px-5 pt-5 pb-2 truncate">
        {likes.length > 0 && likes.length < 2 && (
          <p className="font-bold mb-1">{likes.length} like</p>
        )}
        {likes.length > 1 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}

        <span className=" font-bold mr-1">{username} </span>
        {caption}
      </p>

      {comments.length > 0 && (
        <div className="ml-8 min-h-10 max-h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex items-center justify-center my-2"
            >
              <img
                src={comment.data().userImage}
                className="h-7 rounded-full"
              />
              <p className="flex-1 ml-3 text-sm">
                <span className="font-bold pr-2">
                  {comment.data().username}
                </span>
                {comment.data().comment}
              </p>
              <p className="grid text-right mr-5 w-fit">
                  <DotsHorizontalIcon className="h-5 ml-[80%]"/>
                <Moment fromNow className="text-xs">
                  {comment.data().timestamp?.toDate()}
                </Moment>
              </p>
            </div>
          ))}
        </div>
      )}

      <div className=" text-gray-500 text-xs my-2 mx-5">
        <Moment fromNow>{timestamp?.toDate()}</Moment>
      </div>

      <form className="flex items-center p-4 border-t">
        <EmojiHappyIcon className="h-6" />
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border-none flex-1 focus:ring-0"
          placeholder="Add a comment..."
        />
        <button
          type="submit"
          disabled={!comment.toString().trim()}
          onClick={sendComment}
          className="font-semibold text-blue-400"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;
