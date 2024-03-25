const ProfileCard = ({
  bio1,
  bio2,
  bio3,
  bio4,
  name,
  title,
  image,
  summary,
}) => {
  return (
    <>
      <div className="card w-96 bg-gray-50 shadow-xl m-10 font-montserra z-0">
        <figure className="px-10 pt-10">
          <img src={image} alt="Headshot" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="text-2xl">{title}</p>
          <p>{summary}</p>
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() =>
                document.getElementById(`my_modal_${name}`).showModal()
              }
            >
              Read more
            </button>
            <dialog id={`my_modal_${name}`} className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <div class="flex">
                  <figure className="px-10 pt-10">
                    <img src={image} alt="Headshot" className="rounded-xl" />
                  </figure>
                  <div class="flex items-center justify-center">
                    <div>
                      <h2 className="card-title">{name}</h2>
                      <p className="text-2xl">{title}</p>
                    </div>
                  </div>
                </div>
                <p className="py-2">{bio1}</p>
                <p className="py-2">{bio2}</p>
                <p className="py-2">{bio3}</p>
                <p className="py-2">{bio4}</p>

                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
