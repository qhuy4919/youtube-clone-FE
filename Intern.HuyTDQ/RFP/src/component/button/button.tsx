import { button } from '../../model/button';
import './button.scss';

export function Button(props: button): JSX.Element {
  const { color, children, disable, height, width, basic, icon } = props;
  //
  const classProperties = [basic, icon].join(' ');
  //
  return (
    <button
      className={classProperties}
      style={{
        backgroundColor: color,
        height: height,
        width: width,
      }}
      disabled={disable}
    >
      {children}
    </button>
  );
}
