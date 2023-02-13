// new props type destructuring title and handle
function ProfileCard({ title, handle, image }) {
  //   const title = props.title;
  //   const handle = props.handle;

  //same like about with destructuring
  //   const { title, handle } = props;

  return (
    <div>
      {/* show images with <img src={image} /> */}
      <img src={image} alt="pda logo" />
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
