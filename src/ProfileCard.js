// new props type destructuring title and handle
function ProfileCard({ title, handle, image, description }) {
  //   const title = props.title;
  //   const handle = props.handle;

  //same like about with destructuring
  //   const { title, handle } = props;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          {/* show images with <img src={image} /> */}
          <img src={image} alt="pda logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
