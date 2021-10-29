import "./video-grid-header.scss";

export default function VideoGridHeader(props: any) {
  const { title } = props;

  return (
    <div className="video-grid-header">
      <span className="title">{title}</span>
    </div>
  );
}
