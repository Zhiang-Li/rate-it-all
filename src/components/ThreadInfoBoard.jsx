import PropTypes from "prop-types";

export default function ThreadInfoBoard({ thread }) {

  return (
    <div className="border border-dark d-flex justify-content-center align-items-center" >
      <div className="p-3 text-center text-wrap text-break">
        <img src={thread.threadImage}
          className="img-fluid img-thumbnail"
          style={{ height: 200, width: 180 }} />
        <h4 className="fw-bold">{thread.threadTitle}</h4>
        <hr className="hr" />
        <p>{thread.threadDescription}</p>
      </div>
    </div>
  );
}

ThreadInfoBoard.propTypes = {
  thread: PropTypes.shape({
    threadTag: PropTypes.string.isRequired,
    threadImage: PropTypes.string.isRequired,
    threadTitle: PropTypes.string.isRequired,
    threadDescription: PropTypes.string.isRequired,
    objects: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
  }),
};